class Heart {
  constructor(cell) {
    this.CELL = cell;
    this.gx = null;
    this.gy = null;
    this.imgHeart = loadImage('img/corazonLleno.png');
  }

  relocate(cols, rows, snake) {
    // Genera posición aleatoria que no esté en la serpiente
    let validPosition = false;
    while (!validPosition) {
      this.gx = Math.floor(Math.random() * cols);
      this.gy = Math.floor(Math.random() * rows);
      
      // Verifica que no esté en el cuerpo de la serpiente
      validPosition = true;
      for (const p of snake.body) {
        if (p.x === this.gx && p.y === this.gy) {
          validPosition = false;
          break;
        }
      }
    }
  }

  show() {
    if (this.gx === null || this.gy === null) return;
    const S = this.CELL;
    const px = this.gx * S;
    const py = this.gy * S;
    image(this.imgHeart, px, py, S, S);
  }
}
