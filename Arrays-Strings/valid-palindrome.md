## Valid Palindrome

[Question Link](https://leetcode.com/problems/valid-palindrome/description/)

```javascript
const isAlphaNumeric = (c)=>{
    const lowerC = c.toLowerCase();
    const isAlpha = lowerC >= "a" && lowerC <="z";
    const isNumeric = lowerC >="0" && lowerC <="9";
    return isAlpha || isNumeric
 }
var isPalindrome = function(s) {
    let l =0;
    let r = s.length -1;
    while(l<r){
        const skipLeft = !isAlphaNumeric(s[l]);
        if(skipLeft){
            l++;
            continue;
        }
        const skipRight = !isAlphaNumeric(s[r]);
        if(skipRight){
            r--;
            continue;
        }

        const endsEqual = s[l].toLowerCase()===s[r].toLowerCase();
        if(!endsEqual) return false;
        l++;
        r--;
    }
    return true;
    
};
```
