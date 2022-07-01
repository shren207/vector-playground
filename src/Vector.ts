export class Vector {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  walk(): void {
    const choice = Math.floor(Math.random() * 4) + 1;
    switch (choice) {
      case 1:
        this.x++;
        break;
      case 2:
        this.x--;
        break;
      case 3:
        this.y++;
        break;
      case 4:
        this.y--;
        break;
    }
  }
}
