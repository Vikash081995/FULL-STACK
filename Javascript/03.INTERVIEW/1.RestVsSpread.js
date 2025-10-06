function sum(...nums){
    console.log(nums)
}

sum(4,5)
sum(4,5,6)


//==========================
// spread operator
//==========================

let arr1=[1,2,3,4,5,6,7];

let arr2=[6,7,8]

let arr3 = [...arr1,...arr2]
console.log(arr3)


//finding maximum from an array 
let arr=[1,2,78,90,67]
console.log(Math.max(...arr)) //90