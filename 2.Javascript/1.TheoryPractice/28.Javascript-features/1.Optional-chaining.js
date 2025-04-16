//Accessing nested properties
const user = {
  name: "Vikash",
  address: {
    city: "Delhi",
    zip: "10001",
  },
};

console.log(user?.address?.city);
console.log(user?.address?.zip);
console.log(user?.address?.country);

//Accessing METHODS

const user1 = {
  name: "Vikash",
  greet() {
    return "Hello";
  },
};

console.log(user1?.greet()); //Hello
console.log(user1?.sayGoodBye()); //undefined

//Accessing Array Elements
const users = [
  {
    name: "Vikash",
  },
  null,
  {
    name: "Kumar",
  },
];

console.log(users[0]?.name)
console.log(users[1]?.name)
console.log(users[2]?.name)

//Optional chaining with function calls 

const user2={
 getName:null
}

console.log(user2?.getName?.())