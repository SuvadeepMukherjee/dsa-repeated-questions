## First and Last Occurance of x

[Question Link](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/)

**Solution**:

```javascript
var searchRange = function(nums, target) {
    let ans = [-1,-1];
    let left = 0;
    let right = nums.length -1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]===target){
            ans[0]=mid;
            right = mid -1;
        }else if(nums[mid]>target){
            right = mid -1
        }else{
            left = mid +1;
        }
    }
    left =0;
    right = nums.length -1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]===target){
            ans[1]=mid;
            left = mid + 1;
        }else if(nums[mid]>target){
            right = mid -1;
        }else{
            left = mid +1
        }
    }
    return ans;
};
```