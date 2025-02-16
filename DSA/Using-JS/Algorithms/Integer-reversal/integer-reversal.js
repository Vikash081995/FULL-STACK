//Given a integer, reverse the order of the digits.
//Example: 1234 -> 4321
//Example: -1234 -> -4321

function reverseInteger(num) {
  const reversed = num.toString().split("").reverse().join("");
  if (num < 0) {
    return parseInt(reversed) * -1;
  }
  return parseInt(reversed) * Math.sign(num);
}
