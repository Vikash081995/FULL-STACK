//Regular function

function sum(a,b,c){
    return a+b+c;
}

console.log(sum(1,2,3));


//Curried function 
function curriedSum(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

console.log(curriedSum(1)(2)(3)) //6

//can also store partial applications 
const add1=curriedSum(1);
const add1and2=add1(2);
const final = add1and2(3);
console.log(final) //6

//=======================================================
//Modern way using arrow functions 
const curriedSum2=a=>b=>c=>a+b+c;

console.log(curriedSum2(1)(2)(3)) //6

//=======================================================

