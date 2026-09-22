/*Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. */

function targetNum(nums: number[], target: number): number[] {
    if(nums.length > 0 ) {
        for( let i : number = 0; i < nums.length; i++) {
            for( let j: number = i + 1; j < nums.length; j++) {
                const sum = nums[i] + nums[j];

                if(sum === target) {
                    return [i+1, j];
                }
            }
        }
    }
    return [];
}

console.log(targetNum([1,2,3,4,5,6,7], 3));
