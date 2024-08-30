## Search in a rotated sorted array

[Question Link](https://leetcode.com/problems/search-in-rotated-sorted-array/description/)

**Solution**:

```javascript
var search = function(nums, target) {
    let left = 0;
    let right = nums.length -1;
    while(left<=right){
        let mid =Math.floor((left+right)/2);
        if(nums[mid]===target){
            return mid;
        }//left half sorted
        else if(nums[mid]>=nums[left]){
            if(target >= nums[left] && target < nums[mid]){
                right = mid -1
            }else{
                left = mid + 1;
            }
        }//right half sorted
        else if(nums[right]>= nums[mid]){
            if(target >nums[mid] && target <= nums[right]){
                left = mid +1;
            }else{
                right = mid -1
            }

        }
    }
    return -1;
};
```