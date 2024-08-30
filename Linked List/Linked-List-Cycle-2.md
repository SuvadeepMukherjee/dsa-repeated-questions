## Linked List Cycle 2

[Question Link](https://leetcode.com/problems/linked-list-cycle-ii/description/)

**Solution**:

```javascript
var detectCycle = function(head) {
    let [ slow,fast] = [head,head];

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            let entry = head; 
            while(entry !== slow){
                slow=slow.next;
                entry = entry.next;
            }
            return entry;
        }
    }
    return null;
};
```