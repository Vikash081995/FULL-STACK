const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.length); //10
console.log(arr[0]); //   1

//Array can have items of different types
const arr1 = [
  "Absenath",
  232424,
  true,
  {
    country: "India",
  },
];

console.log(arr1[3].country); //India
//==============================================
//Create an array using split
// ==============================
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

//==============================================
//Accessing array items using index
//==============================================
//we access each element in array using their index
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
//==============================================
//Modifying array element
//==============================================
const numbers = [1, 2, 3, 4, 5];
numbers[0] = 10; // changing 1 at index 0 to 10
numbers[1] = 20; // changing  2 at index 1 to 20
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
//==============================================
//Array  Methods
//==============================================
//Array Constructor

const arrConst = new Array();
console.log(arrConst); //[]

const arrayConst1 = new Array(10);
console.log(arrayConst1); //[empty × 10]

const arrConst2 = new Array(1, 2, 3, 4);
console.log(arrConst2); //[1, 2, 3, 4]

const arrConst3 = new Array("Asabeneh", "Mathias", "Elias", "Brook");
console.log(arrConst3); //["Asabeneh", "Mathias", "Elias", "Brook"]
//==============================================
//created static values to fill the array
//fill-Fill all array elements with static values

const eightZeros = Array(8).fill(0);
console.log(eightZeros); // [0, 0, 0, 0, 0, 0, 0, 0]
const eightX = Array(8).fill("X");
console.log(eightX); //["X", "X", "X", "X", "X", "X", "X", "X"]
//==============================================
//concat :-  Concatenating array using concat
//==============================================
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);
console.log(thirdList); //[1, 2, 3, 4, 5, 6]
//==============================================
const fruits1 = ["banana", "orange", "mango", "lemon"];
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"];
const fruitsAndVegetables = fruits1.concat(vegetables);
console.log(fruitsAndVegetables); //["banana", "orange", "mango", "lemon", "Tomato", "Potato", "Cabbage", "Onion", "Carrot"]
//==============================================
//Getting array length
//==============================================
const numbers1 = [1, 2, 3, 4, 5];
console.log(numbers1.length); // -> 5 is the size of the array
//==============================================
//Getting index of an element in arr array
//==============================================
//indexOf():to check if an item exist in an array.if it exists it return the index else it returns -1
const numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2.indexOf(5)); // -> 4
console.log(numbers2.indexOf(0)); // -> -1
console.log(numbers2.indexOf(1)); // -> 0
//==============================================
//Checking an element if it exist in an array
//==============================================
//check items in a list
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
//========================================
//Getting last index of an element in arry
//========================================
//lastIndexOf():to check if an item exist in an array. If it exist it returns
//the index else it returns -1.
const nums = [1, 2, 3, 4, 5, 3, 1, 2];
console.log(nums.lastIndexOf(2)); // 7
console.log(nums.lastIndexOf(0)); // -1
console.log(nums.lastIndexOf(1)); // 6

//========================================
//includes():To check if an item exist in an array. If it exist it returns true else it returns false.
//========================================
const numbers3 = [1, 2, 3, 4, 5];
console.log(numbers3.includes(5)); // true
console.log(numbers3.includes(0)); // false

const albhabets = ["a", "b", "c", "d", "e"];
console.log(albhabets.includes("a")); // true
console.log(albhabets.includes("f")); // false
//========================================
//Checking array
//========================================
//Array.isArray():To check if the data type is an array
const num4 = [1, 2, 3, 4, 5];
console.log(Array.isArray(num4)); // true

const num5 = 100;
console.log(Array.isArray(num5)); // false
//========================================
//Converting array to string
//========================================
//toString():Converts array to string
const num6 = [1, 2, 3, 4, 5];
console.log(num6.toString()); // 1,2,3,4,5
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
console.log(names.toString()); // Asabeneh,Mathias,Elias,Brook
//========================================
//Joining array elements
//========================================
//join():It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.join()); // 1,2,3,4,5
console.log(numbers.join("")); // 12345
const names1 = ["Asabeneh", "Mathias", "Elias", "Brook"];
console.log(names1.join()); // Asabeneh,Mathias,Elias,Brook
console.log(names1.join("")); // AsabenehMathiasEliasBrook
console.log(names1.join(" ")); // Asabeneh Mathias Elias
console.log(names1.join(", ")); // Asabeneh, Mathias, Elias, Brook
console.log(names1.join(" # ")); // Asabeneh # Mathias # Elias # Brook
//========================================
//Slice array elements
//Slice cuts array elements. It takes two parameters:starting and ending position. It doesn't include the ending position.

const n11 = [1, 2, 3, 4, 5];
console.log(n11.slice()); // -> it copies all  item
console.log(n11.slice(0)); // -> it copies all  item
console.log(n11.slice(0, n11.length)); // it copies all  item
console.log(n11.slice(1, 4)); // -> [2,3,4] // it doesn't include the ending position
//========================================
//Slice array elements
//Splice:It takes three parameters:Starting position, number of times to be removed and number of items to be added.
const n22 = [1, 2, 3, 4, 5];
console.log(n22.splice()); // -> remove all items

const n33 = [1, 2, 3, 4, 5];
console.log(n33.splice(0, 1)); //[1]
console.log(n33); //[2,3,4,5]
//========================================
//Adding item to an array using push
//push: adding item in the end. To add item to the end of an existing array we use the push method.
const n44 = [1, 2, 3, 4, 5];
n44.push(6);
console.log(n44); // -> [1,2,3,4,5,6]

const s5 = ["item1", "item2", "item3"];
s5.push("new item");
console.log(s5); // -> ["item1","item2","item3","new item"]
//========================================
//Removing items from the end of the array
//pop: Removing item in the end.
const n66 = [1, 2, 3, 4, 5, 6];
n66.pop(); // -> remove one item from
console.log(n66); // -> [1,2,3,4,5]
//========================================
//Adding item to the beginning
//unshift: Adding array element in the beginning of the array.
const n77 = [1, 2, 3, 4, 5];
n77.unshift(0); // -> add one item from the beginning
console.log(n77); // -> [0,1,2,3,4,5]
//========================================
//Removing an element from the beginning
//shift: Removing an element from the beginning of the array
const n88 = [1, 2, 3, 4, 5];
n88.shift(); // -> remove one item from the beginning
console.log(n88); // -> [2,3,4,5]
//========================================
//Reversing array order
//reverse
const n99 = [1, 2, 3, 4, 5];
n99.reverse(); // -> reverse array order
console.log(n99); // [5, 4, 3, 2, 1]
//========================================
//Sorting elements in array
//sort: arrange array elements in ascending order. Sort takes a call back function, 
const nm1=["banana","orange","mango","lemon"]
nm1.sort()
console.log(nm1) //['banana', 'lemon', 'mango', 'orange']

const tech = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"];
console.log(tech.sort()); // ['CSS', 'HTML', 'JS', 'MongDB', 'Node', 'React', 'Redux']
//========================================