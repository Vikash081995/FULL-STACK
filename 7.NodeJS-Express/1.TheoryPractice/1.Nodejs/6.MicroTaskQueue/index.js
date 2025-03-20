console.log("Script start");

Promise.resolve().then(() => {
  console.log("Promise 1 resolved");
});

Promise.resolve().then(() => {
  console.log("Promise 2 resolved");
});

console.log("Script end");

console.log("code1");
process.nextTick(() => {
  console.log("process.nextTick1");
});
console.log("code2");

//output
// Script start
// Script end
// code1
// code2
// process.nextTick1
// Promise 1 resolved
// Promise 2 resolved