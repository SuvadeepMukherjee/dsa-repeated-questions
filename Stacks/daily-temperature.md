## Daily Temperature

[Question Link](https://leetcode.com/problems/daily-temperatures/description/)

**Solution**:

```javascript
var dailyTemperatures = function(temperatures) {
    let stack =[];
    let res = new Array(temperatures.length).fill(0);

    for(let i=0;i<temperatures.length;i++){
        let t = temperatures[i];
        while(stack.length && t> stack[stack.length-1][1]){
            const [stackIndex,stackTemperature]= stack.pop();
            res[stackIndex] = i - stackIndex;
        }
        stack.push([i,t])
    }
    return res;
};
```