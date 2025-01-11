//variable declared with let and const are block scoped 
// => their value is only accessible inside the block where they are declared
//===============================================================================

if(true){
    let foo ='bar';
}
console.log(foo); //ReferenceError: foo is not defined

//===============================================================================
//Varibale declared with a let inside a for loop is only accessible inside the loop
//===============================================================================
for(let i=0;i<10;i++){
    console.log(i);
}
console.log(i); //ReferenceError: i is not defined

//===============================================================================
//Declaring varibales with Const 
//===============================================================================
const foo = 'bar';
console.log(foo);

const person ={
    name:'John',
    age:20
}

person = {
    name:'Jane',
    age:21  
} //TypeError: Assignment to constant variable

//===============================================================================