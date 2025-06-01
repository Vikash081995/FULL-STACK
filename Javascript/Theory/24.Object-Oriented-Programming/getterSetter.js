class Circle {
  static allowedColors = new Set(["red", "green", "blue"]);
  constructor(radius, color) {
    this._radius = radius;
    this.setCColor(color);
  }

  setColor(newColor) {
    if (Circle.allowedColors.has(color)) {
      this._color = color;
    } else {
      throw new Error("Invalid color");
    }
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value <= 0) throw new Error("Radius must be positive");
    this._radius = value;
  }

  get color() {
    return this._color;
  }

  set color(newColor) {
    this.setColor(newColor);
  }
}

const c = new Circle(10, "red");
console.log(c.color);
c.color = "green";
c._color = "yellow";
console.log(c.color);
//red
//green
