function findFactorialRecursive(number) {
  return number === 2 ? number : number * findFactorialRecursive(number - 1);
}

//without recursion
    
function factorialWithoutRecursion(number) {
  let result = 1;
  if (number === 2) {
    return 2;
  }

  for (let i = 2; i < number; i++) {
    result = result * i;
  }
  return result;
}
