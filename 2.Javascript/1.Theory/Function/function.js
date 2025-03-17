function logger(){
    console.log('Hello World');
}

//calling or invoking a function 
logger();

//================================
// Function Declaration vs Function Expression

function calcAge1(birthYear){
    return 2021 - birthYear;
}
const age1=calcAge1(1991);
console.log(age1) //30  



const calcAge2=function(birthYear){
    return 2021 - birthYear;
}

const age2=calcAge2(1991);
console.log(age2) //30


//================================
// Arrow Function
const calcAge3=(birthYear)=> 2021-birthYear;
const age3=calcAge3(1991);
console.log(age3) //30

//================================
// Function with multiple parameters
const yearsUntilRetirement=(birthYear,firstName)=>{
    const age=2021-birthYear;
    const retirement=65-age;
    return `${firstName} retires in ${retirement} years`;   
}

console.log(yearsUntilRetirement(1991,'Jonas')); //Jonas retires in 34 years
//================================
// Function calling other functions
function cutFruitPieces(fruit){
    return fruit*4;
}

function fruitProcessor(apples,oranges){
    const applePieces= cutFruitPieces(apples);
    const orangePieces= cutFruitPieces(oranges);
    const juice=`Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2,3)); //Juice with 8 pieces of apple and 12 pieces of orange.