//Iterating over objects properties with for...in loop

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: John
// age: 30
// city: New York

//==========================================================
//Iterating over arrays with for ...of loop

const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
  console.log(fruit);
}
// Output:
// apple
// banana
// orange
//==========================================================
// Example 3: Iterating Over String Characters with for...of

const str = "Hello";

for (const char of str) {
  console.log(char);
}
// Output:
// H
// e
// l
// l
// o
//==========================================================
// Example 4: Iterating Over Array Indices with for...in

const colors = ["red", "green", "blue"];

for (const index in colors) {
  console.log(index);
}
// Output:
// 0
// 1
// 2
