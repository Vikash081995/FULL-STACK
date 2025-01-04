//Given an array and chunk size,divide the array into many subarrays where each subarray is of length size
//example: chunk([1,2,3,4,5],2) => [[1,2],[3,4],[5]]
//example: chunk([1,2,3,4,5,6,7,8],3) => [[1,2,3],[4,5,6],[7,8]]
// =====================
//algorithm
//======================
//1. create empty array to hold chunks called 'chunked'
//2. for each element in the 'unchunked' array
//3. retrieve the last element in 'chunked'
//4. if last element does not exist or if its length is equal to chunk size
//5. add an empty array to 'chunked'
//6. else add the element to the last element
//7. return 'chunked'
function chunk(array, size) {
  let chunked = [];
  for (let elem of array) {
    const last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([elem]);
    } else {
      last.push(elem);
    }
  }
  return chunked;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)); //[[1,2,3],[4,5,6],[7,8]]