class Food {
  constructor(cell) {
    this.CELL = cell;
    this.gx = 0;
    this.gy = 0;
    this.image = loadImage('img/cerebro.png');
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
  const cx = x + S / 2;
  const cy = y + S / 2;

  // sombra
  noStroke();
  fill(0, 0, 0, 30);
  ellipse(cx + 2, cy + 2, S * 0.75, S * 0.6);

  // base del cerebro
  fill(233, 150, 170);
  ellipse(cx, cy, S * 0.75, S * 0.6);

  // hemisferios
  ellipse(cx - 6, cy, S * 0.38, S * 0.5);
  ellipse(cx + 6, cy, S * 0.38, S * 0.5);

  // pliegues (conocimiento 😏)
  stroke(200, 110, 130);
  strokeWeight(1.5);
  noFill();

  arc(cx - 6, cy, S * 0.3, S * 0.35, -PI / 3, PI / 2);
  arc(cx + 6, cy, S * 0.3, S * 0.35, -PI / 6, PI / 1.5);
  arc(cx, cy + 3, S * 0.5, S * 0.25, 0, PI);

  // brillo
  noStroke();
  fill(255, 255, 255, 90);
  ellipse(cx - 8, cy - 6, S * 0.15, S * 0.12);
}

}
