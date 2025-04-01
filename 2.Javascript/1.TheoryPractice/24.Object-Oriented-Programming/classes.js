class Triangle {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    getArea() {
        return (this.a * this.b) / 2;
    }
    sayHi() {
        return `Hi from ${this.a} and ${this.b} and ${this.getArea()}`;
    }
}

let triangle = new Triangle(3, 4);
console.log(triangle.getArea());

//==============================================

class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }

    meow() {
        return `${this.name} is meowing`;
    }
}

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        super(name, age)
        this.livesLeft = livesLeft
    }
    meow() {
        return "Meowhhh";
    }
}

class Dog extends Pet {
    eat() {
        return `${this.name} scratches the furniture`;
    }
}
