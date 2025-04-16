//Basic usages 
const name = null;
const defaultName = "Guest";

console.log(name ?? defaultName)

//Difference between ?? and ||
const value = 0;

console.log(value || "Default Value")  // Outputs: "Default Value"
console.log(value ?? "Default Value") // Outputs: 0

//Chaining with OPTIONAL chaining 
const user ={
    profile:null
}

console.log(user.profile?.age ?? "No age") // Outputs: "No age"

//Default values for function Parameters 

function greet(name){
    console.log(`Hello ${name?? "Guest"}`)
}

greet("Vikash") // Outputs: Hello Vikash
greet(null) // Outputs: Hello Guest

