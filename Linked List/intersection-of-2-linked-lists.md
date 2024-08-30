## Intersection of 2 Linked Lists

[Question Link](https://leetcode.com/problems/intersection-of-two-linked-lists/description/)

**Solution**:

```javascript
var getIntersectionNode = function(headA, headB) {
    let a = headA;
    let b = headB;
    while(a!==b){
        a = a===null ? headB : a.next;
        b = b === null ? headA : b.next;
    }
    return a;
};
```