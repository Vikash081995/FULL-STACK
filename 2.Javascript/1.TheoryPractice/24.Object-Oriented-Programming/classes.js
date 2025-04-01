class Triangle{

    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    getArea(){
        return (this.a* this.b) /2 
    }
    sayHi(){
        return `Hi from ${this.a} and ${this.b} and ${this.getArea()}`
    }
}


let triangle = new Triangle(3,4);
console.log(triangle.getArea());