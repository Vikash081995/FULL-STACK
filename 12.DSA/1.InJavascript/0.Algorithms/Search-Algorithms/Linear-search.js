let randArr = [1, 8, 12, 100, 90, 28];

function LinearSearch(arr, num) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

console.log(LinearSearch(randArr, 100));
