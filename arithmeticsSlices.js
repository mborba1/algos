/**Medium problem:  An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences.
Given an integer array nums, return the number of arithmetic subarrays of nums.

A subarray is a contiguous subsequence of the array.

Example 1:

Input: nums = [1,2,3,4]
Output: 3
Explanation: We have 3 arithmetic slices in nums: [1, 2, 3], [2, 3, 4] and [1,2,3,4] itself.
Example 2:

Input: nums = [1]
Output: 0
 // step 1. check if array length is at least 3
    // step 2. loop thru the array, calculate the difference between each consecutive element, 
    // step 3. if at least two are the same value, need to keep count how many subarrays of 3 or more elements
    // step 4. return the count
    
*/
function getTotalCount(count){
    count = (1 + count) * count /2
}
var numberOfArithmeticSlices = function(nums) {
    
    if(nums.length < 3) return 0;
  
    let count = 0;
    let result = 0;
    for(let i=2, prev=nums[1] - nums[0]; i<nums.length; i++){  //[1,2,3,4] //[3, prev=1; 3 < 4; 3++]
        const diff = nums[i] - nums[i-1];   //diff = 3-2 =1 
        if(diff === prev){ //true
            count++; // count 1
            continue;
        }
        result += getTotalCount(count);
        prev = diff;
        count =0;
    }
 
    
    return result + getTotalCount(count);
};


//**another solution */

function totalCount (len) {
    len =  (1+ len) * len /2
  }
  
  
  function numberOfArithmenticsSlices (nums) {
     let result = 0
     let currentLen = 0;
  
    for(let i =2, prev = nums[1] - nums[0]; i < nums.length; i++){
        const diff = nums[i] - nums[i-1];
        if(diff === prev) {
           currentLen++;
           continue;
         }
        result += totalCount(currentLen);
       prev = diff;
       currentLen =0
   }
  return result + totalCounts(currentLen)
  }
  
  //using DP
  var numberOfArithmeticSlices = function (A) {
      let sum = 0,
          dp = Array(A.length).fill(0);
  
      for (var i = 2; i <= dp.length - 1; i++) {
          if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
              dp[i] = 1 + dp[i - 1];
              sum += dp[i];
          }
      }
  
      return sum;
  };
  

