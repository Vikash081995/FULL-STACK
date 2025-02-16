let str = "Hello, World";
let index = str.indexOf("World");
console.log(index); //7

// ===========================================
// example 2: indexOf() returns -1 if the substring is not found
index = str.indexOf("javascript");
console.log(index); //-1
// ===========================================
//Finding the first occurrence of a substring in a string from a specific index

index = str.indexOf("o", 5);
console.log(index); //8

//===========================================
let str1 = "As sly as a fox, as strong as an ox";

let target = "as";
let pos = 0;
while (true) {
  let foundPos = str1.indexOf(target, pos);
  if (foundPos == -1) break;
  console.log(`Found at ${foundPos}`);
  pos = foundPos + 1;
}

// Example 1: Finding the last occurrence of a substring
let str3 = "Hello, World! Hello, Universe!";
let lastIndex = str3.lastIndexOf("Hello");
console.log(lastIndex); // Output: 14

// Example 2: Substring not found
lastIndex = str3.lastIndexOf("JavaScript");
console.log(lastIndex); // Output: -1

// Example 3: Finding the last occurrence of a character
lastIndex = str3.lastIndexOf("o");
console.log(lastIndex); // Output: 20

// Example 4: Finding the last occurrence of a substring before a specific index
lastIndex = str3.lastIndexOf("Hello", 13);
console.log(lastIndex); // Output: 0

// Example 5: Case sensitivity
lastIndex = str3.lastIndexOf("hello");
console.log(lastIndex); // Output: -1 (because "hello" is not the same as "Hello")
