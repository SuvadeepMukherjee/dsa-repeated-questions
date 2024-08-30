## Find Peak Element

[Question Link](https://leetcode.com/problems/find-peak-element/description/)

**Solution**:

```javascript
var findPeakElement = function(nums) {
    let left= 0;
    let right = nums.length -1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(mid > 0 && nums[mid-1]>nums[mid]){
            right =  mid -1;
        }else if( mid<nums.length-1 && nums[mid+1]>nums[mid]){
            left = mid +1;
        }else {
            return mid;
        }
    }
};
```