class Circle{
    constructor(radius){
        this._radius = radius
    }

    set radius(value){
        if(value <= 0) throw new Error("Radius must be positive")
        this._radius = value
    }
}

const c = new Circle(10);
c.radius = 5
console.log(c.radius)