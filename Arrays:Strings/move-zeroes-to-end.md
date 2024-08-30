## Move Zeroes to End

[Question Link](https://leetcode.com/problems/move-zeroes/description/)

**Solution**:

```javascript
var moveZeroes = function(nums) {
    let l =0;
    for(let r=0;r<nums.length;r++){
        if(nums[r]!==0){
            [nums[l],nums[r]]=[nums[r],nums[l]];
            l++
        }
    }
};
```