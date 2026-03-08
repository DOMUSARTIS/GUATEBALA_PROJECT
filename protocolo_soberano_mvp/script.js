const SCENARIOS = [
  {
    id: "blackout_north",
    title: "Colapso De Red Electrica - Zona Norte",
    description: "Un apagón afecta hospitales y centros de datos. Debes priorizar a quien devolver energia primero.",
    feed: "03:14 - Red Norte fuera de servicio. 2.1M ciudadanos afectados.",
    options: [
      {
        tag: "duro",
        text: "Priorizar infraestructura estatal y bloquear consumo residencial.",
        immediate: { control: 16, legitimidad: -10, confianza: -8, costoHumano: 10, riesgoFuturo: 6 },
        debt: { delay: 2, effects: { legitimidad: -10, riesgoFuturo: 8 }, note: "Protestas por racionamiento selectivo." }
      },
      {
        tag: "pragmatico",
        text: "Reparto rotativo por sectores criticos y residenciales.",
        immediate: { control: 8, legitimidad: 5, confianza: 4, costoHumano: 3, riesgoFuturo: 1 }
      },
      {
        tag: "conciliador",
        text: "Abrir decision comunitaria local, sin imposicion central.",
        immediate: { control: -8, legitimidad: 10, confianza: 12, costoHumano: 5, riesgoFuturo: 9 },
        debt: { delay: 1, effects: { control: -6, riesgoFuturo: 5 }, note: "Falta de coordinacion entre distritos." }
      }
    ]
  },
  {
    id: "media_leak",
    title: "Filtracion Masiva De Audio",
    description: "Un audio compromete al comando regional. Si se publica completo, cae la autoridad local.",
    feed: "06:22 - Tendencia nacional: #QuienDaLaOrden",
    options: [
      {
        tag: "duro",
        text: "Censura temporal y bloqueo de nodos de difusion.",
        immediate: { control: 14, legitimidad: -12, confianza: -5, costoHumano: 4, riesgoFuturo: 8 },
        debt: { delay: 2, effects: { legitimidad: -9, riesgoFuturo: 6 }, note: "Crecen redes clandestinas de informacion." }
      },
      {
        tag: "pragmatico",
        text: "Publicar extracto oficial con investigacion abierta.",
        immediate: { control: 4, legitimidad: 6, confianza: 8, costoHumano: 1, riesgoFuturo: 0 }
      },
      {
        tag: "conciliador",
        text: "Transparencia total inmediata y renuncia de mando local.",
        immediate: { control: -10, legitimidad: 14, confianza: 10, costoHumano: 0, riesgoFuturo: 5 },
        debt: { delay: 1, effects: { control: -8 }, note: "Vacios de mando en tres municipios." }
      }
    ]
  },
  {
    id: "resource_strike",
    title: "Paro De Suministro Logistico",
    description: "Transportistas y personal sanitario exigen proteccion y pago inmediato.",
    feed: "09:40 - Corredores de abastecimiento en riesgo de cierre.",
    options: [
      {
        tag: "duro",
        text: "Militarizar rutas y forzar reapertura bajo decreto.",
        immediate: { control: 13, legitimidad: -9, confianza: -10, costoHumano: 8, riesgoFuturo: 6 },
        debt: { delay: 2, effects: { costoHumano: 8, riesgoFuturo: 7 }, note: "Escalada de conflicto sindical." }
      },
      {
        tag: "pragmatico",
        text: "Negociar 48h, liberar fondo de emergencia y auditar contratos.",
        immediate: { control: 3, legitimidad: 8, confianza: 7, costoHumano: 2, riesgoFuturo: -2 }
      },
      {
        tag: "conciliador",
        text: "Delegar en comites regionales con autonomia plena.",
        immediate: { control: -7, legitimidad: 10, confianza: 9, costoHumano: 3, riesgoFuturo: 5 },
        debt: { delay: 1, effects: { control: -5, riesgoFuturo: 4 }, note: "Diferencias entre regiones retrasan ayuda." }
      }
    ]
  },
  {
    id: "border_incident",
    title: "Incidente Fronterizo",
    description: "Un convoy humanitario fue interceptado. Las facciones se culpan mutuamente.",
    feed: "12:08 - Tension diplomatica en aumento.",
    options: [
      {
        tag: "duro",
        text: "Operativo de represalia inmediata y cierre de frontera.",
        immediate: { control: 12, legitimidad: -8, confianza: -4, costoHumano: 12, riesgoFuturo: 10 },
        debt: { delay: 2, effects: { riesgoFuturo: 10 }, note: "Riesgo de conflicto regional sostenido." }
      },
      {
        tag: "pragmatico",
        text: "Corredor seguro temporal con supervisores neutrales.",
        immediate: { control: 5, legitimidad: 6, confianza: 5, costoHumano: 2, riesgoFuturo: -1 }
      },
      {
        tag: "conciliador",
        text: "Suspender operaciones y abrir mesa bilateral urgente.",
        immediate: { control: -6, legitimidad: 8, confianza: 9, costoHumano: 1, riesgoFuturo: 3 },
        debt: { delay: 1, effects: { control: -4, riesgoFuturo: 4 }, note: "Facciones internas perciben debilidad." }
      }
    ]
  },
  {
    id: "urban_riot",
    title: "Disturbios En Sector Central",
    description: "Manifestaciones se vuelven violentas tras rumores de privilegios en distribucion de alimentos.",
    feed: "16:51 - 11 puntos de conflicto simultaneos en la capital.",
    options: [
      {
        tag: "duro",
        text: "Toque de queda total y detenciones preventivas.",
        immediate: { control: 15, legitimidad: -14, confianza: -9, costoHumano: 11, riesgoFuturo: 7 },
        debt: { delay: 2, effects: { legitimidad: -8, riesgoFuturo: 8 }, note: "Nuevas celulas de protesta clandestina." }
      },
      {
        tag: "pragmatico",
        text: "Corredores seguros, mediadores y abastecimiento abierto.",
        immediate: { control: 4, legitimidad: 7, confianza: 9, costoHumano: 3, riesgoFuturo: -2 }
      },
      {
        tag: "conciliador",
        text: "Retiro de fuerzas y asamblea publica transmitida.",
        immediate: { control: -9, legitimidad: 11, confianza: 11, costoHumano: 2, riesgoFuturo: 5 },
        debt: { delay: 1, effects: { control: -5 }, note: "Vacios de control en periferia." }
      }
    ]
  },
  {
    id: "intel_breach",
    title: "Brecha En Inteligencia Interna",
    description: "Se detectaron filtraciones desde tu propio gabinete.",
    feed: "20:03 - Nivel de seguridad interno comprometido.",
    options: [
      {
        tag: "duro",
        text: "Purgar gabinete y centralizar autorizaciones en un unico nodo.",
        immediate: { control: 18, legitimidad: -7, confianza: -14, costoHumano: 6, riesgoFuturo: 4 },
        debt: { delay: 2, effects: { confianza: -10, riesgoFuturo: 5 }, note: "Paralisis por miedo dentro del aparato estatal." }
      },
      {
        tag: "pragmatico",
        text: "Auditoria forense con supervision externa independiente.",
        immediate: { control: 5, legitimidad: 7, confianza: 8, costoHumano: 1, riesgoFuturo: -1 }
      },
      {
        tag: "conciliador",
        text: "Amnistia condicionada para revelar red completa.",
        immediate: { control: -5, legitimidad: 6, confianza: 10, costoHumano: 0, riesgoFuturo: 3 },
        debt: { delay: 1, effects: { control: -5, riesgoFuturo: 4 }, note: "Algunas celdas aprovechan la amnistia para reconfigurarse." }
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

const state = {
  started: false,
  turn: 0,
  maxTurns: 6,
  scenarioQueue: [],
  metrics: {
    control: 50,
    legitimidad: 50,
    confianza: 50,
    costoHumano: 15,
    riesgoFuturo: 20
  },
  debtQueue: [],
  log: [],
  history: []
};

const els = {
  title: document.getElementById("event-title"),
  desc: document.getElementById("event-description"),
  decisionList: document.getElementById("decision-list"),
  metricGrid: document.getElementById("metric-grid"),
  statusMeta: document.getElementById("status-meta"),
  runLog: document.getElementById("run-log"),
  incidentFeed: document.getElementById("incident-feed"),
  startBtn: document.getElementById("start-btn")
};

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
  if (risk > 50 || trust < 35) return "INESTABLE";
  return "OPERATIVO";
}

function appendLog(text, strong) {
  const item = document.createElement("div");
  item.className = "log-item";
  item.innerHTML = strong ? `<strong>${strong}</strong> ${text}` : text;
  els.runLog.prepend(item);

  const entry = strong ? `${strong} ${text}` : text;
  state.log.unshift(entry);
  if (state.log.length > 18) state.log.length = 18;
}

function updateMeta() {
  const turn = String(Math.min(state.turn + 1, state.maxTurns)).padStart(2, "0");
  const day = String(Math.floor(state.turn / 2) + 1).padStart(2, "0");
  els.statusMeta.textContent = `DIA ${day} | TURNO ${turn} | ESTADO: ${statusText()}`;
}

function renderMetrics() {
  els.metricGrid.innerHTML = "";
  Object.keys(METRIC_META).forEach((key) => {
    const value = Math.round(state.metrics[key]);
    const card = document.createElement("article");
    card.className = "metric-card";
    const tone = metricTone(key, value);
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

  due.forEach((debt) => {
    applyEffects(debt.effects, `[DEUDA] ${debt.note}`);
  });
}

function optionClass(tag) {
  if (tag === "duro") return "decision-btn decision-btn--hard";
  if (tag === "conciliador") return "decision-btn decision-btn--conciliatory";
  return "decision-btn decision-btn--pragmatic";
}

function renderScenario() {
  const current = state.scenarioQueue[state.turn];
  if (!current) {
    finishRun();
    return;
  }

  els.title.textContent = current.title;
  els.desc.textContent = current.description;
  els.incidentFeed.innerHTML = `<div class="feed-item">${current.feed}</div>`;
  els.decisionList.innerHTML = "";

  current.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.className = optionClass(option.tag);
    btn.textContent = `[ ${option.tag.toUpperCase()} ] ${option.text}`;
    btn.addEventListener("click", () => resolveDecision(option));
    els.decisionList.appendChild(btn);
  });
}

function resolveDecision(option) {
  applyEffects(option.immediate, `[DECISION] ${option.text}`);

  if (option.debt) {
    state.debtQueue.push({
      atTurn: state.turn + option.debt.delay,
      effects: option.debt.effects,
      note: option.debt.note
    });
    appendLog(option.debt.note, "--");
  }

  state.history.push({
    turn: state.turn + 1,
    option: option.text,
    metrics: { ...state.metrics }
  });

  state.turn += 1;
  processDebts();
  updateMeta();
  renderMetrics();

  if (state.turn >= state.maxTurns) {
    finishRun();
  } else {
    renderScenario();
  }
}

function leadershipProfile() {
  const m = state.metrics;

  if (m.control >= 70 && m.legitimidad <= 35) {
    return {
      title: "EL SOBERANO EFICIENTE",
      text: "Consolidaste el mando y contuviste el colapso, pero el costo politico y social deja una paz fragil."
    };
  }

  if (m.legitimidad >= 65 && m.control <= 40) {
    return {
      title: "EL DELEGADOR FRAGIL",
      text: "Ganaste respaldo publico, pero perdiste capacidad de accion ante crisis coordinadas."
    };
  }

  if (m.riesgoFuturo >= 70 || m.confianza <= 25) {
    return {
      title: "EL COLAPSO DIFERIDO",
      text: "El presente sobrevivio, pero las deudas de mando sembraron una crisis mas profunda."
    };
  }

  return {
    title: "EL ESTRATEGA GRIS",
    text: "Sostuviste equilibrio operativo sin victoria limpia. El sistema sigue en pie, bajo tension constante."
  };
}

function finishRun() {
  els.decisionList.innerHTML = "";
  const profile = leadershipProfile();

  els.title.textContent = "DEBRIEF FINAL";
  els.desc.innerHTML = `
    Protocolo completado. Evaluacion del ciclo de mando cerrada en ${state.maxTurns} decisiones.
    <div class="profile-box">
      <h3>${profile.title}</h3>
      <p>${profile.text}</p>
      <button id="restart-btn" class="decision-btn decision-btn--pragmatic">[ REINICIAR CICLO ]</button>
    </div>
  `;

  els.incidentFeed.innerHTML = "<div class='feed-item'>Ciclo finalizado. Analisis historico disponible.</div>";

  appendLog(`Perfil resultante: ${profile.title}`, "[FIN]");

  const restartBtn = document.getElementById("restart-btn");
  restartBtn.addEventListener("click", () => window.location.reload());
}

function startProtocol() {
  if (state.started) return;

  state.started = true;
  state.scenarioQueue = SCENARIOS.slice(0, state.maxTurns);
  els.startBtn.remove();

  appendLog("Protocolo activado. Autoridad temporal concedida.", "[SISTEMA]");
  updateMeta();
  renderMetrics();
  renderScenario();
}

function init() {
  updateMeta();
  renderMetrics();
  appendLog("Esperando autorizacion de mando.", "[SISTEMA]");
  els.startBtn.addEventListener("click", startProtocol);
}

init();
