// quiz.js — SIN contador de tiempo (pensamiento libre) + FIX móvil

const QUESTION_BANK = [
  // ===============================
  // TEMA 1: Potencias trigonométricas
  // ===============================

  // --- Fácil (1–5) ---
  {
    topic: "Potencias trigonométricas (Fácil)",
    q: "Calcula: ∫ sin(x) dx",
    choices: ["-cos(x) + C", "cos(x) + C", "sin(x) + C", "-sin(x) + C"],
    correctIndex: 0,
    solution: `Paso 1: Identificar integral básica
∫ sin(x) dx

Paso 2: Aplicar fórmula directa
= -cos(x) + C`,
  },
  {
    topic: "Potencias trigonométricas (Fácil)",
    q: "Calcula: ∫ cos(x) dx",
    choices: ["sin(x) + C", "-sin(x) + C", "cos(x) + C", "-cos(x) + C"],
    correctIndex: 0,
    solution: `Paso 1: Integral básica
∫ cos(x) dx

Paso 2: Resultado directo
= sin(x) + C`,
  },
  {
    topic: "Potencias trigonométricas (Fácil)",
    q: "¿Qué identidad se usa para resolver ∫ cos²(x) dx?",
    choices: [
      "cos²(x) = (1 + cos(2x))/2",
      "cos²(x) = 1 - sin(x)",
      "cos²(x) = sec²(x)",
      "cos²(x) = 1 + sin²(x)",
    ],
    correctIndex: 0,
    solution: `Paso 1: Reconocer potencia par
cos²(x)

Paso 2: Usar identidad de ángulo doble
cos²(x) = (1 + cos(2x))/2`,
  },
  {
    topic: "Potencias trigonométricas (Fácil)",
    q: "Calcula: ∫ sin²(x) dx",
    choices: [
      "x/2 − sin(2x)/4 + C",
      "x − cos(x) + C",
      "-cos²(x) + C",
      "sin(x)/2 + C",
    ],
    correctIndex: 0,
    solution: `Paso 1: Usar identidad
sin²(x) = (1 − cos(2x))/2

Paso 2: Sustituir
∫ (1 − cos(2x))/2 dx

Paso 3: Integrar término a término
= x/2 − sin(2x)/4 + C`,
  },
  {
    topic: "Potencias trigonométricas (Fácil)",
    q: "Si la potencia del seno es impar, ¿qué se hace primero?",
    choices: [
      "Separar un seno y usar identidad",
      "Aplicar integración por partes",
      "Cambiar a coordenadas polares",
      "Usar sustitución trigonométrica",
    ],
    correctIndex: 0,
    solution: `Paso 1: Si la potencia es impar
sin³(x)

Paso 2: Separar un seno
sin²(x)sin(x)

Paso 3: Convertir sin²(x) usando
1 − cos²(x)`,
  },

  // --- Media (6–10) ---
  {
    topic: "Potencias trigonométricas (Media)",
    q: "Calcula: ∫ sin³(x) dx",
    choices: [
      "-cos(x) + cos³(x)/3 + C",
      "cos(x) - cos³(x)/3 + C",
      "sin²(x)/2 + C",
      "-sin(x) + C",
    ],
    correctIndex: 0,
    solution: `Paso 1: Separar un seno
sin²(x)sin(x)

Paso 2: Usar identidad
(1 − cos²(x))sin(x)

Paso 3: Sustitución
u = cos(x), du = -sin(x)dx

Paso 4: Integrar
-∫(1 − u²)du

Resultado:
-cos(x) + cos³(x)/3 + C`,
  },
  {
    topic: "Potencias trigonométricas (Media)",
    q: "Calcula: ∫ cos³(x) dx",
    choices: [
      "sin(x) − sin³(x)/3 + C",
      "-sin(x) + sin³(x)/3 + C",
      "cos²(x)/2 + C",
      "tan(x) + C",
    ],
    correctIndex: 0,
    solution: `Paso 1: Separar un coseno
cos²(x)cos(x)

Paso 2: Identidad
(1 − sin²(x))cos(x)

Paso 3: Sustitución
u = sin(x), du = cos(x)dx

Resultado:
sin(x) − sin³(x)/3 + C`,
  },
  {
    topic: "Potencias trigonométricas (Media)",
    q: "Para ∫ sin²(x)cos(x) dx, la sustitución correcta es:",
    choices: [
      "u = sin(x)",
      "u = cos(x)",
      "u = tan(x)",
      "u = sec(x)",
    ],
    correctIndex: 0,
    solution: `Paso 1: Elegir función cuya derivada esté presente
u = sin(x)`,
  },
  {
    topic: "Potencias trigonométricas (Media)",
    q: "Calcula: ∫ sin²(x)cos(x) dx",
    choices: [
      "sin³(x)/3 + C",
      "-cos³(x)/3 + C",
      "sin(x) + C",
      "cos(x) + C",
    ],
    correctIndex: 0,
    solution: `Paso 1: Sustituir
u = sin(x), du = cos(x)dx

Paso 2: Integral
∫ u²du

Resultado:
sin³(x)/3 + C`,
  },
  {
    topic: "Potencias trigonométricas (Media)",
    q: "Si ambas potencias son pares en ∫ sin²(x)cos²(x) dx, ¿qué se hace?",
    choices: [
      "Usar identidades de ángulo doble",
      "Separar un seno",
      "Separar un coseno",
      "Usar sustitución trigonométrica",
    ],
    correctIndex: 0,
    solution: `Paso 1: Ambas potencias son pares

Paso 2: Usar identidades
sin²(x) = (1 − cos(2x))/2
cos²(x) = (1 + cos(2x))/2

Paso 3: Multiplicar e integrar normalmente`,
  },

  // --- Difícil (11–15) ---
  {
    topic: "Potencias trigonométricas (Difícil)",
    q: "Calcula: ∫ sin⁴(x) dx",
    choices: [
      "3x/8 − sin(2x)/4 + sin(4x)/32 + C",
      "x − sin(x) + C",
      "sin³(x)/3 + C",
      "cos⁴(x)/4 + C",
    ],
    correctIndex: 0,
    solution: `Paso 1: Usar identidad
sin⁴(x) = (sin²(x))²

Paso 2: Sustituir
((1 − cos(2x))/2)²

Paso 3: Expandir e integrar

Resultado:
3x/8 − sin(2x)/4 + sin(4x)/32 + C`,
  },
  {
    topic: "Potencias trigonométricas (Difícil)",
    q: "Calcula: ∫ cos⁴(x) dx",
    choices: [
      "3x/8 + sin(2x)/4 + sin(4x)/32 + C",
      "x/2 + sin(x) + C",
      "cos³(x)/3 + C",
      "-sin(x) + C",
    ],
    correctIndex: 0,
    solution: `Mismo proceso que sin⁴(x), usando
cos²(x) = (1 + cos(2x))/2

Resultado:
3x/8 + sin(2x)/4 + sin(4x)/32 + C`,
  },
  {
    topic: "Potencias trigonométricas (Difícil)",
    q: "Para ∫ sin³(x)cos²(x) dx, la mejor estrategia es:",
    choices: [
      "Separar un seno y sustituir u = cos(x)",
      "Separar un coseno y sustituir u = sin(x)",
      "Usar sustitución trigonométrica",
      "Integración por partes",
    ],
    correctIndex: 0,
    solution: `Paso 1: Potencia impar de seno

Paso 2: Separar un seno y usar
u = cos(x)`,
  },
  {
    topic: "Potencias trigonométricas (Difícil)",
    q: "Calcula: ∫ sin³(x)cos²(x) dx",
    choices: [
      "-cos³(x)/3 + cos⁵(x)/5 + C",
      "sin⁵(x)/5 + C",
      "cos(x) + C",
      "-sin(x) + C",
    ],
    correctIndex: 0,
    solution: `Paso 1:
sin²(x)sin(x)cos²(x)

Paso 2:
(1 − cos²(x))sin(x)cos²(x)

Paso 3: Sustitución
u = cos(x), du = -sin(x)dx

Resultado:
-cos³(x)/3 + cos⁵(x)/5 + C`,
  },
  {
    topic: "Potencias trigonométricas (Difícil)",
    q: "¿Qué identidad se aplica para reducir potencias pares?",
    choices: [
      "Identidades de ángulo doble",
      "Identidades pitagóricas básicas",
      "Derivadas trigonométricas",
      "Integración por partes",
    ],
    correctIndex: 0,
    solution: `Respuesta:
Usar identidades de ángulo doble`,
  },

  // ===============================
  // TEMA 2: Sustituciones trigonométricas
  // ===============================

  // --- Fácil (16–20) ---
  {
    topic: "Sustitución trigonométrica (Fácil)",
    q: "Para √(a² − x²), la sustitución correcta es:",
    choices: [
      "x = a·sin(θ)",
      "x = a·tan(θ)",
      "x = a·sec(θ)",
      "x = a·cos(θ)",
    ],
    correctIndex: 0,
    solution: `Sustitución:
x = a·sin(θ)`,
  },
  {
    topic: "Sustitución trigonométrica (Fácil)",
    q: "Para √(a² + x²), la sustitución correcta es:",
    choices: [
      "x = a·tan(θ)",
      "x = a·sin(θ)",
      "x = a·cos(θ)",
      "x = a·sec(θ)",
    ],
    correctIndex: 0,
    solution: `Sustitución:
x = a·tan(θ)`,
  },
  {
    topic: "Sustitución trigonométrica (Fácil)",
    q: "Para √(x² − a²), la sustitución correcta es:",
    choices: [
      "x = a·sec(θ)",
      "x = a·sin(θ)",
      "x = a·tan(θ)",
      "x = a·cos(θ)",
    ],
    correctIndex: 0,
    solution: `Sustitución:
x = a·sec(θ)`,
  },
  {
    topic: "Sustitución trigonométrica (Fácil)",
    q: "Si x = 5sin(θ), entonces dx es:",
    choices: [
      "5cos(θ)dθ",
      "5sin(θ)dθ",
      "cos(θ)dθ",
      "sec(θ)dθ",
    ],
    correctIndex: 0,
    solution: `Derivar:
dx = 5cos(θ)dθ`,
  },
  {
    topic: "Sustitución trigonométrica (Fácil)",
    q: "√(9 − x²) se transforma en:",
    choices: [
      "3cos(θ)",
      "3sin(θ)",
      "tan(θ)",
      "sec(θ)",
    ],
    correctIndex: 0,
    solution: `Paso 1:
x = 3sin(θ)

Paso 2:
√(9 − x²) = 3cos(θ)`,
  },

  // --- Media (21–25) ---
  {
    topic: "Sustitución trigonométrica (Media)",
    q: "Calcula: ∫ √(9 − x²) dx",
    choices: [
      "(x/2)√(9 − x²) + (9/2)arcsin(x/3) + C",
      "√(9 − x²) + C",
      "arcsin(x/3) + C",
      "x√(9 − x²) + C",
    ],
    correctIndex: 0,
    solution: `Paso 1:
x = 3sin(θ)

Paso 2: Convertir toda la integral

Paso 3: Integrar y volver a x

Resultado:
(x/2)√(9 − x²) + (9/2)arcsin(x/3) + C`,
  },
  {
    topic: "Sustitución trigonométrica (Media)",
    q: "Calcula: ∫ dx / √(x² + 16)",
    choices: [
      "ln|x + √(x² + 16)| + C",
      "arcsin(x/4) + C",
      "√(x² + 16) + C",
      "tan(x/4) + C",
    ],
    correctIndex: 0,
    solution: `Paso 1:
x = 4tan(θ)

Paso 2:
dx = 4sec²(θ)dθ

Paso 3: Integrar
∫ sec(θ)dθ

Resultado:
ln|x + √(x² + 16)| + C`,
  },
  {
    topic: "Sustitución trigonométrica (Media)",
    q: "Si x = 4tan(θ), entonces √(x² + 16) es:",
    choices: [
      "4sec(θ)",
      "4cos(θ)",
      "4sin(θ)",
      "4tan(θ)",
    ],
    correctIndex: 0,
    solution: `Resultado:
4sec(θ)`,
  },
  {
    topic: "Sustitución trigonométrica (Media)",
    q: "Calcula: ∫ dx / (x² + 9)",
    choices: [
      "(1/3)arctan(x/3) + C",
      "ln(x² + 9) + C",
      "arcsin(x/3) + C",
      "1/(x + 3) + C",
    ],
    correctIndex: 0,
    solution: `Paso 1:
x = 3tan(θ)

Paso 2: Integrar
(1/3)arctan(x/3) + C`,
  },
  {
    topic: "Sustitución trigonométrica (Media)",
    q: "¿Qué identidad se usa con x = a·tan(θ)?",
    choices: [
      "1 + tan²(θ) = sec²(θ)",
      "1 − sin²(θ) = cos²(θ)",
      "sin²(θ) + cos²(θ) = 1",
      "1 − cos²(θ) = sin²(θ)",
    ],
    correctIndex: 0,
    solution: `Identidad usada con tan:
1 + tan²(θ) = sec²(θ)`,
  },

  // --- Difícil (26–30) ---
  {
    topic: "Sustitución trigonométrica (Difícil)",
    q: "Calcula: ∫ √(x² − 16) dx",
    choices: [
      "(x/2)√(x² − 16) − 8 ln|x + √(x² − 16)| + C",
      "√(x² − 16) + C",
      "ln(x² − 16) + C",
      "arccos(4/x) + C",
    ],
    correctIndex: 0,
    solution: `Paso 1:
x = 4sec(θ)

Paso 2: Convertir integral

Paso 3: Integrar y volver a x

Resultado:
(x/2)√(x² − 16) − 8 ln|x + √(x² − 16)| + C`,
  },
  {
    topic: "Sustitución trigonométrica (Difícil)",
    q: "Para x = 4sec(θ), dx es:",
    choices: [
      "4sec(θ)tan(θ)dθ",
      "4tan(θ)dθ",
      "4sec²(θ)dθ",
      "4cos(θ)dθ",
    ],
    correctIndex: 0,
    solution: `dx = 4sec(θ)tan(θ)dθ`,
  },
  {
    topic: "Sustitución trigonométrica (Difícil)",
    q: "√(x² − a²) usando x = a·sec(θ) se convierte en:",
    choices: [
      "a·tan(θ)",
      "a·cos(θ)",
      "a·sin(θ)",
      "a·sec(θ)",
    ],
    correctIndex: 0,
    solution: `√(x² − a²) con sec:
a·tan(θ)`,
  },
  {
    topic: "Sustitución trigonométrica (Difícil)",
    q: "¿Cuál es el paso final tras integrar en θ?",
    choices: [
      "Regresar a la variable x",
      "Derivar el resultado",
      "Simplificar trigonometría",
      "Aplicar integración por partes",
    ],
    correctIndex: 0,
    solution: `Último paso de sustitución:
Volver a la variable x`,
  },
  {
    topic: "Sustitución trigonométrica (Difícil)",
    q: "¿Por qué se usan sustituciones trigonométricas?",
    choices: [
      "Para eliminar raíces cuadradas",
      "Para reducir potencias",
      "Para integrar polinomios",
      "Para evitar constantes",
    ],
    correctIndex: 0,
    solution: `Objetivo de la sustitución trigonométrica:
Eliminar raíces cuadradas y simplificar la integral`,
  },
];


let quizActive = false;
let currentQuestion = null;
let locked = false;
let bodyOverflowBackup = "";

window.startQuiz = function startQuiz(onResult) {
  if (quizActive) return;

  quizActive = true;
  locked = false;
  currentQuestion = QUESTION_BANK[Math.floor(Math.random() * QUESTION_BANK.length)];

  // Mezclar opciones aleatoriamente
  const correctAnswer = currentQuestion.choices[currentQuestion.correctIndex];
  const shuffledChoices = [...currentQuestion.choices].sort(() => Math.random() - 0.5);
  const newCorrectIndex = shuffledChoices.indexOf(correctAnswer);
  
  currentQuestion = {
    ...currentQuestion,
    choices: shuffledChoices,
    correctIndex: newCorrectIndex
  };

  const overlay = document.getElementById("quizOverlay");
  const qEl = document.getElementById("quizQ");
  const choicesEl = document.getElementById("quizChoices");
  const feedbackEl = document.getElementById("quizFeedback");

  // Reset UI
  feedbackEl.textContent = "";
  feedbackEl.style.maxHeight = "";
  feedbackEl.style.overflowY = "";
  feedbackEl.style.overflowX = "";
  choicesEl.innerHTML = "";

  // Pregunta
  qEl.textContent = `[${currentQuestion.topic}] ${currentQuestion.q}`;

  // Mostrar overlay con scroll (desktop y móvil)
  overlay.style.display = "block";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.right = "0";
  overlay.style.bottom = "0";
  overlay.style.overflowY = "scroll";
  overlay.style.alignContent = "start";
  overlay.style.padding = "20px";
  overlay.style.paddingBottom = "140px"; // espacio para botón
  overlay.style.height = "100vh";
  overlay.style.maxHeight = "100vh";
  overlay.style.width = "100vw";
  overlay.style.boxSizing = "border-box";
  overlay.style.webkitOverflowScrolling = "touch"; // scroll suave en iOS/Android
  overlay.style.touchAction = "pan-y"; // permite desplazar vertical
  overlay.style.backgroundColor = overlay.style.backgroundColor || "rgba(0,0,0,0.1)";
  overlay.scrollTop = 0;

  // Bloquear scroll del body y delegar al overlay
  bodyOverflowBackup = document.body.style.overflow;
  document.body.style.overflow = "";

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
    if (correct) {
      feedbackEl.innerHTML = "✅ Correcto";
    } else {
      const correctAnswer = currentQuestion.choices[currentQuestion.correctIndex];
      const solution = currentQuestion.solution || "No hay solución disponible";
      feedbackEl.innerHTML = `
        <div style="text-align: left;">
          <strong style="color: #ef4444;">❌ Incorrecto</strong><br><br>
          <strong>Respuesta correcta:</strong><br>
          ${correctAnswer}<br><br>
          <strong>Solución paso a paso:</strong><br>
          <pre style="white-space: pre-wrap; font-family: inherit; margin: 8px 0;">${solution}</pre>
        </div>
      `;
    }

    // Crear botón "Continuar"
    const continueBtn = document.createElement("button");
    continueBtn.textContent = "Continuar";
    continueBtn.style.marginTop = "20px";
    continueBtn.style.padding = "12px 24px";
    continueBtn.style.fontSize = "16px";
    continueBtn.style.fontWeight = "700";
    continueBtn.style.borderRadius = "14px";
    continueBtn.style.border = "none";
    continueBtn.style.background = "#3b82f6";
    continueBtn.style.color = "white";
    continueBtn.style.cursor = "pointer";
    continueBtn.style.width = "100%";

    // Touch para móvil
    continueBtn.addEventListener(
      "touchstart",
      (e) => {
        e.preventDefault();
        overlay.style.display = "none";
        cleanup();
        if (typeof onResult === "function") onResult(correct);
      },
      { passive: false }
    );

    // Click para PC
    continueBtn.onclick = () => {
      overlay.style.display = "none";
      cleanup();
      if (typeof onResult === "function") onResult(correct);
    };

    feedbackEl.appendChild(continueBtn);
  }

  function cleanup() {
    quizActive = false;
    currentQuestion = null;
    locked = false;
    document.body.style.overflow = bodyOverflowBackup || "";
    bodyOverflowBackup = "";

    // ✅ Reactiva el canvas al salir del quiz
    const cnv2 = document.querySelector("canvas");
    if (cnv2) cnv2.style.pointerEvents = "auto";

    if (window.__quizKeyHandler) {
      window.removeEventListener("keydown", window.__quizKeyHandler);
      window.__quizKeyHandler = null;
    }
  }
};
