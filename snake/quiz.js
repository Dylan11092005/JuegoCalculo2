// quiz.js — SIN contador de tiempo (pensamiento libre) + FIX móvil

const QUESTION_BANK = [
  {
    topic: "Integral definida",
    q: "Calcula: ∫₀² x² dx",
    choices: ["4/3", "8/3", "2", "8"],
    correctIndex: 1,
  },
  {
    topic: "Integral definida",
    q: "Calcula: ∫₀¹ (3x²) dx",
    choices: ["1", "3", "1/3", "0"],
    correctIndex: 0,
  },
  {
    topic: "Series",
    q: "La serie ∑ 1/n² es…",
    choices: ["Convergente", "Divergente", "Condicional", "Finita"],
    correctIndex: 0,
  },
  {
    topic: "Series",
    q: "La serie armónica ∑ 1/n es…",
    choices: ["Convergente", "Divergente", "Alternante", "Finita"],
    correctIndex: 1,
  },
];

let quizActive = false;
let currentQuestion = null;
let locked = false;

window.startQuiz = function startQuiz(onResult) {
  if (quizActive) return;

  quizActive = true;
  locked = false;
  currentQuestion = QUESTION_BANK[Math.floor(Math.random() * QUESTION_BANK.length)];

  const overlay = document.getElementById("quizOverlay");
  const qEl = document.getElementById("quizQ");
  const choicesEl = document.getElementById("quizChoices");
  const feedbackEl = document.getElementById("quizFeedback");

  // Reset UI
  feedbackEl.textContent = "";
  choicesEl.innerHTML = "";

  // Pregunta
  qEl.textContent = `[${currentQuestion.topic}] ${currentQuestion.q}`;

  // Mostrar overlay
  overlay.style.display = "grid";

  // ✅ Evita que el canvas capture toques mientras está el quiz
  const cnv = document.querySelector("canvas");
  if (cnv) cnv.style.pointerEvents = "none";

  // Crear opciones
  currentQuestion.choices.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = `${i + 1}) ${choice}`;
    btn.style.padding = "12px";
    btn.style.borderRadius = "14px";
    btn.style.border = "1px solid #ddd";
    btn.style.fontWeight = "700";
    btn.style.cursor = "pointer";
    btn.style.background = "#f9fafb";
    btn.style.width = "100%";
    btn.style.marginTop = "8px";

    // ✅ Touch en móvil (más confiable que click)
    btn.addEventListener(
      "touchstart",
      (e) => {
        e.preventDefault();
        submit(i);
      },
      { passive: false }
    );

    // Click (PC)
    btn.onclick = () => submit(i);

    choicesEl.appendChild(btn);
  });

  // Teclas 1–4 (opcional)
  const keyHandler = (e) => {
    if (!quizActive || locked) return;
    if (e.key >= "1" && e.key <= "4") {
      submit(parseInt(e.key, 10) - 1);
    }
  };
  window.__quizKeyHandler = keyHandler;
  window.addEventListener("keydown", keyHandler);

  function submit(choiceIndex) {
    if (locked) return;
    locked = true;

    const correct = choiceIndex === currentQuestion.correctIndex;
    feedbackEl.textContent = correct ? "✅ Correcto" : "❌ Incorrecto";

    setTimeout(() => {
      overlay.style.display = "none";
      cleanup();
      if (typeof onResult === "function") onResult(correct);
    }, 600);
  }

  function cleanup() {
    quizActive = false;
    currentQuestion = null;
    locked = false;

    // ✅ Reactiva el canvas al salir del quiz
    const cnv2 = document.querySelector("canvas");
    if (cnv2) cnv2.style.pointerEvents = "auto";

    if (window.__quizKeyHandler) {
      window.removeEventListener("keydown", window.__quizKeyHandler);
      window.__quizKeyHandler = null;
    }
  }
};
