// .split can be used to split a string into an array of substrings, and returns the new array. The first argument is the separator, which can be a string or a regular expression. If the separator is an empty string, the string is split between each character.
let str = "hello world";
console.log(str.split(" ")); //["hello", "world"]

var s = "one,two,three,four,five";
var arr = s.split(",");
console.log(arr); //["one", "two", "three", "four", "five"]

//use the limit parameter to specify the maximum number of splits
var s = "one,two,three,four,five";
var arr = s.split(",", 3);
console.log(arr); //["one", "two", "three,four,five"]

//splitting a string into an array of characters
var str1 = "hello";
var arr = str1.split("");
console.log(arr); //["h", "e", "l", "l", "o"]

//use join() to join the elements of an array into a string
var arr = ["h", "e", "l", "l", "o"];
var strArr = arr.join("");
console.log(strArr); //hello

//use join() to join the elements of an array into a string with a separator
var arr = ["h", "e", "l", "l", "o"];
var strArr = arr.join("-");
console.log(strArr); //h-e-l-l-o