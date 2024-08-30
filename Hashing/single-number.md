## Single Number

[Question Link](https://leetcode.com/problems/single-number/description/)

**Solution**:

```js
var singleNumber = function(nums) {

   let map = new Map();

   for(let i=0;i<nums.length;i++){

    const count = (map.get(nums[i]) || 0) +1 ;

    map.set(nums[i],count)

   } 

   for(let i=0;i<nums.length;i++){

    const isOne = map.get(nums[i])===1;

    if(isOne) return nums[i]

   }

};
```

