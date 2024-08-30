## Length Of Last Word

[Question Link](https://leetcode.com/problems/length-of-last-word/description/)

**Solution**:

```javascript
var lengthOfLastWord = function(s) {
    let [i,length] = [s.length-1,0];

    while(s[i]===" "){
        i--;
    }
    while(i>=0 && s[i]!==" "){
        i--;
        length++;
    }
    return length;
};
```