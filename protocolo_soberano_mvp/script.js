const SCENARIOS = [
  {
    id: "blackout_north",
    title: "Apagon En Zona Norte",
    short: "Hospitales sin energia. Decides a quien priorizar en 30 minutos.",
    feed: "03:14 - 2.1M ciudadanos afectados.",
    options: [
      {
        side: "left",
        tag: "duro",
        text: "Blindar energia para Estado y hospital central.",
        immediate: { control: 15, legitimidad: -9, confianza: -7, costoHumano: 9, riesgoFuturo: 5 },
        debt: { delay: 2, effects: { legitimidad: -8, riesgoFuturo: 7 }, note: "Racionamiento selectivo provoca protesta." }
      },
      {
        side: "right",
        tag: "conciliador",
        text: "Rotacion por barrios y servicios basicos.",
        immediate: { control: 5, legitimidad: 7, confianza: 6, costoHumano: 4, riesgoFuturo: 1 },
        debt: { delay: 1, effects: { control: -3 }, note: "Mandos locales cuestionan coordinacion." }
      }
    ]
  },
  {
    id: "media_leak",
    title: "Audio Filtrado",
    short: "Un audio incrimina al mando regional. El pais exige respuesta.",
    feed: "06:22 - #QuienDaLaOrden domina tendencia nacional.",
    options: [
      {
        side: "left",
        tag: "duro",
        text: "Suspender difusion y bloquear nodos hostiles.",
        immediate: { control: 13, legitimidad: -12, confianza: -5, costoHumano: 3, riesgoFuturo: 8 },
        debt: { delay: 2, effects: { legitimidad: -7, riesgoFuturo: 5 }, note: "Surgen redes clandestinas de informacion." }
      },
      {
        side: "right",
        tag: "pragmatico",
        text: "Publicar version oficial y abrir auditoria.",
        immediate: { control: 4, legitimidad: 7, confianza: 8, costoHumano: 1, riesgoFuturo: 0 }
      }
    ]
  },
  {
    id: "resource_strike",
    title: "Paro Logistico",
    short: "Transportistas y sanitarios frenan rutas criticas.",
    feed: "09:40 - Abastecimiento al limite en 5 regiones.",
    options: [
      {
        side: "left",
        tag: "duro",
        text: "Militarizar corredores y forzar reapertura.",
        immediate: { control: 12, legitimidad: -8, confianza: -9, costoHumano: 7, riesgoFuturo: 6 },
        debt: { delay: 2, effects: { costoHumano: 7, riesgoFuturo: 6 }, note: "Escala conflicto sindical." }
      },
      {
        side: "right",
        tag: "pragmatico",
        text: "Pacto 48h con fondo urgente y auditoria.",
        immediate: { control: 3, legitimidad: 8, confianza: 7, costoHumano: 2, riesgoFuturo: -1 }
      }
    ]
  },
  {
    id: "border_incident",
    title: "Incidente Fronterizo",
    short: "Convoy humanitario interceptado. Tension diplomatica alta.",
    feed: "12:08 - Riesgo regional en aumento.",
    options: [
      {
        side: "left",
        tag: "duro",
        text: "Responder con operativo y cierre parcial.",
        immediate: { control: 11, legitimidad: -7, confianza: -4, costoHumano: 11, riesgoFuturo: 10 },
        debt: { delay: 2, effects: { riesgoFuturo: 9 }, note: "Aumenta riesgo de conflicto regional." }
      },
      {
        side: "right",
        tag: "conciliador",
        text: "Corredor neutral con supervisores externos.",
        immediate: { control: 4, legitimidad: 6, confianza: 6, costoHumano: 2, riesgoFuturo: 0 }
      }
    ]
  },
  {
    id: "urban_riot",
    title: "Disturbios Urbanos",
    short: "11 focos de violencia por rumor de privilegios de alimentos.",
    feed: "16:51 - Capital en tension continua.",
    options: [
      {
        side: "left",
        tag: "duro",
        text: "Toque de queda y detenciones preventivas.",
        immediate: { control: 14, legitimidad: -13, confianza: -8, costoHumano: 10, riesgoFuturo: 7 },
        debt: { delay: 1, effects: { legitimidad: -7, riesgoFuturo: 7 }, note: "Nacen celulas clandestinas." }
      },
      {
        side: "right",
        tag: "pragmatico",
        text: "Mediacion abierta y corredores de ayuda.",
        immediate: { control: 3, legitimidad: 8, confianza: 9, costoHumano: 3, riesgoFuturo: -2 }
      }
    ]
  },
  {
    id: "intel_breach",
    title: "Brecha Interna",
    short: "Tu propio gabinete filtra informacion clasificada.",
    feed: "20:03 - Seguridad estatal comprometida.",
    options: [
      {
        side: "left",
        tag: "duro",
        text: "Purgar gabinete y centralizar autorizaciones.",
        immediate: { control: 17, legitimidad: -6, confianza: -13, costoHumano: 5, riesgoFuturo: 4 },
        debt: { delay: 2, effects: { confianza: -8, riesgoFuturo: 5 }, note: "Paralisis operativa por miedo interno." }
      },
      {
        side: "right",
        tag: "conciliador",
        text: "Amnistia condicionada y auditoria externa.",
        immediate: { control: 2, legitimidad: 7, confianza: 9, costoHumano: 1, riesgoFuturo: 2 },
        debt: { delay: 1, effects: { control: -3, riesgoFuturo: 3 }, note: "Celdas oportunistas prueban limites." }
      }
    ]
  },
  {
    id: "bio_alert",
    title: "Alerta Sanitaria",
    short: "Nuevo brote en tres distritos con contagio acelerado.",
    feed: "22:14 - Capacidad de UCI en 81%.",
    options: [
      {
        side: "left",
        tag: "duro",
        text: "Cierre total de movilidad por 72 horas.",
        immediate: { control: 13, legitimidad: -10, confianza: -6, costoHumano: 4, riesgoFuturo: -5 },
        debt: { delay: 1, effects: { legitimidad: -5, riesgoFuturo: 4 }, note: "Rebote economico y protestas laborales." }
      },
      {
        side: "right",
        tag: "pragmatico",
        text: "Restriccion selectiva y testeo masivo movil.",
        immediate: { control: 5, legitimidad: 5, confianza: 6, costoHumano: 2, riesgoFuturo: -2 }
      }
    ]
  },
  {
    id: "water_crisis",
    title: "Crisis De Agua",
    short: "Embalses al 23%. Sin accion, hay desabasto en 48h.",
    feed: "05:02 - Reserva nacional en minimo historico.",
    options: [
      {
        side: "left",
        tag: "duro",
        text: "Confiscar pozos privados y racionar por decreto.",
        immediate: { control: 16, legitimidad: -11, confianza: -7, costoHumano: 5, riesgoFuturo: 3 },
        debt: { delay: 2, effects: { legitimidad: -6, riesgoFuturo: 6 }, note: "Demandas masivas contra el mando central." }
      },
      {
        side: "right",
        tag: "conciliador",
        text: "Pacto con industrias y consumo escalonado.",
        immediate: { control: 4, legitimidad: 8, confianza: 7, costoHumano: 3, riesgoFuturo: 1 }
      }
    ]
  },
  {
    id: "energy_attack",
    title: "Sabotaje Energetico",
    short: "Ataque a subestacion nacional durante hora pico.",
    feed: "18:27 - Sistema electrico en modo degradado.",
    options: [
      {
        side: "left",
        tag: "duro",
        text: "Operacion antiterror completa y barridos urbanos.",
        immediate: { control: 14, legitimidad: -9, confianza: -8, costoHumano: 9, riesgoFuturo: 5 },
        debt: { delay: 1, effects: { costoHumano: 5, legitimidad: -4 }, note: "Excesos operativos se vuelven publicos." }
      },
      {
        side: "right",
        tag: "pragmatico",
        text: "Contramedidas tecnicas y cerco de inteligencia.",
        immediate: { control: 7, legitimidad: 4, confianza: 5, costoHumano: 2, riesgoFuturo: -1 }
      }
    ]
  }
];

const METRIC_META = {
  control: "Control",
  legitimidad: "Legitimidad",
  confianza: "Confianza",
  costoHumano: "Costo Humano",
  riesgoFuturo: "Riesgo Futuro"
};

const GAME_MODES = {
  quick: { label: "PARTIDA RAPIDA", turns: 8 },
  campaign: { label: "CAMPANA", turns: 18 }
};

const STORAGE_KEY = "protocolo_soberano_v1";

const state = {
  started: false,
  mode: null,
  turn: 0,
  maxTurns: 0,
  scenarioQueue: [],
  pendingScenario: null,
  metrics: {
    control: 50,
    legitimidad: 50,
    confianza: 50,
    costoHumano: 15,
    riesgoFuturo: 20
  },
  debtQueue: [],
  log: [],
  profile: null,
  archive: {
    bestByMode: {
      quick: null,
      campaign: null
    },
    recentRuns: []
  }
};

const els = {
  title: document.getElementById("event-title"),
  desc: document.getElementById("event-description"),
  decisionList: document.getElementById("decision-list"),
  metricGrid: document.getElementById("metric-grid"),
  statusMeta: document.getElementById("status-meta"),
  runLog: document.getElementById("run-log"),
  incidentFeed: document.getElementById("incident-feed"),
  modeSelect: document.getElementById("mode-select"),
  hint: document.getElementById("decision-hint"),
  historyContent: document.getElementById("history-content")
};

function computeRunScore(metrics) {
  const stability = (metrics.control + metrics.legitimidad + metrics.confianza) / 3;
  const damage = (metrics.costoHumano + metrics.riesgoFuturo) / 2;
  return Math.max(0, Math.round(stability - damage + 40));
}

function loadArchive() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return;

    if (parsed.bestByMode) {
      state.archive.bestByMode.quick = parsed.bestByMode.quick || null;
      state.archive.bestByMode.campaign = parsed.bestByMode.campaign || null;
    }

    if (Array.isArray(parsed.recentRuns)) {
      state.archive.recentRuns = parsed.recentRuns.slice(0, 6);
    }
  } catch (error) {
    console.warn("No se pudo cargar archivo de mando", error);
  }
}

function saveArchive() {
  const payload = {
    bestByMode: state.archive.bestByMode,
    recentRuns: state.archive.recentRuns.slice(0, 6)
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function renderArchive() {
  if (!els.historyContent) return;

  const bestQuick = state.archive.bestByMode.quick;
  const bestCampaign = state.archive.bestByMode.campaign;
  const recent = state.archive.recentRuns;

  let html = "";
  html += `<div class="history-item"><strong>BEST RAPIDA:</strong> ${bestQuick ? `${bestQuick.score} pts | ${bestQuick.profile}` : "SIN REGISTRO"}</div>`;
  html += `<div class="history-item"><strong>BEST CAMPANA:</strong> ${bestCampaign ? `${bestCampaign.score} pts | ${bestCampaign.profile}` : "SIN REGISTRO"}</div>`;

  if (recent.length === 0) {
    html += `<div class="history-item"><strong>ULTIMAS:</strong> SIN PARTIDAS AUN</div>`;
  } else {
    recent.slice(0, 3).forEach((run) => {
      html += `<div class="history-item"><strong>${run.modeLabel}</strong> ${run.score} pts | ${run.profile}</div>`;
    });
  }

  els.historyContent.innerHTML = html;
}

function persistRun(profile) {
  const score = computeRunScore(state.metrics);
  const run = {
    mode: state.mode,
    modeLabel: GAME_MODES[state.mode].label,
    score,
    profile: profile.title,
    endedAt: new Date().toISOString()
  };

  state.archive.recentRuns.unshift(run);
  state.archive.recentRuns = state.archive.recentRuns.slice(0, 6);

  const best = state.archive.bestByMode[state.mode];
  if (!best || run.score > best.score) {
    state.archive.bestByMode[state.mode] = run;
  }

  saveArchive();
  renderArchive();
  return score;
}

function clamp(value) {
  return Math.max(0, Math.min(100, value));
}

function metricTone(key, value) {
  if (key === "costoHumano" || key === "riesgoFuturo") {
    if (value <= 35) return "var(--ok)";
    if (value <= 65) return "var(--warn)";
    return "var(--danger)";
  }
  if (value >= 66) return "var(--ok)";
  if (value >= 36) return "var(--warn)";
  return "var(--danger)";
}

function statusText() {
  const risk = state.metrics.riesgoFuturo;
  const trust = state.metrics.confianza;
  if (risk > 75 || trust < 20) return "CRITICO";
  if (risk > 55 || trust < 35) return "INESTABLE";
  return "OPERATIVO";
}

function appendLog(text, strong) {
  const item = document.createElement("div");
  item.className = "log-item";
  item.innerHTML = strong ? `<strong>${strong}</strong> ${text}` : text;
  els.runLog.prepend(item);

  const entry = strong ? `${strong} ${text}` : text;
  state.log.unshift(entry);
  if (state.log.length > 24) state.log.length = 24;
}

function updateMeta() {
  const turn = String(Math.min(state.turn + 1, Math.max(1, state.maxTurns))).padStart(2, "0");
  const day = String(Math.floor(state.turn / 3) + 1).padStart(2, "0");
  const modeText = state.mode ? GAME_MODES[state.mode].label : "SELECCIONA MODO";
  els.statusMeta.textContent = `DIA ${day} | TURNO ${turn} | MODO: ${modeText} | ESTADO: ${statusText()}`;
}

function renderMetrics() {
  els.metricGrid.innerHTML = "";
  Object.keys(METRIC_META).forEach((key) => {
    const value = Math.round(state.metrics[key]);
    const tone = metricTone(key, value);
    const card = document.createElement("article");
    card.className = "metric-card";
    card.innerHTML = `
      <div class="metric-label">${METRIC_META[key]}</div>
      <div class="metric-value" style="color:${tone}">${value}%</div>
      <div class="metric-bar"><span style="width:${value}%; background:${tone}"></span></div>
    `;
    els.metricGrid.appendChild(card);
  });
}

function applyEffects(effects, sourceLabel) {
  Object.entries(effects).forEach(([key, delta]) => {
    state.metrics[key] = clamp(state.metrics[key] + delta);
  });
  if (sourceLabel) appendLog(sourceLabel, ">>");
}

function processDebts() {
  const due = state.debtQueue.filter((d) => d.atTurn === state.turn);
  state.debtQueue = state.debtQueue.filter((d) => d.atTurn !== state.turn);
  due.forEach((debt) => applyEffects(debt.effects, `[DEUDA] ${debt.note}`));
}

function scenarioWeight(scenario) {
  let score = Math.random() * 2;
  const m = state.metrics;

  if (scenario.id === "urban_riot" && m.legitimidad < 45) score += 4;
  if (scenario.id === "intel_breach" && m.confianza < 45) score += 4;
  if (scenario.id === "bio_alert" && m.riesgoFuturo > 50) score += 4;
  if (scenario.id === "water_crisis" && m.control < 40) score += 3;
  if (scenario.id === "media_leak" && m.legitimidad < 35) score += 3;
  if (scenario.id === "border_incident" && m.control > 60) score += 2;

  return score;
}

function pickNextScenario() {
  const playedIds = new Set(state.scenarioQueue.map((s) => s.id));
  const pool = SCENARIOS.filter((s) => !playedIds.has(s.id));
  const candidates = pool.length > 0 ? pool : SCENARIOS;

  let best = candidates[0];
  let bestScore = -Infinity;

  candidates.forEach((scenario) => {
    const score = scenarioWeight(scenario);
    if (score > bestScore) {
      best = scenario;
      bestScore = score;
    }
  });

  state.scenarioQueue.push(best);
  return best;
}

function renderScenario() {
  const current = pickNextScenario();
  state.pendingScenario = current;

  els.title.textContent = current.title;
  els.desc.textContent = current.short;
  els.incidentFeed.innerHTML = `<div class="feed-item">${current.feed}</div>`;
  els.decisionList.innerHTML = "";

  current.options.forEach((option, idx) => {
    const btn = document.createElement("button");
    const sideClass = option.side === "left" ? "decision-btn--left" : "decision-btn--right";
    const keyHint = idx === 0 ? "A" : "D";
    btn.className = `decision-btn ${sideClass}`;
    btn.textContent = `[${keyHint}] ${option.text}`;
    btn.addEventListener("click", () => resolveDecision(option));
    els.decisionList.appendChild(btn);
  });
}

function resolveDecision(option) {
  if (!state.pendingScenario) return;

  applyEffects(option.immediate, `[DECISION] ${option.text}`);

  if (option.debt) {
    state.debtQueue.push({
      atTurn: state.turn + option.debt.delay,
      effects: option.debt.effects,
      note: option.debt.note
    });
    appendLog(option.debt.note, "--");
  }

  state.turn += 1;
  processDebts();
  updateMeta();
  renderMetrics();

  if (state.turn >= state.maxTurns) {
    finishRun();
    return;
  }

  renderScenario();
}

function leadershipProfile() {
  const m = state.metrics;

  if (m.control >= 70 && m.legitimidad <= 35) {
    return {
      title: "EL SOBERANO EFICIENTE",
      text: "Sostuviste la estructura estatal a cualquier costo. El orden sobrevive, la confianza no.",
      tone: "var(--danger)"
    };
  }

  if (m.legitimidad >= 65 && m.control <= 40) {
    return {
      title: "EL DELEGADOR FRAGIL",
      text: "Preservaste consenso social, pero la respuesta operativa quedo debilitada.",
      tone: "var(--ok)"
    };
  }

  if (m.riesgoFuturo >= 70 || m.confianza <= 25) {
    return {
      title: "EL COLAPSO DIFERIDO",
      text: "Tus decisiones estabilizaron el presente y comprometieron el futuro inmediato.",
      tone: "var(--warn)"
    };
  }

  return {
    title: "EL ESTRATEGA GRIS",
    text: "Balanceaste dano y orden sin victoria moral absoluta. El sistema sigue en pie.",
    tone: "var(--intel)"
  };
}

function finishRun() {
  const profile = leadershipProfile();
  state.profile = profile;
  els.decisionList.innerHTML = "";
  els.hint.style.display = "none";
  const score = persistRun(profile);

  els.title.textContent = "DEBRIEF FINAL";
  els.desc.innerHTML = `
    Ciclo cerrado: ${state.maxTurns} decisiones en modo ${GAME_MODES[state.mode].label}.
    <div class="profile-box">
      <h3 style="color:${profile.tone}">${profile.title}</h3>
      <p><strong>PUNTAJE:</strong> ${score} pts</p>
      <p>${profile.text}</p>
      <button id="restart-btn" class="decision-btn decision-btn--pragmatic">[ NUEVA PARTIDA ]</button>
    </div>
  `;

  els.incidentFeed.innerHTML = "<div class='feed-item'>Analisis de ciclo completado.</div>";
  appendLog(`Perfil final: ${profile.title}`, "[FIN]");

  const restartBtn = document.getElementById("restart-btn");
  restartBtn.addEventListener("click", () => window.location.reload());
}

function startProtocol(mode) {
  if (state.started || !GAME_MODES[mode]) return;

  state.started = true;
  state.mode = mode;
  state.maxTurns = GAME_MODES[mode].turns;

  if (els.modeSelect) els.modeSelect.remove();

  appendLog(`Modo ${GAME_MODES[mode].label} activado.`, "[SISTEMA]");
  updateMeta();
  renderMetrics();
  renderScenario();
}

function onKeyDecision(event) {
  if (!state.started || !state.pendingScenario) return;

  const key = event.key.toLowerCase();
  if (key !== "a" && key !== "d") return;

  const selected = key === "a" ? state.pendingScenario.options[0] : state.pendingScenario.options[1];
  resolveDecision(selected);
}

function init() {
  loadArchive();
  updateMeta();
  renderMetrics();
  renderArchive();
  appendLog("Selecciona modo para iniciar protocolo.", "[SISTEMA]");

  const modeButtons = document.querySelectorAll("[data-mode]");
  modeButtons.forEach((btn) => {
    btn.addEventListener("click", () => startProtocol(btn.dataset.mode));
  });

  document.addEventListener("keydown", onKeyDecision);
}

init();
