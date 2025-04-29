function palindrome(str){
    str.split('').every((char,index)=>{
        return char === str.charAt(str.length-index-1)
    })
}