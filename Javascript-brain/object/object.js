//=========================================================
//creating object literals
//=========================================================
const person = {
  name: "John",
  age: 20,
};

console.log(person); // { name: 'John', age: 20 }
//=========================================================
//accessing object properties
//=========================================================
console.log(person.name); // John
console.log(person["age"]); // 20
//=========================================================
//updating object properties
//=========================================================
person.name = "Peter";
person["age"] = 24;
console.log(person); // { name: 'Peter', age: 24 }
//=========================================================
//adding new properties to object
person.gender = "male";
person["job"] = "teacher";
console.log(person); // { name: 'Peter', age: 24, gender: 'male', job: 'teacher' }
//=========================================================
//deleting properties from object
//=========================================================
delete person.gender;
delete person["job"];
console.log(person); // { name: 'Peter', age: 24 }
//=========================================================
//object methods
//=========================================================
const person = {
  name: "John",
  age: 20,
  greet: function () {
    console.log("Hello");
  },
};
person.greet(); // Hello
//=========================================================
//this keyword
//=========================================================
const person = {
  name: "John",
  age: 20,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
person.greet(); // Hello, my name is John
//=========================================================
//object constructor
//=========================================================
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person("John", 20);
const person2 = new Person("Peter", 22);
console.log(person1); // Person { name: 'John', age: 20 }
console.log(person2); // Person { name: 'Peter', age: 22 }
