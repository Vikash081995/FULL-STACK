# Currying in Javascript

- Currying is a functional programming technique where a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument.

- Currying is a process of evaluating function arguments one by one, at the end of each evaluation producing a new function with one argument less. It is a technique that allows us to partially apply a function without having to worry about the way in which we implement our functions.
For example, a function that takes two arguments can be transformed into a function that takes one argument and returns another function that takes one argument

## Implementing Currying

- To implement currying, we can use a higher-order function that takes a function as an argument and returns a new function that takes one argument. For example:

```js
function curry2(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}
```

This function can be used to curry any binary function. We can also use arrow syntax to make the code more concise.

## Benefits of Currying

- Currying can be useful when arguments of a function need to be evaluated at different places. It allows us to pass a function around as data and to build sophisticated comparisons using a small set of simple tools. For example, we can use currying to create a function that checks if a dog's weight is less than a certain value.

```js
const weightCheck = (weight) => (dog) => dog.weight < weight;

const dogs = [
  { name: "Rex", weight: 30 },
  { name: "Buddy", weight: 25 },
  { name: "Max", weight: 35 },
  { name: "Rocky", weight: 20 },
];

const under30 = weightCheck(30);
const under25 = weightCheck(25);

const smallDogs = dogs.filter(under30);
const tinyDogs = dogs.filter(under25);
```

Key Points:
• Converts a function with multiple arguments into a series of nested functions.
• Each function returns another function until all arguments are provided.
• Helps in reusability and function composition.

```js
// Regular function
function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(1, 2, 3)); // 6

// Curried version
function curriedSum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curriedSum(1)(2)(3)); // 6
```

💡 Instead of calling sum(1, 2, 3), we call curriedSum(1)(2)(3).

2️⃣ Under-the-Hood Explanation

How does currying work?
• When you call curriedSum(1), it returns a new function that expects b.
• When you call (2), it returns another function expecting c.
• When you call (3), the final calculation is performed.

Why is this useful?
• It partially applies arguments, allowing us to create specialized functions from a general one.
• It maintains function purity, making debugging and testing easier.

🔍 Internally, JavaScript stores the arguments in a closure until all required arguments are received.

### 3️⃣ Examples

1️⃣ Basic Currying

```js
const multiply = (a) => (b) => (c) => a * b * c;

console.log(multiply(2)(3)(4)); // Output: 24
```

Example 2: Partial Application

```js
const multiplyByTwo = multiply(2); // Partially applied
console.log(multiplyByTwo(3)(4)); // Output: 24
```

Use Cases of Currying

✅ Avoids Repetitive Code (Partial Application)
✅ Improves Readability & Maintainability
✅ Useful in Functional Programming & Composition
✅ Helps in Handling Asynchronous Code & Middleware

```js
const logger = (level) => (message) => `[${level.toUpperCase()}] ${message}`;

const infoLogger = logger("info");
const errorLogger = logger("error");

console.log(infoLogger("Server started")); // [INFO] Server started
console.log(errorLogger("Failed to connect")); // [ERROR] Failed to connect
```
