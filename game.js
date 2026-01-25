let GAME_MODE = "START"; // "START" | "PLAY" | "QUIZ" | "GAME_OVER"

let snake, food;
let audioBg, audioEat;
let audioUnlocked = false;
let audioEatTimer = null;

// SFX helpers en scope global (usados desde eatFood y handlers)
function playEatSfx(ms = 800) {
  if (!audioEat) return;
  try {
    if (audioEatTimer) { clearTimeout(audioEatTimer); audioEatTimer = null; }
    audioEat.currentTime = 0;
    audioEat.play().catch(()=>{});
    audioEatTimer = setTimeout(() => {
      try { audioEat.pause(); audioEat.currentTime = 0; } catch(e){}
      audioEatTimer = null;
    }, ms);
  } catch (e) {}
}

// Note: `golpe2` / audioWrong removed per user request.

function _clearSfxTimers() {
  try {
    if (audioEatTimer) { clearTimeout(audioEatTimer); audioEatTimer = null; }
    if (audioEat) { audioEat.pause(); audioEat.currentTime = 0; }
    // audioWrong removed
  } catch (e) {}
}

const _CELL = (typeof CELL !== "undefined") ? CELL : 28;
const _SNAKE_SPEED = (typeof SNAKE_SPEED !== "undefined") ? SNAKE_SPEED : 6;

let touchStartX = null;
let touchStartY = null;

// Sistema de vidas
let lives = 5;
const MAX_LIVES = 5;
let imgHeartFull, imgHeartEmpty;

function setup() {
  const dims = getCanvasDims();
  const cnv = createCanvas(dims.w, dims.h);
  cnv.parent("canvasWrap");
  noSmooth();

  // Cargar imágenes de corazones
  imgHeartFull = loadImage('img/corazonLleno.png');
  imgHeartEmpty = loadImage('img/corazonVacio.png');

  // Cargar audios (el usuario añadió audio/Catan.mp3 y audio/mario.mp3)
  try {
    audioBg = new Audio('audio/Catan.mp3');
    audioBg.loop = true;
    audioBg.volume = 0.10; // más bajo para la música de fondo

    audioEat = new Audio('audio/mario.mp3');
    audioEat.volume = 0.10; // sonido de comer más suave
  } catch (e) {}

  // Intento de "desbloquear" audio en el primer input del usuario
  const _unlockAudio = () => {
    if (audioUnlocked) return;
    audioUnlocked = true;
    [audioBg, audioEat].forEach(a => {
      if (!a) return;
      a.play().then(() => { a.pause(); a.currentTime = 0; }).catch(() => {});
    });
    window.removeEventListener('touchstart', _unlockAudio);
    window.removeEventListener('mousedown', _unlockAudio);
    window.removeEventListener('keydown', _unlockAudio);
  };
  window.addEventListener('touchstart', _unlockAudio, { passive: true });
  window.addEventListener('mousedown', _unlockAudio);
  window.addEventListener('keydown', _unlockAudio);

  // Si no cargó snake.js/food.js, mostramos el error
  if (typeof Snake !== "function" || typeof Food !== "function") {
    showFatal(
      "No cargaron Snake o Food.",
      "Revisa que existan snake.js y food.js y estén bien escritos en index.html"
    );
    noLoop();
    return;
  }

  setupStartUI();
  setupGameOverUI();

  // Crea snake/food pero queda congelado en START
  newGame(true);
  GAME_MODE = "START";
}

function setupStartUI() {
  const overlay = document.getElementById("startOverlay");
  const btn = document.getElementById("playBtn");
  if (!overlay || !btn) return;

  const startHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    overlay.style.display = "none";
    GAME_MODE = "PLAY";
    _maybePlayBg();
  };
  
  // Reproducir música de fondo al comenzar (si está desbloqueada)
  const _maybePlayBg = () => { if (audioBg) audioBg.play().catch(()=>{}); };

  // PC
  btn.onclick = startHandler;
  // Móvil
  btn.addEventListener("touchstart", startHandler, { passive: false });

  // Asegura visible al cargar
  overlay.style.display = "grid";
}

function setupGameOverUI() {
  const btn = document.getElementById("restartBtn");
  if (!btn) return;

  const restartHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Reactivar canvas por si quedó desactivado
    const cnv = document.querySelector("canvas");
    if (cnv) cnv.style.pointerEvents = "auto";

    hideGameOver();

    // Detener música y reinicia (vuelve a START)
    if (audioBg) { try { audioBg.pause(); audioBg.currentTime = 0; } catch(e){} }
    _clearSfxTimers();
    newGame(true);
    const startOverlay = document.getElementById("startOverlay");
    if (startOverlay) startOverlay.style.display = "grid";
    GAME_MODE = "START";
  };

  // PC
  btn.onclick = restartHandler;

  // MÓVIL (clave)
  btn.addEventListener("touchstart", restartHandler, { passive: false });
}

function windowResized() {
  const dims = getCanvasDims();
  resizeCanvas(dims.w, dims.h, true);

  try {
    if (snake) snake.clampToBoard(getCols(), getRows());
    if (food) food.relocateAvoidSnake(snake, getCols(), getRows());
  } catch (e) {}
}

function getCanvasDims() {
  const wrap = document.getElementById("canvasWrap");
  const w = Math.floor((wrap?.clientWidth || windowWidth));
  const h = Math.floor(Math.min(windowHeight * 0.62, 420));

  const ww = Math.max(_CELL * 8, Math.floor(w / _CELL) * _CELL);
  const hh = Math.max(_CELL * 8, Math.floor(h / _CELL) * _CELL);
  return { w: ww, h: hh };
}

function getCols() { return Math.floor(width / _CELL); }
function getRows() { return Math.floor(height / _CELL); }

function draw() {
  try {
    drawBoard();

    const scoreEl = document.getElementById("scoreUI");
    if (scoreEl) scoreEl.textContent = String(snake?.length ?? 0);

    // Dibujar corazones
    drawHearts();

    // Si por algo snake/food no existen, intenta crearlos
    if (!snake || !food) {
      newGame(true);
    }

    // START: congelado, esperando Play
    if (GAME_MODE === "START") {
      food.show();
      snake.show();
      return;
    }

    if (GAME_MODE === "GAME_OVER") {
      food.show();
      snake.show();
      return;
    }

    if (GAME_MODE === "QUIZ") {
      food.show();
      snake.show();
      return;
    }

    // PLAY
    if (frameCount % _SNAKE_SPEED == 0) {
      snake.update(getCols(), getRows(), food);

      if (snake.isDead) {
        showGameOver();
        return;
      }

      if (snake.justAte) {
        eatFood();
        return;
      }
    }

    food.show();
    snake.show();

  } catch (e) {
    showFatal("ERROR en draw():", e.message || String(e));
    console.error(e);
    noLoop();
  }
}

function drawBoard() {
  noStroke();
  const c1 = color(100, 180, 255);
  const c2 = color(80, 160, 240);

  for (let y = 0; y < height; y += _CELL) {
    for (let x = 0; x < width; x += _CELL) {
      const isAlt = ((x / _CELL + y / _CELL) % 2) === 0;
      fill(isAlt ? c1 : c2);
      rect(x, y, _CELL, _CELL);
    }
  }
}


function drawHearts() {
  const heartSize = _CELL * 0.8;
  const padding = 10;
  let xPos = width - padding - (MAX_LIVES * (heartSize + 5));

  for (let i = 0; i < MAX_LIVES; i++) {
    const heart = (i < lives) ? imgHeartFull : imgHeartEmpty;
    image(heart, xPos, padding, heartSize, heartSize);
    xPos += heartSize + 5;
  }
}

function updateHeartsUI() {
  const heartsEl = document.getElementById("heartsUI");
  if (!heartsEl) return;

  let heartsHTML = '';
  for (let i = 0; i < MAX_LIVES; i++) {
    if (i < lives) {
      heartsHTML += '❤️ ';
    } else {
      heartsHTML += '🤍 ';
    }
  }
  heartsEl.textContent = heartsHTML;
}

function newGame() {
  snake = new Snake(_CELL);
  food = new Food(_CELL);
  food.relocateAvoidSnake(snake, getCols(), getRows());
  lives = MAX_LIVES;
  GAME_MODE = "PLAY";

  // por si antes se detuvo
  if (isLooping() === false) loop();
}

function showGameOver() {
  GAME_MODE = "GAME_OVER";
  if (audioBg) { try { audioBg.pause(); audioBg.currentTime = 0; } catch(e){} }
  _clearSfxTimers();
  const overlay = document.getElementById("gameOverOverlay");
  const finalScore = document.getElementById("finalScore");
  if (finalScore) finalScore.textContent = `Score: ${snake?.length ?? 0}`;
  if (overlay) overlay.style.display = "grid";
}

function hideGameOver() {
  const overlay = document.getElementById("gameOverOverlay");
  if (overlay) overlay.style.display = "none";
}

function eatFood() {
  GAME_MODE = "QUIZ";
  // pausa la música de fondo durante el quiz
  if (audioBg) { try { audioBg.pause(); } catch(e){} }

  // efecto al comer (solo corta duración)
  playEatSfx(800);

  if (typeof startQuiz !== "function") {
    food.relocateAvoidSnake(snake, getCols(), getRows());
    GAME_MODE = "PLAY";
    return;
  }

  startQuiz((correct) => {
    if (correct) {
      // ✅ solo crece si acierta
      snake.growAfterEat();
    } else {

      // ❌ castigo: perder una vida y reducir serpiente
      lives--;
      snake.shrink();
      if (lives <= 0) {
        // Game over por falta de vidas

        showGameOver();
        return;
      }
    }

    // nueva comida siempre
    GAME_MODE = "PLAY";
    // volver a reproducir música de fondo si corresponde
    if (audioBg) { try { audioBg.currentTime = 0; audioBg.play().catch(()=>{}); } catch(e){} }
    food.relocateAvoidSnake(snake, getCols(), getRows());
  });
}

function keyPressed() {
  if (GAME_MODE !== "PLAY") return;

  if (keyCode == UP_ARROW) setDirection("UP");
  else if (keyCode == DOWN_ARROW) setDirection("DOWN");
  else if (keyCode == LEFT_ARROW) setDirection("LEFT");
  else if (keyCode == RIGHT_ARROW) setDirection("RIGHT");
}

// Swipe
function touchStarted() {
  touchStartX = mouseX;
  touchStartY = mouseY;
  return false;
}

function touchEnded() {
  if (GAME_MODE !== "PLAY") return false;

  const dx = mouseX - touchStartX;
  const dy = mouseY - touchStartY;

  const absX = Math.abs(dx);
  const absY = Math.abs(dy);

  const MIN_SWIPE = 18;
  if (absX < MIN_SWIPE && absY < MIN_SWIPE) return false;

  if (absX > absY) (dx > 0) ? setDirection("RIGHT") : setDirection("LEFT");
  else (dy > 0) ? setDirection("DOWN") : setDirection("UP");

  return false;
}

function setDirection(dir) {
  if (GAME_MODE !== "PLAY") return;
  if (snake && typeof snake.setDirection === "function") snake.setDirection(dir);
}

// Mensaje de error en el canvas
function showFatal(title, detail) {
  background(255, 230, 230);
  fill(0);
  noStroke();
  textSize(16);
  text(title, 14, 28);
  textSize(12);
  text(detail, 14, 50);
}
