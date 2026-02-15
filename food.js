class Food {
  constructor(cell) {
    this.CELL = cell;
    this.gx = 0;
    this.gy = 0;
    this.image = loadImage('img/cerebro-removebg.png');
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

  // Dibuja la imagen de comida
  show() {
    const S = this.CELL;
    const x = this.gx * S;
    const y = this.gy * S;
    
    if (this.image) {
      image(this.image, x, y, S, S);
    }
  }

}
