var missingNumber = function(nums) {
    let missingCountSum = 0;
    let correctTotal =0;
    for(let i=0; i< nums.length + 1; i++){
        correctTotal += i;
        if(nums[i]){
            missingCountSum += nums[i];
        }
    }
    
    return correctTotal - missingCountSum;
};