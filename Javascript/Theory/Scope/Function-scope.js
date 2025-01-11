//var is function scope
// meaning it can be accessed throughout the function it is declared in. This means that if a variable is declared with var inside a function, it can be accessed anywhere within that function.
//===============================================================================
function myFunction(){
    var myVar = 'Hello World';
    console.log(myVar);
}

console.log(myVar); //ReferenceError: myVar is not defined