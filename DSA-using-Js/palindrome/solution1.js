//Given a string ,return true if the string is a palindrome or false if it is not.
//Palindrome are strings that form the same word if it is reversed.
//example : palindrome('abba') === true
//example : palindrome('abc') === false

function palindrome(str){
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr
}