## Valid Anagram

Question can be found [here](https://leetcode.com/problems/valid-anagram/description/)

**Solution**:

```javascript
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let map = new Map();
    for(let i=0;i<s.length;i++){
        const count = (map.get(s[i]) || 0) + 1;
        map.set(s[i],count);
    }
    for(let i=0;i<t.length;i++){
        const count = map.get(t[i])-1;
        if(count===-1) return false;
        
        map.set(t[i],count);
    }
    for(let [char,freq] of map){
        const isZero = freq === 0;
        if(!isZero) return false;
    }
    return true;
};
```