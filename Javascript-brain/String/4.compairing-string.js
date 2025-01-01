// To Compare strings alphabetically, use the localeCompare() method.This returns a negative value if the string isalphabetically less than the other string, a positive value if the string is alphabetically greater than the other string, and 0 if the two strings are equal.
// ====================================================
var a ='hello';
var b='world';

console.log(a.localeCompare(b)); //-1
// ==================================================
//The > and < operators can also be used to compare strings alphabetically, but they cannot return a value of zero.
// ==================================================

// so it should be written like this if ever used 
function strCmp(a,b){
    if(a===b){
        return 0;
    }
    if(a>b){
        return 1;
    }   
    return -1
}

console.log(strCmp("hello","world")); //-1
console.log(strCmp("world","hello")); //1
console.log(strCmp("hello","hello")); //0

// ==================================================
var arr=['bananas','apples','oranges','grapes'];
arr.sort(function(a,b){
    return a.localeCompare(b);
})

console.log(arr); //["apples", "bananas", "grapes", "oranges"]