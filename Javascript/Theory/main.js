//-------------------------------------------------------------
//null and undefined
// -------------------------------------------------------------
null == undefined //true 
null ===undefined //false

console.log(typeof null) //object 
//---------------------------------------------------------------
//to properly check if a value is null, compare it with strict equality operator 
//---------------------------------------------------------------
var a = null;
console.log(a === null); //true

var ab;
console.log(ab === undefined); //true
console.log(ab === null); //false
console.log(typeof ab)// undefined 

//---------------------------------------------------------------
//Testing for NaN
//---------------------------------------------------------------

isNaN(NaN) //true
isNaN(1); //false
isNaN(Infinity); //false : Infinity is a Number
isNaN(true); //false : converted to 1,which is a Number
isNaN(false);//false : converted to 0 which is a Number
isNaN(null); //false : converted to 0,which is a Number
isNaN("");//false: converted to 0,which is a Number
isNaN("45.3") //false: converted to 45.3,which is a Number
isNaN("1.2e3") //false: converted to 1200,which is a Number
isNaN("hello") //true: cannot be converted to a Number
isNaN(undefined)//true: converted to NaN
isNaN({}) //true:conversion fails,no digit at all