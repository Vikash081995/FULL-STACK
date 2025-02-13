// A boolean data type represents one of the two values:true or false. Boolean value is either true or false. The use of these data types will be clear when you start the comparison operator. Any comparisons return a boolean value which is either true or false.

let isLightingOn = true;
let isRaining = false;
let isHungry = false;
let isMarried = true;
let truValue = 4 > 3; // true
let falseValue = 4 < 3; // false

//Truthy values
// In JavaScript, the truthy values are true, all numbers(positive and negative), all strings(except an empty string), and all objects including empty array [].
//Falsy values
// In JavaScript, the falsy values are false, 0, null, undefined, NaN, and the empty string "".

//If we declare a variable and if we do not assign a value, the value will be undefined. In addition to this, if a function is not returning the value, it will be undefined.
let firstname;
console.log(firstName); //not defined, because it is not assigned to a value yet

function ReturningValue() {}
console.log(ReturningValue()); //return undefined, because the function does not return any value
//=========================================================
//Comparison Operators
// In programming we compare values, we use comparison operators to compare two values. We check if a value is greater or less or equal to other value.

console.log(3 > 2); //true
console.log(3 >= 2); //true
console.log(3 < 2); //false
console.log(2 < 3); //true
console.log(2 == 2); //true
console.log(2 != 2); //false
console.log(2 !== 2); //false
console.log(2 != "2"); //true
console.log(2 == "2"); //true
console.log(2 === "2"); //false
console.log(1 == true); //true
console.log(0 == false); //true
console.log(0 === false); //false
console.log(0 === ""); //false
console.log(1 === true); //false
console.log(NaN === NaN); //false
console.log(NaN == NaN); //false
console.log(undefined == null); //true
console.log(undefined === null); //false
console.log(typeof undefined); //undefined
console.log(typeof null); //object
console.log(typeof NaN); //number
//Logical Operators
// Logical operators are used to determine the logic between variables or values.
// && -> AND
// || -> OR
// ! -> NOT
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false
console.log(!true); //false
console.log(!false); //true
