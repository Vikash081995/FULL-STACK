//Given a string ,return a new string with the reverse order of characters
//example : reverse('hello') === 'olleh'

function reverse(str) {
 let reversedStr ='';
  for (let i = str.length-1; i >= 0; i--) {
   reversedStr +=str[i]
  }
  return reversedStr;
}
console.log(reverse("hello"))