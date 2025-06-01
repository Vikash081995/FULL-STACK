class Circle {
  #radius;
  constructor(radius) {
    this.#radius = radius;
  }
}

const myCircle = new Circle(10);
console.log(myCircle);
// console.log(myCircle.#radius)