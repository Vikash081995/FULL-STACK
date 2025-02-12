# JAVASCRIPT PRO MAX

## VARIABLES

- Variables are used to store data in JavaScript. They are declared using the `let`, `const`, or `var` keyword.

### Daclaring a variable

```js
var myvariable = "this is dummy variable";

//using varibale
var number = 5,
  number1 = 3;

console.log(number);

//addition substraction and deivision of numbers
number1 = number1 + 5;
number1 = number1 - 6;

var number2 = number1 + 5;
var number3 = number2 / number1;
console.log(number2, number3);
```

### Types of variables

Arrays and Objects

```js
var myArray = []; //Empty array

//an arrays is a set of variables
var fruits = ["apple", "banana", "orange"];

var primeNumbers = [2, 3, 5, 7, 11];

var randomVariables = [1, "hello", true, null, undefined];

myArray = ["zero", "one", "two"];
console.log(myArray[0]);

//Objects is group of values and keys
var myobject = {
  name: "John",
  age: 20,
  isMale: true,
};
console.log(myobject.name);

var myInt = 12; //32-bit number
var myLong = 9838672372736;
var myFloat = 3.14; //32 bit floating number
var myDouble = 932438473.33;

var boolean = true;
var myBool2 = false;

var myNoNum = NaN;
var NaN_Example = 0 / 0;

var notdefined; //undefined
window.alert(randomAlertnum); //undefined
var mynull = null;
```

### VARIABLES Creation Stage

- 1.Creation Stage
- 2.Initialization Stage
- 3.Assignment Stage

**Stage1:DECLARATION**

```js
var username;
```

**Stage2:INITIALIZATION**

```js
username = "John";
```

**Stage3:USAGE**

```js
console.log(username);
```

## SCOPE

- Scope refers to the visibility and accessibility of variables within a program.
- There are two types of scope in JavaScript:

  - Global Scope: Variables declared outside of any function or block have global scope. They can be accessed from anywhere in the code.
  - Local Scope: Variables declared within a function or block have local scope. They are only accessible within the function or block where they are defined.

  - In JavaScript, the scope of a variable is determined by its declaration location. Variables declared with `var` have function scope, while variables declared with `let` and `const` have block scope.

  - It's important to understand the scope of variables to avoid naming conflicts and unintended behavior in your code.

### BLOCKED SCOPE

> Variables declared with let are blocked scope

- their value is only accessible inside the block where they are declared

```js
if (true) {
  let foo = "bar";
}
console.log(foo); //ReferenceError: foo is not defined
```

> Variable declared with a let inside a for loop is only accessible inside the loop

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i); //ReferenceError: i is not defined
```

> Declaring variables with Const

```js
const foo = "bar";
console.log(foo);

const person = {
  name: "John",
  age: 20,
};

person = {
  name: "Jane",
  age: 21,
}; //TypeError: Assignment to constant variable
```

### FUNCTION SCOPE

- Variables declared with var inside a function have function scope. They are accessible within the function where they are declared and any nested functions.

```js
function myFunction() {
  var x = 10;
  if (true) {
    var y = 20;
    console.log(x); // 10
    console.log(y); // 20
    console.log(x); // 10
  }
  console.log(x); // 10
  console.log(y); // ReferenceError: y is not defined
}

myFunction();
```

```js
function myFunction() {
  var myVar = "Hello World";
  console.log(myVar);
}

console.log(myVar); //ReferenceError: myVar is not defined
```

### NESTED SCOPE

- Variables declared with var inside a nested function have function scope. They are accessible within the nested function and any nested functions.

```js
function foo(msg) {
  function hello() {
    console.log(`Hello ${msg}`);
  }
  hello();
}

foo("World");

//output: Hello World
```

### TEMPORAL DEAD ZONE

- Variables declared with let and const are in a temporal dead zone until the line where they are declared is reached.

  • The Temporal Dead Zone (TDZ) is the time between when a variable is hoisted and when it is initialized.
  • Accessing a variable in TDZ results in a ReferenceError.
  • Applies only to let and const variables.
  • Does NOT apply to var. (var variables are hoisted with undefined)

- Key Concept:

```js
console.log(x); // ❌ ReferenceError: Cannot access 'x' before initialization
let x = 10;
```

🔹 Why does this error occur?
• x is hoisted, but it’s in the TDZ until initialization (x = 10).

#### Under-the-Hood Explanation

How Does TDZ Work?

1. JS Hoists Declarations
   • JavaScript moves variable declarations (let, const, var, function) to the top of their scope before execution.
2. TDZ Applies to let & const
   • These variables are hoisted but not initialized.
   • The engine does not assign them a default value (undefined).
   • Trying to access them before initialization results in an error.
3. TDZ Exists Until Initialization
   • Once the variable is assigned a value, TDZ ends, and it can be used normally.

var Does NOT Have TDZ

```js
console.log(c); // ✅ undefined (No TDZ)
var c = 20;
console.log(c); // ✅ 20
```

## ARRAY

- An array is an ordered list of values stored in a single variable. In JavaScript, arrays are dynamic, meaning they can grow or shrink in size and hold multiple data types.

### Declaring an array

- There are two syntaxes for creating an empty array:

```js
let arr = new Array();
let arr2 = [];
```

### Examples of creating an array

```js
const arr1 = [1, 2, 3, 4]; // Array of numbers
const arr2 = ["apple", "banana", "cherry"]; // Array of strings
const arr3 = [true, 42, "hello"]; // Mixed array
const arr4 = new Array(5); // Creates an empty array of size 5
```

### Accessing Elements

- You can access elements of an array using their index, which starts from 0

```js
console.log(arr1[0]); // 1
console.log(arr2[2]); // "cherry"
console.log(arr3.length); // 3
```

### Under-the-Hood Explanation

JavaScript Arrays Are Objects
•Unlike low-level languages where arrays are contiguous memory blocks,JavaScript arrays are objects with keys as indexes.
•Internally, they behave like hash maps with integer-based keys.

Sparse vs. Dense Arrays
•A dense array has elements in all index positions.
•A sparse array has missing elements.

```js
const sparseArray = [];
sparseArray[5] = "hello";
console.log(sparseArray.length); // 6 (not 1!)
console.log(sparseArray); // [ <5 empty slots>, 'hello' ]
```

### Accessing Array Elements

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.length); //10
console.log(arr[0]); //   1
```

### mixed array

Array can have items of different types

```js
const arr1 = [
  "Absenath",
  232424,
  true,
  {
    country: "India",
  },
];

console.log(arr1[3].country); //India
```

### Creating an array using split

- Create an array from strings using split

```js
let js = "JavaScript";
const charsInJavascript = js.split("");
console.log(charsInJavascript); //["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let comparesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = comparesString.split(",");
console.log(companies); //["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = text.split(" ");
console.log(words); //["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python."]
```

### Accessing array items using index

- we access each element in array using their index

```js
const fruits = ["banana", "orange", "mango", "lemon"];
let firstFruit = fruits[0]; // we are accessing the first item using its index
console.log(firstFruit); // banana

secondFruit = fruits[1];
console.log(secondFruit); // orange

let lastFruit = fruits[fruits.length - 1];
console.log(lastFruit); // lemon

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
console.log(webTechs); // all the array items
console.log(webTechs.length); // => to know the size of the array, which is
console.log(webTechs[0]); // HTML
console.log(webTechs[1]); // CSS
console.log(webTechs[webTechs.length - 1]); // MongoDB
```

### Modifying array element

```js
const numbers = [1, 2, 3, 4, 5];
numbers[0] = 10; // changing 1 at index 0 to 10
numbers[1] = 20; // changing 2 at index 1 to 20
console.log(numbers); // [10, 20, 3, 4, 5]

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
countries[0] = "India";
countries[countries.length - 1] = "Korea";
console.log(countries); //["India", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Korea"]
```

### Array Methods

- Array methods are built-in functions in JavaScript that allow you to manipulate arrays.

#### Array Constructor

```js
const arrConst = new Array();
console.log(arrConst); //[]

const arrayConst1 = new Array(10);
console.log(arrayConst1); //[empty × 10]

const arrConst2 = new Array(1, 2, 3, 4);
console.log(arrConst2); //[1, 2, 3, 4]

const arrConst3 = new Array("Asabeneh", "Mathias", "Elias", "Brook");
console.log(arrConst3); //["Asabeneh", "Mathias", "Elias", "Brook"]
```

#### created static values to fill the array

- fill-Fill all array elements with static values

```js
const eightZeros = Array(8).fill(0);
console.log(eightZeros); // [0, 0, 0, 0, 0, 0, 0, 0]
const eightX = Array(8).fill("X");
console.log(eightX); //["X", "X", "X", "X", "X", "X", "X", "X"]
```

#### concat :- Concatenating array using concat

```js
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);
console.log(thirdList); //[1, 2, 3, 4, 5, 6]
//==============================================
const fruits1 = ["banana", "orange", "mango", "lemon"];
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"];
const fruitsAndVegetables = fruits1.concat(vegetables);
console.log(fruitsAndVegetables); //["banana", "orange", "mango", "lemon", "Tomato", "Potato", "Cabbage", "Onion", "Carrot"]
```

#### Getting array length

```js
const numbers1 = [1, 2, 3, 4, 5];
console.log(numbers1.length); // -> 5 is the size of the array
```

#### Getting index of an element in arr array

**indexOf():to check if an item exist in an array.if it exists it return the index else it returns -1**

```js
const numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2.indexOf(5)); // -> 4
console.log(numbers2.indexOf(0)); // -> -1
console.log(numbers2.indexOf(1)); // -> 0
```

#### Checking an element if it exist in an array

- check items in a list

```js
const fruits2 = ["banana", "orange", "mango", "lemon"];
let index = fruits2.indexOf("banana"); // 0

if (index === -1) {
  console.log("This fruit does not exist in the array");
} else {
  console.log("This fruit does exist in the array");
}

let indexofAvacardo = fruits2.indexOf("avacardo"); // -1
if (indexofAvacardo === -1) {
  console.log("This fruit does not exist in the array");
} else {
  console.log("This fruit does exist in the array");
}
```

#### Getting last index of an element in arry

**lastIndexOf():to check if an item exist in an array. If it exist it returns the index else it returns -1.**

```js
const nums = [1, 2, 3, 4, 5, 3, 1, 2];
console.log(nums.lastIndexOf(2)); // 7
console.log(nums.lastIndexOf(0)); // -1
console.log(nums.lastIndexOf(1)); // 6
```

**includes():To check if an item exist in an array. If it exist it returns true else it returns false.**

```js
const numbers3 = [1, 2, 3, 4, 5];
console.log(numbers3.includes(5)); // true
console.log(numbers3.includes(0)); // false

const albhabets = ["a", "b", "c", "d", "e"];
console.log(albhabets.includes("a")); // true
console.log(albhabets.includes("f")); // false
```

#### Checking array

**Array.isArray():To check if the data type is an array**

```js
const num4 = [1, 2, 3, 4, 5];
console.log(Array.isArray(num4)); // true

const num5 = 100;
console.log(Array.isArray(num5)); // false
```

#### Converting array to string

**toString():Converts array to string**

```js
const num6 = [1, 2, 3, 4, 5];
console.log(num6.toString()); // 1,2,3,4,5
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
console.log(names.toString()); // Asabeneh,Mathias,Elias,Brook
```

#### Joining array elements

**join():It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.**

```js
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.join()); // 1,2,3,4,5
console.log(numbers.join("")); // 12345
const names1 = ["Asabeneh", "Mathias", "Elias", "Brook"];
console.log(names1.join()); // Asabeneh,Mathias,Elias,Brook
console.log(names1.join("")); // AsabenehMathiasEliasBrook
console.log(names1.join(" ")); // Asabeneh Mathias Elias
console.log(names1.join(", ")); // Asabeneh, Mathias, Elias, Brook
console.log(names1.join(" # ")); // Asabeneh # Mathias # Elias # Brook
```

#### Slice array elements

**slice():To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.**

```js
const n11 = [1, 2, 3, 4, 5];
console.log(n11.slice()); // -> it copies all item
console.log(n11.slice(0)); // -> it copies all item
console.log(n11.slice(0, n11.length)); // it copies all item
console.log(n11.slice(1, 4)); // -> [2,3,4] // it doesn't include the ending position
```

#### Splice array elements

**splice():To cut out a multiple items in range. It takes three parameters:Starting position, number of times to be removed and number of items to be added.**

```js
const n22 = [1, 2, 3, 4, 5];
console.log(n22.splice()); // -> remove all items

const n33 = [1, 2, 3, 4, 5];
console.log(n33.splice(0, 1)); //[1]
console.log(n33); //[2,3,4,5]
```

#### Adding item to an array using push

- push: adding item in the end. To add item to the end of an existing array we use the push method.

```js
const n44 = [1, 2, 3, 4, 5];
n44.push(6);
console.log(n44); // -> [1,2,3,4,5,6]

const s5 = ["item1", "item2", "item3"];
s5.push("new item");
console.log(s5); // -> ["item1","item2","item3","new item"]
```

#### Removing items from the end of the array

- pop: Removing item in the end.

```js
const n66 = [1, 2, 3, 4, 5, 6];
n66.pop(); // -> remove one item from
console.log(n66); // -> [1,2,3,4,5]
```

#### Adding item to the beginning

- unshift: Adding array element in the beginning of the array.

```js
const n77 = [1, 2, 3, 4, 5];
n77.unshift(0); // -> add one item from the beginning
console.log(n77); // -> [0,1,2,3,4,5]
```

#### Removing an element from the beginning

- shift: Removing an element from the beginning of the array

```js
const n88 = [1, 2, 3, 4, 5];
n88.shift(); // -> remove one item from the beginning
console.log(n88); // -> [2,3,4,5]
```

#### Reversing array order

- reverse: reverse the order of an array.

```js
const n99 = [1, 2, 3, 4, 5];
n99.reverse(); // -> reverse array order
console.log(n99); // [5, 4, 3, 2, 1]
```

#### Sorting elements in array

- sort: arrange array elements in ascending order. Sort takes a call back function

```js
const nm1 = ["banana", "orange", "mango", "lemon"];
nm1.sort();
console.log(nm1); //['banana', 'lemon', 'mango', 'orange']

const tech = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"];
console.log(tech.sort()); // ['CSS', 'HTML', 'JS', 'MongDB', 'Node', 'React', 'Redux']
```
