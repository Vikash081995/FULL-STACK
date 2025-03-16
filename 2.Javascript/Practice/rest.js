function sum(...nums) {
  return nums.reduce((total, currVal) => {
    return total + currVal;
  });
}

//========================================================
function fullName(first, last, ...titles) {
  console.log("first", first);
  console.log("last", last);
  console.log("titles", titles);
}

fullName("tom", "jones", "III", "order");

//========================================================
const multiply = (...nums) =>
  nums.reduce((total, currVal) => {
    return total + currVal;
  });

const mul = multiply(2, 3, 4, 5, 6, 7);
console.log(mul);
