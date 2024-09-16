## Max Sum Subarray

[Question Link](https://leetcode.com/problems/maximum-subarray/description/)

**Solution**:

```javascript
var maxSubArray = function(nums) {
    let currSum =0;
    let maxSum = nums[0];
    for(let i=0;i<nums.length;i++){
        currSum = Math.max(currSum,0);
        currSum+= nums[i];
        maxSum = Math.max(maxSum,currSum);
    }
    return maxSum;
};
```