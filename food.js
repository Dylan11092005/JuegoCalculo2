class Food {
  constructor(cell) {
    this.CELL = cell;
    this.gx = 0;
    this.gy = 0;
  }

  // Coloca la comida en un lugar que NO choque con la serpiente
  relocateAvoidSnake(snake, cols, rows) {
    let valid = false;

    while (!valid) {
      this.gx = Math.floor(random(cols));
      this.gy = Math.floor(random(rows));
      valid = true;

      for (const part of snake.body) {
        if (part.x === this.gx && part.y === this.gy) {
          valid = false;
          break;
        }
      }
    }
  }

  // Dibuja la manzana estilo Google Snake
  show() {
    const S = this.CELL;
    const x = this.gx * S;
    const y = this.gy * S;

    // sombra
    noStroke();
    fill(0, 0, 0, 30);
    circle(x + S / 2 + 2, y + S / 2 + 2, S * 0.7);

    // manzana
    fill(231, 76, 60);
    circle(x + S / 2, y + S / 2, S * 0.7);

    // brillo
    fill(255, 255, 255, 160);
    circle(x + S / 2 - 4, y + S / 2 - 6, S * 0.2);

    // tallo
    stroke(92, 64, 51);
    strokeWeight(3);
    line(
      x + S / 2,
      y + S / 2 - 10,
      x + S / 2 + 2,
      y + S / 2 - 16
    );

    // hoja
    noStroke();
    fill(46, 204, 113);
    ellipse(
      x + S / 2 + 7,
      y + S / 2 - 14,
      10,
      6
    );
  }
}
