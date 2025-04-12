// class Dog{
//     constructor(name,breed){
//         this.name = name;
//         this.breed = breed
//     }
//     bark(){
//         console.log("Woof!")
//     }
// }
// const dog1= new Dog("Max","Labrador")
// const dog2= new Dog("Rover","Poodle")
// console.log(dog1.bark())
// console.log(dog2.bark() )

//===========================================
// function Dog(name,breed){
//     this.name = name 
//     this.breed = breed;
// }

// function User(name, email){
//     this.name = name 
//     this.email=email
//     this.isAdmin = false
// }

function Dog(name,breed){
    this.name = name 
    this.breed = breed 
    // this.bark = function(){
    //  return `${this.name} is sleeping`
    // }
    // this.sleep = function(){
    //     return `${this.name} is sleeping`
    // }
}


Dog.prototype.bark= function(){
    return `${this.name} is sleeping`
}

Dog.prototype.sleep= function(){
    return `${this.name} is sleeping`
}


const elton = new Dog("Elton", "Poodle");
elton.bark();
