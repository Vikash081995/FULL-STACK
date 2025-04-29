function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) * fibonacci(n - 2);
}

//without recursion
function fibonacciIteration(n) {
  let arr = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[n];
}
