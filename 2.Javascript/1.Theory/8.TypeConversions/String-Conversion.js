//String conversion
//================================
let num = 42;
let str = num.toString();
let result = num + str;
console.log(result); //4242
console.log(typeof result); //string

//================================
let bool=true;
let st1r = bool.toString();
console.log(st1r); //"true"

//================================
//using template literals
let num1=43;
let str3=`${num1}`
console.log(str3); //43

//================================
console.log("5" + 5); //55
console.log(5 + "5"); //55
console.log("5" - 5); //0
console.log(5 - "5"); //0
console.log(true + "is concatnated");
console.log(null + "is null");
console.log(undefined + "is undefined ");