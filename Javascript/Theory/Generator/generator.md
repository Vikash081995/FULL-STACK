# Generators in javascript

A generator is a special function in JavaScript that allows pausing and resuming execution. Unlike regular functions that run to completion, generators can yield values one by one.

A generator is a special kind of function that can be paused and resumed, allowing us to generate a sequence of values over time rather than computing them all at once. Think of it like a book where you can place a bookmark - you can stop reading, do something else, and then come back to exactly where you left off.

```js
function* generator(){
    yield 1;
    yield 2;
    yield 3;

}

const gen = generator();
console.log(gen.next()); //{value:1,done:false}
console.log(gen.next()); //{value:2,done:false}
console.log(gen.next()); //{value:3,done:false}
console.log(gen.next()); //{value:undefined,done:true}
```

<!-- First, we define a generator function using the function* syntax (notice the asterisk). Inside the function, we use the yield keyword to pause execution and return a value. When we call numberGenerator(), it doesn't execute the function immediately - instead, it returns a generator object that we can use to control the execution. -->

<!-- The next() method is how we step through the generator. Each time we call it, the function executes until it hits a yield statement, at which point it pauses and returns an object with two properties: value (the yielded value) and done (whether the generator has finished). -->