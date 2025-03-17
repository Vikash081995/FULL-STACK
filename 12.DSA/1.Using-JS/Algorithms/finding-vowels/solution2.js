function vowels(str) {
  let count = 0;
  let checkers =['a','e','i','o','u'];

  for (let char of str.lowercase()) {
    if (
      checkers.includes(char)
    ) {
      count++;
    }
  }
  return count;
}
