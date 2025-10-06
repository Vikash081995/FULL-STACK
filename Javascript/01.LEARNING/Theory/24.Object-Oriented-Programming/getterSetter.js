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
// ------------------------------------
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }
  set width(width) {
    this._width = width;
  }
  get width() {
    return this._width;
  }
  set height(height) {
    this._height = height;
  }
  get height() {
    return this._height;
  }
  get area() {
    return this._width * this._height;
  }
}
const shape = new Rectangle(5, 2);
console.log(shape.area); // 10
console.log(shape.height); // 2
console.log(shape.width); // 5
shape.height = 10;
shape.width = 10;
console.log(shape.area); // 100
console.log(shape.height); // 10
console.log(shape.width); // 10
