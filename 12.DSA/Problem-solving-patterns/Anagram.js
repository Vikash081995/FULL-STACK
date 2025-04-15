//Given two strings, write a function to determine if the second string is an anagram of the first. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
//validAnagram('','') //true
//validAnagram('a','a') //true
//validAnagram('abc','cab') //true
//validAnagram('abc','bca') //true
//validAnagram('abc','cba') //false
//validAnagram('awesome','awesom') //false
//validAnagram('cinema','iceman') //true

//--------------------------------------------------------
//My Solution
function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!

  let arr1 = str1.split("");
  let arr2 = str2.split("");

  if (arr1.length !== arr2.length) {
    return false;
  }

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let value of arr1) {
    freqCounter1[value] = (freqCounter1[value] || 0) + 1;
  }

  for (let value of arr2) {
    freqCounter2[value] = (freqCounter2[value] || 0) + 1;
  }

  for (let key in freqCounter1) {
    if (freqCounter1[key] !== freqCounter2[key]) {
      return false;
    }
  }

  return true;
}

//--------------------------------------------------------
//Solution2
function validAnagram2(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? lookup[letter]++ : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter]--;
    }
  }
  return true;
}

//--------------------------------------------------------
