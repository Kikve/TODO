---
nombre_nota: destructuring assignment
aliases:
  - destructuring assignment
  - destructuring
  - destructure
letras: jdg
referencias: "[[TODO/🏛️javascript definitive guide (56db7).md]]"
tipo_nota: 📑
hash: 8669f6
parent_hash: 56db7
---

#nota/📑

# 📑destructuring assignment
<div class="hash">(8669f6)</div>

 In a [[📑destructuring assignment (jdg)|destructuring assignment]], the __value__ on the righthand side of the equals sign is an array or object (a “structured” value), and the lefthand side specifies __one or more variable names__[[📑identifiers (plr)|identifiers]] using a syntax that mimics array and object literal syntax

```javascript
let [x,y] = [1,2];
 // Same as let x=1, y=2
[x,y] = [x+1,y+1];
 // Same as x = x + 1, y = y + 1
[x,y] = [y,x];
 // Swap the value of the two variables
[x,y]
 // => [3,2]: the incremented and swapped values
```

[[📑destructure for (jdg)|destructure for]]
[[📑destructure collect extra values (jdg)|destructure collect extra values]]
[[📑destructure nested array (jdg)|destructure nested array]]
[[📑destructure objects (jdg)|destructure objects]]


[[📑destructure nested objects (jdg)|destructure nested objects]]
- [ ] recordar  [start:: 2024-10-28]
