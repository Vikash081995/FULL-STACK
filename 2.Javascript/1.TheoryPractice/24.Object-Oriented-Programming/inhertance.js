class Triangle {

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    getArea() {
        return (this.a * this.b) / 2
    }
    sayHi() {
        return `Hi from ${this.a} and ${this.b} and ${this.getArea()}`
    }
}


class RightTriangle extends Triangle {
    constructor(a, b) {
        super(a, b);
    }
    getArea() {
        return (this.a * this.b) / 2
    }
}

class EquilateralTriangle extends Triangle {
    constructor(a) {
        super(a, a);
    }
    getArea() {
        return (this.a * this.a) / 2
    }
}

// Example usage of the Triangle class
const triangle = new Triangle(10, 5);
console.log(triangle.getArea()); // Output: 25
console.log(triangle.sayHi());   // Output: Hi from 10 and 5 and 25

// Example usage of the RightTriangle class
const rightTriangle = new RightTriangle(6, 8);
console.log(rightTriangle.getArea()); // Output: 24
console.log(rightTriangle.sayHi());   // Output: Hi from 6 and 8 and 24

// Example usage of the EquilateralTriangle class
const equilateralTriangle = new EquilateralTriangle(4);
console.log(equilateralTriangle.getArea()); // Output: 8
console.log(equilateralTriangle.sayHi());   // Output: Hi from 4 and 4 and 8