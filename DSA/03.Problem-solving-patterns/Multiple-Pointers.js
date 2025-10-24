//Example Question 
//Write a function called SumZero which accepts a sorted array of integers as input and returns the first pair of integers in the array that add up to zero.
//return an array that includes both values that sum to zero or undefined if pair doesn't exist.

//SumZero([-3,-2,-1,0,1,2,3]) //[-3,3]
//SumZero([-2,0,1,3]) //undefined
//SumZero([1,2,3,4,5]) //undefined
//=================================
function sumZero(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===0){
                return [arr[i],arr[j]]
            }
        }
    }
}

//=================================
//two pointers solution 
function sumZero(arr){
    let left=0;
    let right = arr.length-1;

    while(left<right){
        let sum = arr[left]+arr[right];
        if(sum ===0){
            return [arr[left],arr[right]]
        }else if(sum>0){
            right--;
        }else{
            left++;
        }
    }
}