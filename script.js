/* =========================================
   GUATEBALA OS CORE - FINAL AUDIO FIX
   ========================================= */

/* 1. CONFIGURACIÓN FÍSICA */
const CONFIG = { 
    spread: 140, hoverLift: -80, baseY: 100, lerpFactor: 0.05
};

let foldersData = [];
let activeFolderID = null;
let mouseX = -1000;
let isPaused = false;

/* 2. REFERENCIAS DOM */
const bootScreen = document.getElementById('boot-screen');
const gameInterface = document.getElementById('game-interface');
const trackPlayer = document.getElementById('track-player');

// Assets de Audio
const sfxBoot = document.getElementById('sfx-boot');
const sfxHover = document.getElementById('sfx-hover');
const sfxOpen = document.getElementById('sfx-open');
const sfxSlide = document.getElementById('sfx-slide');
const bgmPause = document.getElementById('bgm-pause');

/* 3. BOOT SEQUENCE */
if (bootScreen) {
    bootScreen.addEventListener('click', () => {
        if(sfxBoot) sfxBoot.play().catch(()=>{});
        
        bootScreen.style.transition = "opacity 0.8s ease";
        bootScreen.style.opacity = '0';

        setTimeout(() => {
            bootScreen.style.display = 'none';
            gameInterface.classList.remove('hidden');
            setTimeout(() => { gameInterface.style.opacity = '1'; }, 100);
            initFolders(); 
            requestAnimationFrame(animateLoop); 
        }, 800);
    });
}

/* 4. MOTOR FÍSICO */
document.addEventListener('mousemove', (e) => mouseX = e.clientX);
document.addEventListener('mouseleave', () => mouseX = -1000);

function initFolders() {
    foldersData = [];
    const els = document.querySelectorAll('.folder:not(.hidden-folder)');
    els.forEach((el, index) => {
        foldersData.push({ 
            el: el, id: parseInt(el.dataset.id),
            x: 0, y: 1000, rot: 0, scale: 0.8, 
            targetX: 0, targetY: CONFIG.baseY, targetRot: 0, targetScale: 1,
            zIndex: index 
        });
        el.onclick = () => {
            if (isPaused) return;
            const id = parseInt(el.dataset.id);
            if (activeFolderID === null) { openFolder(id); }
        };
    });
}

function animateLoop() {
    if (!isPaused) {
        const centerX = window.innerWidth / 2;
        const totalFolders = foldersData.length;
        const centerOffset = (totalFolders - 1) / 2; 
        foldersData.forEach((f, index) => {
            if (activeFolderID !== null) {
                if (f.id === activeFolderID) {
                    f.targetX = 0; f.targetY = 0; f.targetRot = 0; f.targetScale = 1; f.el.style.zIndex = 1000;
                } else {
                    f.targetY = window.innerHeight + 500; f.targetRot = (Math.random() - 0.5) * 20;
                }
            } else {
                const offsetIndex = index - centerOffset; 
                f.targetX = offsetIndex * CONFIG.spread; f.targetY = CONFIG.baseY; f.targetRot = offsetIndex * 5; f.targetScale = 1;
                const folderScreenX = centerX + f.x; 
                const dist = Math.abs(mouseX - folderScreenX);
                const influence = Math.max(0, 1 - (dist / 250)); 
                if (influence > 0) {
                    f.targetY += influence * CONFIG.hoverLift; f.targetScale += influence * 0.15;
                    f.targetRot = f.targetRot * (1 - influence); f.el.style.zIndex = 100 + Math.floor(influence * 100);
                    let pushForce = (mouseX - folderScreenX) * -0.5 * influence; f.targetX += pushForce; 
                    if (influence > 0.8 && f.el.dataset.sound !== 'played') {
                        if(sfxHover) { sfxHover.currentTime = 0; sfxHover.volume = 0.2; sfxHover.play().catch(()=>{}); }
                        f.el.dataset.sound = 'played';
                    }
                } else {
                    f.el.style.zIndex = index; f.el.dataset.sound = 'ready';
                }
            }
            f.x += (f.targetX - f.x) * CONFIG.lerpFactor; f.y += (f.targetY - f.y) * CONFIG.lerpFactor;
            f.rot += (f.targetRot - f.rot) * CONFIG.lerpFactor; f.scale += (f.targetScale - f.scale) * CONFIG.lerpFactor;
            f.el.style.transform = `translate(${f.x}px, ${f.y}px) rotate(${f.rot}deg) scale(${f.scale})`;
        });
    }
    requestAnimationFrame(animateLoop);
}

/* 5. DATABASE */
const MISSION_DB = {
    1: { title: "GENESIS", subject: "KILLA NOTA", time: "03:45", track: "assets/track_01.mp3", text: "INFORME INICIAL.\nEl sujeto muestra capacidades anómalas.\nPrimer contacto establecido en Zona 1." },
    2: { title: "FUEGO", subject: "KILLA NOTA", time: "02:30", track: "assets/track_02.mp3", text: "ALERTA TÉRMICA.\nSe detectaron altos niveles de distorsión.\nLa ciudad está ardiendo." },
    3: { title: "NIEBLA", subject: "UNKNOWN", time: "04:10", track: "assets/track_03.mp3", text: "VISIBILIDAD NULA.\nNo hay rastro del objetivo.\nProceder con cautela." },
    4: { title: "ECHO", subject: "ECHO UNIT", time: "03:15", track: "assets/track_04.mp3", text: "SEÑAL REPETITIVA.\nEl mensaje se repite infinitamente.\nEs una trampa." },
    5: { title: "OMEGA", subject: "KILLA NOTA", time: "05:00", track: "assets/track_05.mp3", text: "EL FINAL.\nTodo termina aquí.\nProtocolo Omega activado." },
    6: { title: "BONUS", subject: "SYNTAX CARTEL", time: "09:99", track: "assets/track_06.mp3", text: "ACCESO VIP.\nBienvenido al núcleo.\nHackea el planeta." }
};

function openFolder(id) {
    activeFolderID = id;
    const folderData = foldersData.find(f => f.id === id);
    const el = folderData.el;
    
    if(sfxOpen) { sfxOpen.currentTime = 0; sfxOpen.play().catch(()=>{}); }

    setTimeout(() => {
        el.classList.add('extracted');
        if(sfxSlide) { sfxSlide.currentTime = 0; sfxSlide.play().catch(()=>{}); }
        renderSheetContent(el, id); 
    }, 300);
}

// === FIX IMPORTANTE: VERIFICAR ESTADO AL RENDERIZAR ===
function renderSheetContent(el, id) {
    const sheet = el.querySelector('.paper-sheet');
    const data = MISSION_DB[id] || { title: "ERROR", text: "DATA CORRUPTED" };
    
    // VERIFICAR SI ESTA CANCIÓN YA ESTÁ SONANDO
    // Si el reproductor tiene este archivo Y no está pausado...
    const isPlayingThis = trackPlayer.src.includes(data.track) && !trackPlayer.paused;
    
    // Definimos texto y estilo inicial del botón según el estado real
    const btnText = isPlayingThis ? "[ PAUSA ]" : "[ REPRODUCIR ]";
    const btnStyle = isPlayingThis ? "background: #222; color: #fff;" : "";

    sheet.innerHTML = `
        <div class="sheet-header"><span>EXP: ${data.title}</span><span>ID: 00${id}</span></div>
        <div class="sheet-body"><p>> AGENTE: ${data.subject}</p><p>> DURACIÓN: ${data.time}</p><hr style="border: 1px dashed #333; margin: 15px 0;"><p style="white-space: pre-line;">${data.text}</p></div>
        <div class="sheet-controls">
            <button id="btn-audio-${id}" class="sheet-btn" style="${btnStyle}" onclick="toggleTrack('${data.track}', this)">${btnText}</button>
            <button class="sheet-btn sheet-close" onclick="closeSheet(event)">[ GUARDAR EXPEDIENTE ]</button>
        </div>
    `;
}

function closeSheet(e) {
    if(e) e.stopPropagation();
    const openEl = document.querySelector('.folder.extracted');
    if (openEl) {
        openEl.classList.remove('extracted');
        // NOTA: NO paramos la música al cerrar (opcional), para que siga el vibe.
        // Si quieres que pare, descomenta la siguiente línea:
        // if(trackPlayer) trackPlayer.pause(); 
    }
    setTimeout(() => { activeFolderID = null; }, 500);
}

/* === LÓGICA DE AUDIO BLINDADA === */
window.toggleTrack = function(url, btn) {
    
    // ¿Es el mismo track que ya tiene el player?
    const isSameTrack = trackPlayer.src.includes(url);

    // CASO 1: ES EL MISMO TRACK
    if (isSameTrack) {
        if (trackPlayer.paused) {
            // Estaba pausado -> REANUDAR
            trackPlayer.play();
            btn.innerText = "[ PAUSA ]";
            btn.style.background = "#222";
            btn.style.color = "#fff";
        } else {
            // Estaba sonando -> PAUSAR
            trackPlayer.pause();
            btn.innerText = "[ REPRODUCIR ]";
            btn.style.background = "transparent";
            btn.style.color = "inherit";
        }
    } 
    // CASO 2: ES UN TRACK NUEVO
    else {
        trackPlayer.src = url;
        trackPlayer.currentTime = 0;
        trackPlayer.play().then(() => {
            // Éxito -> Poner en modo PAUSA
            btn.innerText = "[ PAUSA ]";
            btn.style.background = "#222";
            btn.style.color = "#fff";
        }).catch(e => {
            console.error("Error cargando:", e);
            btn.innerText = "[ ERROR ]";
        });
    }

    // EXTRA: Si la canción termina sola, resetear botón
    trackPlayer.onended = () => {
        btn.innerText = "[ REPRODUCIR ]";
        btn.style.background = "transparent";
        btn.style.color = "inherit";
    };
};

/* 8. PAUSA (ESC) */
function togglePause() {
    const pauseMenu = document.getElementById('pause-menu');
    const extracted = document.querySelector('.folder.extracted');
    if (extracted) { closeSheet(); return; }
    isPaused = !isPaused;
    if (isPaused) {
        pauseMenu.classList.remove('hidden');
        if(bgmPause) { bgmPause.volume = 0.5; bgmPause.play().catch(()=>{}); }
    } else {
        pauseMenu.classList.add('hidden');
        if(bgmPause) { bgmPause.pause(); bgmPause.currentTime = 0; }
        requestAnimationFrame(animateLoop);
    }
}
document.addEventListener('keydown', (e) => { if(e.key === "Escape") togglePause(); });