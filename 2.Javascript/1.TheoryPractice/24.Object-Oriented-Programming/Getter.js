class Circle {
    constructor(radius) {
        this._radius = radius

    }

    get Diameter() {
        return this._radius * 2
    }

    get Radius() {
        return this._radius
    }
}

const c = new Circle(10);
console.log(c.Diameter); //20
console.log(c.Radius); //10