function square(num:number):number{
    return num*2
}
console.log(square(2)); // 4

function greet(person:string){
    return `Hi there!${person}`
}
// greet(true); // Error: Argument of type 'true' is not assignable to parameter of type 'string'.
greet("John");

//Arrow functions
const add = (a:number,b:number):number => a+b;
add(1,2); // 3

//setting default values 
function addNumbers(a:number,b:number=9):number{
    return a+b;
}   
addNumbers(1); // 10

//Anonymous functions
const colors =['red','green','blue'];
colors.map(color=>{
    return color.toUpperCase();
})


//returning void
function printTwice(msg:string):void{
    console.log(msg);
    console.log(msg);
}
printTwice("hello");

//returning never
function throwError(msg:string):never{
    throw new Error(msg);
}

function gameLoop():never{
    while(true){
        console.log("Infinite loop");
    }
}