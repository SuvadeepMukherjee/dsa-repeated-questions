## Palindrome Number

[Question Link](https://leetcode.com/problems/palindrome-number/description/)

**Solution**:

```javascript
var isPalindrome = function(x) {
    if(x<0) return false; 

    let original =x ;
    let reversed = 0;
    while(original>0){
        let digits = original % 10;
        reversed = reversed * 10 + digits;
        original = Math.floor(original/10);
    }

    return reversed === x;
};
```