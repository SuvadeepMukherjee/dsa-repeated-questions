## Reverse a string

[Question Link](https://leetcode.com/problems/reverse-string/description/)

**Solution**:

```js
var reverseString = function(s) {

    let left =0;

    let right = s.length-1;

    while(left<right){

        let tmp = s[left];

        s[left] = s[right];

        s[right]=tmp;

        left++;

        right--

    }

};
```

