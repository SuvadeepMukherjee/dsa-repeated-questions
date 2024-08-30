## Max Sum Subarray

[Question Link](https://leetcode.com/problems/maximum-subarray/description/)

**Solution**:

```javascript
var maxSubArray = function(nums) {
    let max=nums[0];
    let temp=0;
    for(let i=0;i<nums.length;i++){
        temp+=nums[i];
        if(temp>max){
            max=temp;
        }
        if(temp<0){
            temp=0;
        }
    }
    return max;
};
```