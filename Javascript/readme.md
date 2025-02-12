# JAVASCRIPT PRO MAX

## VARIABLES

- Variables are used to store data in JavaScript. They are declared using the `let`, `const`, or `var` keyword.

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
onst arr1 = [1, 2, 3, 4];  // Array of numbers
const arr2 = ["apple", "banana", "cherry"];  // Array of strings
const arr3 = [true, 42, "hello"];  // Mixed array
const arr4 = new Array(5);  // Creates an empty array of size 5
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
