function maxChar(str) {
  let arr = str.split("");

  let obj = {};
  let max = 0;
  let maxChar = "";

  for (let val of arr) {
    obj[val] = (obj[val] || 0) + 1;
  }
  console.log(obj);
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      maxChar = key;
    }
  }
  return maxChar;
}

console.log(maxChar("abccccccd"));
