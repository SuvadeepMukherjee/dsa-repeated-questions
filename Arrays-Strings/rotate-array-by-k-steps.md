## Rotate Array by K steps 

[Question Link](https://leetcode.com/problems/rotate-array/description/)

**Solution**:

```javascript
var rotate = function(nums, k) {
    let res = new Array(nums.length).fill(0);
    for(let i=0;i<nums.length;i++){
        res[(i+k)%nums.length]= nums[i]
    } 
    for(let i=0;i<nums.length;i++){
        nums[i]= res[i]
    }   
    
};
```