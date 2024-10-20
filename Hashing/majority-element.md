## Majority Element 

Question can be found [here](https://leetcode.com/problems/majority-element/description/)

**Solution**:

```javascript
var majorityElement = function(nums) {
    let map = new Map();
    let majority = Math.floor((nums.length)/2);
    for(let i=0;i<nums.length;i++){
        const count = (map.get(nums[i]) || 0) + 1;
        if(count>majority) return nums[i]

        map.set(nums[i],count);
    }
    
    
};
```