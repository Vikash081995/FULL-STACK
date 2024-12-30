
function reverseString(str){
    return str.split('').reverse().join('');
}

reverseString("hello"); //"olleh"

//using spread operator 
function revString(str){
    return [...String(str)].reverse().join('');
}

console.log(revString("hello")); //"olleh"
console.log(revString(1234)); //"4321"
console.log(revString([1,2,3])); //"eurt"