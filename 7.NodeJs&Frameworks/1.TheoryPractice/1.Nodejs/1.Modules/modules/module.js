const C = require("./test-module1");

//module.exports
const calc = new C();
console.log(calc.add(1, 2));
console.log(calc.multiply(1, 2));
console.log(calc.divide(1, 2));

//exports
const { add, multiply, divide } = require("./test-module2");
console.log(calc2.add(1, 2));

//caching
require("./test-module3")();
