//To detect whether a parameter is a string, use the typeof operator. This will return 'string' if the parameter is a string.

let str = "hello world";
console.log(typeof str); //string

var anInt = 42;
console.log(typeof anInt); //number


//To detect whether a parameter is a string, use the typeof operator. This will return 'string' if the parameter is a string.
function isString(str){
    return typeof str === 'string';
}   

console.log(isString("hello")); //true
console.log(isString(42)); //false
console.log(isString([1,2,3])); //false

