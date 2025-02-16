//print out the nth number of the fibonacci sequence
//example : fib(4) === 3
//example : fib(10) === 55
//fibonacco sequence is the sum of the previous two numbers
//[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

function fib(n) {
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];
    result.push(a + b);
  }
  return result[result.length - 1];
}
console.log(fib(5))