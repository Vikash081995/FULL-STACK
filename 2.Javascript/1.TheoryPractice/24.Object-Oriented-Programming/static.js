class Cat {
    constructor(name,bread){
        this.name = name 
        this.bread = bread
    }
    static species = "mammal"

    static sayHi(){
        console.log("Hi")
    }
}

const cat1 = new Cat("Tom","Persian")
const cat2 = new Cat("Jerry","Maine Coon")

console.log(cat1.species) //Tom
console.log(cat2.species) //Jerry

console.log(Cat.species) //mammal
Cat.sayHi() //Hi


