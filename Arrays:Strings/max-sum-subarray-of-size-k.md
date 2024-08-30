## Max Sum Subarray of size k 

[Question Link](https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1)

**Solution**:

```js
//User function Template for javascript

/**
 * @param {number} K
 * @param {number[]} Arr
 * @param {number} N
 * @return {number}
 */
class Solution {
  maximumSumSubarray(K, Arr, N) {
    //code here
    let sum =0;
    let max =0;
    for(let i = 0;i<K;i++){
        sum += Arr[i];
    }
    max = Math.max(sum,0);
    
    let l =K;
    
    for(let i=K;i<Arr.length;i++){
        sum -= Arr[i-K];
        sum+= Arr[i];
        max = Math.max(max,sum);
        
        
        
        
    }
    return max;
  }
  
}
```