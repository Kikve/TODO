---
nombre_nota: "destructure collect extra values"
alias: destructure collect extra values
letras: "jdg"
referencias: "[[TODO/🏛️javascript definitive guide (56db7).md]]"
tipo_nota: "📑"
hash: "1777e5"
parent_hash: "56db7"
---

#nota/📑

# 📑destructure collect extra values
<div class="hash">(1777e5)</div>

[[📑destructuring assignment (jdg)|destructure]] collect extra values

```javascript
let [x, ...y] = [1,2,3,4]; // y == [2,3,4]
```



You can use any iterable object on the righthand side of the assignment;
```javascript
let [first, ...rest] = "Hello"; // first == "H"; rest == ["e","l","l","o"]
```

- [ ] recordar  [start:: 2024-10-28]
