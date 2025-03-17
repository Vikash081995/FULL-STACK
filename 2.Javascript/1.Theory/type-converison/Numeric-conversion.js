//using Number() function
let str = "345";
let toNum = Number(str); //345
//using parseInt() function
let str1 = "345.23";
let toNum1 = parseInt(str1); //345
//using parseFloat() function
//This function parses a string and returns a floating-point number
let str2 ="123.45";
let num =parseFloat(str2); //123.45
//=============================================
//using unary + opertors
let str345="345";
let tonum345=+str345; //345
//==============================================
// Arithmetic operators (, , /, %, *): When these operators are used with a string that can be parsed as a number, JavaScript often converts the string to a number to perform the arithmetic operation

console.log("10" - 5); //5
console.log("20" * 2); //40
console.log("25" / "5"); //5
console.log("10" - true);//9
console.log("10" - false)//10
console.log("10" - null) //10
console.log("10" - undefined)//NaN
