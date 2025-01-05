//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
//Hoisting is JavaScript's default behavior of moving declarations to the top.

b();
console.log(a);

var a = "Hello World!";

function b(){
    console.log("Called b!");
}

//output
//Called b!
//undefined
