import "./a.mjs"

console.log("Before main module ");
const x = 1;
const y= x+1;
console.log("End of main module")


//output 

// about to load a.mjs
// loaded a.mjs
// Before main module 
// End of main module