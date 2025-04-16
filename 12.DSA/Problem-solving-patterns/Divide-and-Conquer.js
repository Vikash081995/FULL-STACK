//Given a sorted arrays of integers, write a function called search,that accepts a value and return the index where the value passed to the function is located. if the value is not found, return -1

//Search([1,2,3,4,5,6], 4) //3
//Search([1,2,3,4,5,6], 6) //5
//Search([1,2,3,4,5,6], 1) //0

function search(arr, num) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (currentElement < num) {
      min = middle + 1;
    } else if (currentElement > num) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
}
