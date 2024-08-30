## Find Minimum in rotated sorted array

[Question Link](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/)

```javascript
var findMin = function(nums) {
    let left =0;
    let right = nums.length -1;
    let res = nums[0];
    while(left<=right){
        if(nums[left]<nums[right]){
            res =Math.min(res,nums[left]);
            break;
        }
        let mid =Math.floor((left+right)/2);
        res =Math.min(res,nums[mid]);
        if(nums[mid]>=nums[left]){
            left = mid +1;
        }else {
            right = mid -1
        }
    }
    return res;
};
```