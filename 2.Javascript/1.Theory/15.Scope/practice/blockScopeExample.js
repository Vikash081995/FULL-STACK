function exampleFunction() {
  if (true) {
    let blockScopedVariable = "I am block scoped";
    const anotherBlockScopedVariable = "I am also block scoped";
    var functionScopedVariable = "I am function scoped";

    console.log(blockScopedVariable); // Output: I am block scoped
    console.log(anotherBlockScopedVariable); // Output: I am also block scoped
    console.log(functionScopedVariable); // Output: I am function scoped
  }

  // blockScopedVariable and anotherBlockScopedVariable are not accessible here
  console.log(functionScopedVariable); // Output: I am function scoped
  // The following lines would throw a ReferenceError
  // console.log(blockScopedVariable); // Uncaught ReferenceError: blockScopedVariable is not defined
  // console.log(anotherBlockScopedVariable); // Uncaught ReferenceError: anotherBlockScopedVariable is not defined
}

exampleFunction();
