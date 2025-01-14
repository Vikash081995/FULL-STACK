// Global Scope
var globalVar = "I am a global variable";

function myFunction() {
    // Function Scope
    var functionVar = "I am a function variable";
    console.log(globalVar); // I am a global variable
    console.log(functionVar); 

    let funcVar = "I am a function variable";
    if (true) {
        // Block Scope
        let blockVar = "I am a block variable";
        console.log(blockVar); // Accessible
    }
}

myFunction();
console.log(globalVar); // Accessible
