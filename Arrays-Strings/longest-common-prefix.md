## Longest Common Prefix

[Question Link](https://leetcode.com/problems/longest-common-prefix/description/)

**Solution**:

```javascript
var longestCommonPrefix = function(strs) {
    let pre = strs[0];
    for(let word of strs){
        for(let i=pre.length-1;i>=0;i--){
            if(word[i]!==pre[i]){
                pre = pre.slice(0,i);
            }
        }
    }
    return pre;
};
```