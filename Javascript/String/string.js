var hello = "Hello world";
var world = "world";

//Strings can be created from other types using the String() function.
var intString = String(32);
var booleanString = String(true);
var nulLSring = String(null);

//toString() can be used to convert numbers, boolean and Objects to strings
var intString = (5332).toString(); //"5332"
var booleanString = true.toString(); //"true"
var nullString = null.toString(); //"null"
var objectString = { name: "John" }.toString(); //'[object Object]'

//Concatenating strings
var foo = "foo";
var bar = "Bar";
console.log(foo + bar); //"foobar"
console.log(foo + bar + bar); //"foobarBar"
foo.concat(bar); //"foobar"
"a".concat("b", "c"); //"abc"

//Strings can be concatenated with non-string variables but will type-convert the non-string to a string.
var string='string';
var number = 32;
var boolean = true;
console.log(string + number+boolean); //"string32true"


//String template literals
var greeting = "Hello";
var place = "World";
console.log(`${greeting} ${place}`); //"Hello World"