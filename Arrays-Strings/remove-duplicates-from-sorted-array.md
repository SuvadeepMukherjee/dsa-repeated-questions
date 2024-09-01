## Remove Duplicatec from sorted array

[Question Link](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)

**Solution**:

```javascript
var removeDuplicates = function(nums) {
    let l = 0;
    for(let r=0;r<nums.length;r++){
        if(nums[l]!==nums[r]){
            l++;
            nums[l]=nums[r]
        }
    }
    return l+1
};
```