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

    // Cargar imágenes
    this.imgCabeza = loadImage('img/cabeza.png');
    this.imgCuerpo = loadImage('img/cuerpo.png');
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

    // cuerpo (solo muere si tamaño > 3)
    if (this.length > 3) {
      for (const p of this.body) {
        if (p.x === wx && p.y === wy) {
          this.isDead = true;
          return;
        }
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

  for (let i = 0; i < this.body.length; i++) {
    const p = this.body[i];
    const px = p.x * S;
    const py = p.y * S;
    const isHead = i === this.body.length - 1;

    if (isHead) {
      // CABEZA
      push();
      translate(px + S / 2, py + S / 2);
      rotate(this.getHeadRotation());
      image(this.imgCabeza, -S / 2, -S / 2, S, S);
      pop();
    } else {
      // CUERPO
      push();
      translate(px + S / 2, py + S / 2);

      const prev = this.body[i - 1];
      const next = this.body[i + 1];

      let angle = 0; // sprite HORIZONTAL por defecto

      // Si el cuerpo va en vertical → rotar
      if (
        (prev && prev.y !== p.y) ||
        (next && next.y !== p.y)
      ) {
        angle = PI / 2;
      }

      rotate(angle);
      image(this.imgCuerpo, -S / 2, -S / 2, S, S);
      pop();
    }
  }
}



  getHeadRotation() {
    if (this.dir.y === 1) return 0;        // Frente
    if (this.dir.x === 1) return -PI / 2;  // Derecha
    if (this.dir.x === -1) return PI / 2;   // Izquierda
    if (this.dir.y === -1) return PI;       // Atrás
    return 0;
  }



}
