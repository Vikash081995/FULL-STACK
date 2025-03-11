// Create a curried function that validates object properties:
// validateProperty('age')('>')(18)(obj) // Should return true/false
// validateProperty('name')('length')(5)(obj) // Should return true/false

// Write your solution here

const calc = (prop) => (operator) => (value) => (obj) => {
  const operations = {
    ">": (a, b) => a > b,
    "<": (a, b) => a > b,
    "=": (a, b) => a == b,
    length: (a, b) => a.length === b,
  };
  return operations[operator](obj[prop], value);
};

const person = { name: "John", age: 25 };
console.log(validateProperty("age")(">")(18)(person)); // true
console.log(validateProperty("name")("length")(4)(person)); // true
