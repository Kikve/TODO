---
nombre_nota: "destructure nested objects"
alias: destructure nested objects
letras: "jdg"
referencias: "[[TODO/🏛️javascript definitive guide (56db7).md]]"
tipo_nota: "📑"
hash: "11fcd0"
parent_hash: "56db7"
---

#nota/📑

# 📑destructure nested objects
<div class="hash">(11fcd0)</div>


 nested [[📑object type (jdg)|objects]], or [[📑array (jdg)|array]] of [[📑object type (jdg)|objects]],

```javascript
let points = [{x: 1, y: 2}, {x: 3, y: 4}];
 // An array of two point objects
let [{x: x1, y: y1}, {x: x2, y: y2}] = points; // destructured into 4 variables.
(x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4) // => true
```

 [[📑destructuring assignment (jdg)|destructuring]] an array of objects, we could destructure an object of arrays

```javascript
let points = { p1: [1,2], p2: [3,4] };
 // An object with 2 array props
let { p1: [x1, y1], p2: [x2, y2] } = points;
 // destructured into 4 vars
(x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4) // => true
```
- [ ] recordar  [start:: 2024-10-28]
