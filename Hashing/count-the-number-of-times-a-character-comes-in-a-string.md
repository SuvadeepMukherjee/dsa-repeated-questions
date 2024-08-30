##  Count the number of times a character comes in a string 

```js
let s = "sharpener";

let map = new Map();

for (let i = 0; i < s.length; i++) {

  const count = (map.get(s[i]) || 0) + 1;

  map.set(s[i], count);

}

console.log(map);
```

