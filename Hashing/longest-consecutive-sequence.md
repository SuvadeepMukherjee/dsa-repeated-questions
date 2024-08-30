## Longest Consecutive Sequence

[Question Link](https://leetcode.com/problems/longest-consecutive-sequence/description/)

**Solution**:

```js
var longestConsecutive = function(nums) {

    let set = new Set(nums);

    let max =0;

    for(let i =0;i<nums.length;i++){

        if(set.has(nums[i]-1)) continue;

        let curr=nums[i];

        let length =1;

        while(set.has(curr+1)){

            length++;

            curr++;

        }

        max=Math.max(length,max)

    }

    return max;

};
```

