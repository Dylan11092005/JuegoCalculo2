// quiz.js — SIN contador de tiempo (pensamiento libre) + FIX móvil

const QUESTION_BANK = [
  // ===============================
  // TEMA 1: Potencias trigonométricas
  // ===============================

  // --- Fácil (1–5) ---
  // ===============================
// NUEVAS 20 — Sustitución trigonométrica
// ===============================

// --- Fácil (1–7) ---
{
  topic: "Sustitución trigonométrica (Fácil)",
  q: "Si x = sin(θ) y se obtiene I = cos(θ) + C, entonces I en términos de x es:",
  choices: [
    "√(1 − x²) + C",
    "x + C",
    "arcsin(x) + C",
    "1/√(1 − x²) + C"
  ],
  correctIndex: 0,
  solution: `Paso 1:
x = sin(θ)

Paso 2:
cos(θ) = √(1 − sin²(θ))

Paso 3:
cos(θ) = √(1 − x²)

Resultado:
√(1 − x²) + C`,
},
{
  topic: "Sustitución trigonométrica (Fácil)",
  q: "Para √(16 − x²), la sustitución correcta es:",
  choices: [
    "x = 4sin(θ)",
    "x = 4tan(θ)",
    "x = 4sec(θ)",
    "x = 4cos(θ)"
  ],
  correctIndex: 0,
  solution: `Forma:
√(a² − x²)

Sustitución correcta:
x = a·sin(θ)`,
},
{
  topic: "Sustitución trigonométrica (Fácil)",
  q: "Si x = 5tan(θ), entonces dx es:",
  choices: [
    "5sec²(θ)dθ",
    "5tan(θ)dθ",
    "sec²(θ)dθ",
    "5sec(θ)dθ"
  ],
  correctIndex: 0,
  solution: `Derivar:
dx/dθ = 5sec²(θ)

Resultado:
dx = 5sec²(θ)dθ`,
},
{
  topic: "Sustitución trigonométrica (Fácil)",
  q: "Para √(x² − 36), la sustitución correcta es:",
  choices: [
    "x = 6sec(θ)",
    "x = 6sin(θ)",
    "x = 6tan(θ)",
    "x = 6cos(θ)"
  ],
  correctIndex: 0,
  solution: `Forma:
√(x² − a²)

Sustitución:
x = a·sec(θ)`,
},
{
  topic: "Sustitución trigonométrica (Fácil)",
  q: "Si x = tan(θ), entonces √(1 + x²) es:",
  choices: [
    "sec(θ)",
    "sin(θ)",
    "cos(θ)",
    "tan(θ)"
  ],
  correctIndex: 0,
  solution: `Identidad:
1 + tan²(θ) = sec²(θ)

Entonces:
√(1 + x²) = sec(θ)`,
},
{
  topic: "Sustitución trigonométrica (Fácil)",
  q: "Para √(25 + x²), la sustitución correcta es:",
  choices: [
    "x = 5tan(θ)",
    "x = 5sin(θ)",
    "x = 5sec(θ)",
    "x = 5cos(θ)"
  ],
  correctIndex: 0,
  solution: `Forma:
√(a² + x²)

Sustitución:
x = a·tan(θ)`,
},
{
  topic: "Sustitución trigonométrica (Fácil)",
  q: "Si x = 4sin(θ), entonces dx es:",
  choices: [
    "4cos(θ)dθ",
    "4sin(θ)dθ",
    "cos(θ)dθ",
    "4sec(θ)dθ"
  ],
  correctIndex: 0,
  solution: `Derivar:
dx = 4cos(θ)dθ`,
},

// --- Media (8–14) ---
{
  topic: "Sustitución trigonométrica (Media)",
  q: "Si x = 2sec(θ) y se obtiene I = tan(θ) + C, entonces I en x es:",
  choices: [
    "√(x² − 4)/2 + C",
    "√(x² − 4) + C",
    "x/√(x² − 4) + C",
    "arctan(x) + C"
  ],
  correctIndex: 0,
  solution: `x = 2sec(θ)

sec(θ) = x/2

Triángulo:
tan(θ) = √(x² − 4)/2`,
},
{
  topic: "Sustitución trigonométrica (Media)",
  q: "Si x = 3tan(θ), entonces √(x² + 9) es:",
  choices: [
    "3sec(θ)",
    "3cos(θ)",
    "3sin(θ)",
    "3tan(θ)"
  ],
  correctIndex: 0,
  solution: `x = 3tan(θ)

√(9 + x²) = 3sec(θ)`,
},
{
  topic: "Sustitución trigonométrica (Media)",
  q: "Para ∫ dx / √(x² − 49), la sustitución es:",
  choices: [
    "x = 7sec(θ)",
    "x = 7tan(θ)",
    "x = 7sin(θ)",
    "x = 7cos(θ)"
  ],
  correctIndex: 0,
  solution: `Forma:
√(x² − a²)

Sustitución:
x = a·sec(θ)`,
},
{
  topic: "Sustitución trigonométrica (Media)",
  q: "Si x = 3tan(θ), entonces θ es:",
  choices: [
    "arctan(x/3)",
    "arcsin(x/3)",
    "arcsec(x/3)",
    "arccos(x/3)"
  ],
  correctIndex: 0,
  solution: `x = 3tan(θ)

tan(θ) = x/3

θ = arctan(x/3)`,
},
{
  topic: "Sustitución trigonométrica (Media)",
  q: "Para √(x² + 4), usando sustitución correcta, se convierte en:",
  choices: [
    "2sec(θ)",
    "2cos(θ)",
    "2sin(θ)",
    "2tan(θ)"
  ],
  correctIndex: 0,
  solution: `x = 2tan(θ)

√(x² + 4) = 2sec(θ)`,
},
{
  topic: "Sustitución trigonométrica (Media)",
  q: "Si x = 5sec(θ), entonces √(x² − 25) es:",
  choices: [
    "5tan(θ)",
    "5cos(θ)",
    "5sin(θ)",
    "5sec(θ)"
  ],
  correctIndex: 0,
  solution: `x = 5sec(θ)

√(x² − 25) = 5tan(θ)`,
},
{
  topic: "Sustitución trigonométrica (Media)",
  q: "Para ∫ dx / (x² + 4), el resultado es:",
  choices: [
    "(1/2)arctan(x/2) + C",
    "ln(x² + 4) + C",
    "arcsin(x/2) + C",
    "1/(x + 2) + C"
  ],
  correctIndex: 0,
  solution: `Integral tipo:
1/(x² + a²)

Resultado:
(1/a)arctan(x/a) + C`,
},

// --- Difícil (15–20) ---
{
  topic: "Sustitución trigonométrica (Difícil)",
  q: "Calcula: ∫ √(x² − 9) dx",
  choices: [
    "(x/2)√(x² − 9) − (9/2)ln|x + √(x² − 9)| + C",
    "√(x² − 9) + C",
    "ln(x² − 9) + C",
    "arccos(3/x) + C"
  ],
  correctIndex: 0,
  solution: `Paso 1:
x = 3sec(θ)

Paso 2:
Convertir integral

Paso 3:
Regresar a x

Resultado final:
(x/2)√(x² − 9) − (9/2)ln|x + √(x² − 9)| + C`,
},
{
  topic: "Sustitución trigonométrica (Difícil)",
  q: "Si x = 2sin(θ), entonces cos(θ) es:",
  choices: [
    "√(4 − x²)/2",
    "x/2",
    "√(x² − 4)/2",
    "2/√(4 − x²)"
  ],
  correctIndex: 0,
  solution: `sin(θ) = x/2

cos(θ) = √(1 − sin²(θ))

= √(4 − x²)/2`,
},
{
  topic: "Sustitución trigonométrica (Difícil)",
  q: "Si x = 4sec(θ), entonces dx es:",
  choices: [
    "4sec(θ)tan(θ)dθ",
    "4tan(θ)dθ",
    "4sec²(θ)dθ",
    "4cos(θ)dθ"
  ],
  correctIndex: 0,
  solution: `Derivar:
dx = 4sec(θ)tan(θ)dθ`,
},
{
  topic: "Sustitución trigonométrica (Difícil)",
  q: "Para √(2− x²), la función trigonométrica asociada es:",
  choices: [
    "sin(θ)",
    "tan(θ)",
    "sec(θ)",
    "cot(θ)"
  ],
  correctIndex: 0,
  solution: `Relación:
sin(θ) = x/a`,
},
{
  topic: "Sustitución trigonométrica (Difícil)",
  q: "¿Cuál es el paso final después de integrar en θ?",
  choices: [
    "Regresar a la variable x",
    "Derivar el resultado",
    "Simplificar logaritmos",
    "Aplicar integración por partes"
  ],
  correctIndex: 0,
  solution: `Siempre el último paso es:
Volver a la variable original x`,
},
// ===============================
// NUEVAS 10 — Potencias trigonométricas
// ===============================

// --- Fácil (1–4) ---
{
  topic: "Potencias trigonométricas (Fácil)",
  q: "La identidad correcta para resolver ∫ sin²(x) dx es:",
  choices: [
    "sin²(x) = (1 − cos(2x))/2",
    "sin²(x) = 1 − cos²(x)",
    "sin²(x) = tan²(x) + 1",
    "sin²(x) = sec²(x) − 1"
  ],
  correctIndex: 0,
  solution: `Usar identidad de ángulo doble:
sin²(x) = (1 − cos(2x))/2`,
},
{
  topic: "Potencias trigonométricas (Fácil)",
  q: "La identidad correcta para ∫ cos²(x) dx es:",
  choices: [
    "cos²(x) = (1 + cos(2x))/2",
    "cos²(x) = 1 − sin²(x)",
    "cos²(x) = sec²(x) − 1",
    "cos²(x) = tan²(x) + 1"
  ],
  correctIndex: 0,
  solution: `Identidad de ángulo doble:
cos²(x) = (1 + cos(2x))/2`,
},
{
  topic: "Potencias trigonométricas (Fácil)",
  q: "Para simplificar tan²(x) en una integral se usa:",
  choices: [
    "tan²(x) = sec²(x) − 1",
    "tan²(x) = 1 − sec²(x)",
    "tan²(x) = sec²(x) + 1",
    "tan²(x) = sin²(x)"
  ],
  correctIndex: 0,
  solution: `Identidad pitagórica:
1 + tan²(x) = sec²(x)

Entonces:
tan²(x) = sec²(x) − 1`,
},
{
  topic: "Potencias trigonométricas (Fácil)",
  q: "Para simplificar sec²(x) − 1 se obtiene:",
  choices: [
    "tan²(x)",
    "sin²(x)",
    "cos²(x)",
    "cot²(x)"
  ],
  correctIndex: 0,
  solution: `Identidad:
sec²(x) − 1 = tan²(x)`,
},

// --- Media (5–7) ---
{
  topic: "Potencias trigonométricas (Media)",
  q: "Para ∫ sin⁴(x) dx, el primer paso es:",
  choices: [
    "Reescribir sin⁴(x) como (sin²(x))²",
    "Separar un sin(x)",
    "Aplicar sustitución",
    "Derivar seno"
  ],
  correctIndex: 0,
  solution: `sin⁴(x) = (sin²(x))²

Luego aplicar:
sin²(x) = (1 − cos(2x))/2`,
},
{
  topic: "Potencias trigonométricas (Media)",
  q: "Para ∫ cos⁴(x) dx, se usa:",
  choices: [
    "cos⁴(x) = (cos²(x))²",
    "Separar un cos(x)",
    "u = cos(x)",
    "Integración por partes"
  ],
  correctIndex: 0,
  solution: `cos⁴(x) = (cos²(x))²

Luego:
cos²(x) = (1 + cos(2x))/2`,
},
{
  topic: "Potencias trigonométricas (Media)",
  q: "Para simplificar 1 − sin²(x) se obtiene:",
  choices: [
    "cos²(x)",
    "sec²(x)",
    "tan²(x)",
    "cot²(x)"
  ],
  correctIndex: 0,
  solution: `Identidad fundamental:
sin²(x) + cos²(x) = 1

Entonces:
1 − sin²(x) = cos²(x)`,
},

// --- Difícil (8–10) ---
{
  topic: "Potencias trigonométricas (Difícil)",
  q: "Para ∫ sin²(x)cos²(x) dx, el primer paso es:",
  choices: [
    "Convertir ambas usando identidades de ángulo doble",
    "Separar un seno",
    "Sustituir u = sin(x)",
    "Integración por partes"
  ],
  correctIndex: 0,
  solution: `Ambas potencias son pares.

Usar:
sin²(x) = (1 − cos(2x))/2
cos²(x) = (1 + cos(2x))/2`,
},
{
  topic: "Potencias trigonométricas (Difícil)",
  q: "Para reescribir tan²(x)sec²(x) sin sustitución se usa:",
  choices: [
    "tan²(x) = sec²(x) − 1",
    "sec²(x) = tan²(x) − 1",
    "tan²(x) = 1 − sec²(x)",
    "sin²(x) = 1 − cos²(x)"
  ],
  correctIndex: 0,
  solution: `Reemplazar:
tan²(x) por sec²(x) − 1`,
},
{
  topic: "Potencias trigonométricas (Difícil)",
  q: "Para ∫ cos⁶(x) dx, la estrategia es:",
  choices: [
    "Aplicar identidad de ángulo doble repetidamente",
    "Separar un cos(x)",
    "Sustituir u",
    "Integración por partes"
  ],
  correctIndex: 0,
  solution: `Si la potencia es par:

Reescribir:
cos⁶(x) = (cos²(x))³

Luego aplicar:
cos²(x) = (1 + cos(2x))/2`,
},
// ===============================
// NUEVAS 10 — Sustitución trigonométrica (Conceptual completa)
// ===============================

// --- Fácil (1–3) ---
{
  topic: "Sustitución trigonométrica (Fácil)",
  q: "Para ∫ dx / √(25 − x²), ¿cuál es el valor de a en la sustitución trigonométrica?",
  choices: [
    "5",
    "25",
    "√25",
    "1"
  ],
  correctIndex: 0,
  solution: `Forma:
√(a² − x²)

Aquí:
a² = 25
Entonces:
a = 5`,
},
{
  topic: "Sustitución trigonométrica (Fácil)",
  q: "Para ∫ √(x² − 16) dx, ¿qué caso corresponde?",
  choices: [
    "Caso 1",
    "Caso 2",
    "Caso 3",
    "Ninguno"
  ],
  correctIndex: 0,
  solution: `La forma es:
√(x² − a²)

Es el caso:
x² − a²`,
},
{
  topic: "Sustitución trigonométrica (Fácil)",
  q: "En el caso √(a² + x²), la función trigonométrica asociada es:",
  choices: [
    "tan(θ)",
    "sin(θ)",
    "sec(θ)",
    "cos(θ)"
  ],
  correctIndex: 0,
  solution: `Para:
√(a² + x²)

Se usa:
x = a·tan(θ)`,
},

// --- Media (4–7) ---
{
  topic: "Sustitución trigonométrica (Media)",
  q: "Para ∫ dx / √(x² − 9), si sec(θ) = x/3, entonces tan(θ) es:",
  choices: [
    "√(x² − 9)/3",
    "x/3",
    "3/√(x² − 9)",
    "√(9 − x²)/3"
  ],
  correctIndex: 0,
  solution: `sec(θ) = x/3

Triángulo:
tan(θ) = √(x² − 9)/3`,
},
{
  topic: "Sustitución trigonométrica (Media)",
  q: "Para ∫ √(36 − x²) dx, si sin(θ) = x/6, entonces cos(θ) es:",
  choices: [
    "√(36 − x²)/6",
    "x/6",
    "√(x² − 36)/6",
    "6/√(36 − x²)"
  ],
  correctIndex: 0,
  solution: `sin(θ) = x/6

cos(θ) = √(1 − sin²(θ))

= √(36 − x²)/6`,
},
{
  topic: "Sustitución trigonométrica (Media)",
  q: "Para ∫ dx / (x² + 4), si tan(θ) = x/2, entonces sec(θ) es:",
  choices: [
    "√(x² + 4)/2",
    "x/2",
    "2/√(x² + 4)",
    "√(4 − x²)/2"
  ],
  correctIndex: 0,
  solution: `tan(θ) = x/2

sec(θ) = √(1 + tan²(θ))

= √(x² + 4)/2`,
},
{
  topic: "Sustitución trigonométrica (Media)",
  q: "Para ∫ √(49 − x²) dx, ¿cuál es dx si x = 7sin(θ)?",
  choices: [
    "7cos(θ)dθ",
    "7sin(θ)dθ",
    "cos(θ)dθ",
    "7sec(θ)dθ"
  ],
  correctIndex: 0,
  solution: `x = 7sin(θ)

dx = 7cos(θ)dθ`,
},

// --- Difícil (8–10) ---
{
  topic: "Sustitución trigonométrica (Difícil)",
  q: "Para ∫ dx / √(x² − 25), ¿cuál es θ en términos de x?",
  choices: [
    "arcsec(x/5)",
    "arcsin(x/5)",
    "arctan(x/5)",
    "arccos(x/5)"
  ],
  correctIndex: 0,
  solution: `Caso:
x = 5sec(θ)

Entonces:
sec(θ) = x/5

θ = arcsec(x/5)`,
},
{
  topic: "Sustitución trigonométrica (Difícil)",
  q: "Para ∫ √(16 + x²) dx, si x = 4tan(θ), entonces √(16 + x²) se convierte en:",
  choices: [
    "4sec(θ)",
    "4tan(θ)",
    "4sin(θ)",
    "4cos(θ)"
  ],
  correctIndex: 0,
  solution: `x = 4tan(θ)

√(16 + x²)
= 4sec(θ)`,
},
{
  topic: "Sustitución trigonométrica (Difícil)",
  q: "En el caso √(a² − x²), ¿cuál es la identidad clave que elimina la raíz?",
  choices: [
    "1 − sin²(θ) = cos²(θ)",
    "1 + tan²(θ) = sec²(θ)",
    "sec²(θ) − 1 = tan²(θ)",
    "sin²(θ) + tan²(θ) = 1"
  ],
  correctIndex: 0,
  solution: `Caso:
x = a·sin(θ)

Identidad:
1 − sin²(θ) = cos²(θ)`,
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
