function sayHi() {
  console.log("Hi");
}

const person = {
  first: "Cherilyn",
  last: "Sarkisian",
  nickName: "Cher",
  fullName() {
    console.log(`${this.first} ${this.last} AKA ${this.nickName}`);
  },
  printBio() {
   console.log(this)
   const fullName = this.fullName();
   console.log(`${fullName} is a person!`);
  },
  laugh:()=>{
    console.log(this);
    console.log(`${this.nickName} says HAHAHAHAHA`);
  }

};

person.fullName();
person.printBio();


//output
// Cherilyn Sarkisian AKA Cher
// undefined is a person!


const printBio = person.printBio;
printBio();