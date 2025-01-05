//Execution Contex is the environment in which a piece of JavaScript is executed.
//Execution Context is created in two phases:
//1. Creation Phase
//2. Execution Phase
//Creation Phase
//1. Create a global object (window)
//2. Create a 'this' variable and set it to the global object
//Execution Phase
//1. Create a new execution context
//2. Run the code in the new execution context
//3. When the execution context is finished, it is popped off the stack
//4. The next execution context is popped off the stack and executed    

//Execution Context Stack
//The execution context stack is a stack of execution contexts.
//The top of the stack is the current execution context.
//The bottom of the stack is the global execution context
//The execution context stack is used to keep track of the current execution context    

// ================================================================
function b(){
    console.log("called b!");
}

b();

console.log(a);
var a = "Hello World";

console.log(a);

//output:
//called b!
//undefined
//Hello World
//===============================================================
