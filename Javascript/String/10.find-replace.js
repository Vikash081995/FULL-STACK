//to search for a string inside a string and replace it 

//use indexOf() and lastIndexOf() to find the position of the string

//indexOf() returns the index of the first occurrence of the specified text in a string
//lastIndexOf() returns the index of the last occurrence of the specified text in a string
//replace() replaces a specified value with another value in a string

let str = "hello world";
console.log(str.indexOf('o')) //4
console.log(str.lastIndexOf('o')) //7
console.log(str.indexOf('foo')) //-1

//includes() returns a boolean value if the string contains the specified value
console.log(str.includes('o')) //true
console.log(str.includes('foo')) //false

//replace(regexp|substr, newSubstr|function)
//replace will return a string that has all the occurances of the substring matching the regex replaced with a string replacement

var str1= "hello world";
console.log(str1.replace('world', 'universe')) //hello universe

