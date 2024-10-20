## Missing Element of an A.P

Question can be found [here](https://www.geeksforgeeks.org/problems/missing-element-of-ap2228/1)

**Solution**:

```js
class Solution {

  findMissing(arr) {

    let n = arr.length;

    let d = (arr[n - 1] - arr[0]) / n;

    let left = 0;

    let right = n - 1;

    while (left <= right) {

      let mid = Math.floor((left + right) / 2);

      if (mid > 0 && arr[mid] - arr[mid - 1] !== d) {

        return arr[mid - 1] + d;

      }

      if (mid < n - 1 && arr[mid + 1] - arr[mid] !== d) {

        return arr[mid] + d;

      }

      if (arr[mid] === arr[0] + mid * d) {

        left = mid + 1;

      } else {

        right = mid - 1;

      }

    }

    return -1;

  }

}
```

