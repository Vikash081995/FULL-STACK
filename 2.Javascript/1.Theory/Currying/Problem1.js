// 📝 Problem:
// Write a curried function that takes a greeting message, a name, and a punctuation mark and returns the full sentence.


const greet=(greeting)=>(name)=>(punc)=>`${greeting},${name}${punc}`

console.log(greet("Hello")("John")("!"));
console.log(greet("good morning")("Alice")("!"))