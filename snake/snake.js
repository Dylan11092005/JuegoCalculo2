class Snake {
  constructor(cell) {
    this.CELL = cell;
    this.dir = { x: 1, y: 0 };
    this.isDead = false;

    const startX = 6, startY = 6;

    this.body = [
      { x: startX - 2, y: startY },
      { x: startX - 1, y: startY },
      { x: startX, y: startY },
    ];

    this.length = this.body.length;

    // Comer → abre quiz; solo crecerá si acierta
    this.justAte = false;
    this.lastTail = null;
  }

  head() { return this.body[this.body.length - 1]; }

  setDirection(dir) {
    const map = {
      UP: { x: 0, y: -1 },
      DOWN: { x: 0, y: 1 },
      LEFT: { x: -1, y: 0 },
      RIGHT: { x: 1, y: 0 },
    };
    const next = map[dir];
    if (!next) return;

    // evita reversa directa
    if (this.dir.x + next.x === 0 && this.dir.y + next.y === 0) return;
    this.dir = next;
  }

  clampToBoard(cols, rows) {
    for (const p of this.body) {
      p.x = Math.max(0, Math.min(cols - 1, p.x));
      p.y = Math.max(0, Math.min(rows - 1, p.y));
    }
  }

  // ✅ se llama solo si acierta
  growAfterEat() {
    if (this.lastTail) {
      this.body.unshift({ ...this.lastTail });
      this.lastTail = null;
      this.length = this.body.length;
    }
  }

  shrink(amount = 1) {
  for (let i = 0; i < amount; i++) {
    // mínimo 2 segmentos para que el juego siga
    if (this.body.length > 2) {
      this.body.shift(); // quita cola
    }
  }
  this.length = this.body.length;
}


  update(cols, rows, food) {
    if (this.isDead) return;

    // reset flags por tick
    this.justAte = false;
    this.lastTail = null;

    const h = this.head();
    const nx = h.x + this.dir.x;
    const ny = h.y + this.dir.y;

    // pared
    let wx = nx;
    let wy = ny;

    if (wx < 0) wx = cols - 1;
    else if (wx >= cols) wx = 0;

    if (wy < 0) wy = rows - 1;
    else if (wy >= rows) wy = 0;

    // cuerpo
    for (const p of this.body) {
      if (p.x === wx && p.y === wy) {
        this.isDead = true;
        return;
      }
    }

    // mover
    this.body.push({ x: wx, y: wy });

    // comer
    if (food && food.gx === wx && food.gy === wy) {
      this.justAte = true;
    }

    // guardar cola para crecer después (si acierta)
    this.lastTail = { ...this.body[0] };

    // movimiento normal: siempre quita cola
    this.body.shift();

    this.length = this.body.length;
  }

  show() {
    const S = this.CELL;
    noStroke();

    // cuerpo
    for (let i = 0; i < this.body.length; i++) {
      const p = this.body[i];
      const px = p.x * S, py = p.y * S;
      fill(i === this.body.length - 1 ? color(70, 160, 70) : color(78, 168, 74));
      rect(px + 2, py + 2, S - 4, S - 4, 14);
    }

    // ojos
    const h = this.head();
    drawEyes(h.x * S, h.y * S, S, this.dir);
  }
}

function drawEyes(hx, hy, s, dir) {
  const cx = hx + s / 2, cy = hy + s / 2;

  let dx = Math.sign(dir.x), dy = Math.sign(dir.y);
  if (dx === 0 && dy === 0) { dx = 1; dy = 0; }

  const forward = 6, side = 5;
  const fx = dx * forward, fy = dy * forward;
  const px = -dy * side, py = dx * side;

  const e1x = cx + fx + px, e1y = cy + fy + py;
  const e2x = cx + fx - px, e2y = cy + fy - py;

  fill(255);
  circle(e1x, e1y, 9);
  circle(e2x, e2y, 9);

  fill(30, 60, 120);
  circle(e1x + dx * 2, e1y + dy * 2, 4);
  circle(e2x + dx * 2, e2y + dy * 2, 4);
}
