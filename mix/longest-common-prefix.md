## Longest Common Prefix

[Question Link](https://leetcode.com/problems/longest-common-prefix/description/)

**Solution**:

```javascript
var longestCommonPrefix = function(strs) {
    strs = strs.sort();
    let first = strs[0];
    let end = strs[strs.length-1];
    let res="";
    for(let i=0;i<Math.min(first.length,end.length);i++){
        if(first[i]!==end[i])break;
        res+=first[i]
    }
    return res;
};
```