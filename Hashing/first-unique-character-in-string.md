## First Unique character in String

[Question Link](https://leetcode.com/problems/first-unique-character-in-a-string/description/)

**Solution**:

```js
var firstUniqChar = function(s) {

    let map = new Map();

    for(let i=0;i<s.length;i++){

        const count = (map.get(s[i]) || 0)+1;

        map.set(s[i],count);

    }

    for(let i=0;i<s.length;i++){

        const isUnique = map.get(s[i]) ===1;

        if(isUnique) return i;

    }

    return -1;

};
```

