//optimized solution 

const nums =[1,2,3,4,5,6];
const target =9;

/**
 * Finds two elements in the given array that add up to the target sum.
 *
 * @param {number[]} nums The input array
 * @param {number} target The target sum
 * @return {number[]} An array containing the two indices that add up to the target sum, or null if no such pair exists
 */
function findTwoSum(nums,target){
    let numsMap ={};

    for(let i=0;i<nums.length;i++){
        const currentMapValue =numsMap[nums[i]]
        if(currentMapValue>=0){
            return [currentMapValue,i]
        }else{
            const numberToFind = target-nums[i]
            numsMap[numberToFind] = i
        }
    }
    return null
}

console.log(findTwoSum(nums,target))