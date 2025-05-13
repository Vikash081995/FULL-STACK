//The this keyword in a regular function refers to the global object (window in browsers, global in Node.js). If you are running this in strict mode, this will be undefined.
function sayHi() {
  console.log(this);
}

// the this keyword in a function expression also refers to the global object or undefined in strict mode.
const greet = function () {
  console.log(this);
};

//In an arrow function, this retains the value of the enclosing lexical context's this. Since the arrow function is defined in the global scope, this will refer to the global object or undefined in strict mode.
const arrow = () => {
  console.log(this);
};
sayHi();
greet();
arrow();


//output
// Window { ... }  // or `undefined` in strict mode
// Window { ... }  // or `undefined` in strict mode
// Window { ... }  // or `undefined` in strict mode