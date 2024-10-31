---
nombre_nota: "destructure objects"
alias: destructure objects
letras: "jdg"
referencias: "[[TODO/🏛️javascript definitive guide (56db7).md]]"
tipo_nota: "📑"
hash: "19827f"
parent_hash: "56db7"
---

#nota/📑

# 📑destructure objects
<div class="hash">(19827f)</div>



[[📑destructuring assignment (jdg)|destructure]] can also be performed when the righthand side is an object value. In this case, the __lefthand__ side of the assignment looks something like an [[📑object type (jdg)|object]] literal:

```javascript
let transparent = {r: 0.0, g: 0.0, b: 0.0, a: 1.0}; // A RGBA color
let {r, g, b} = transparent; // r == 0.0; g == 0.0; b == 0.0
```

can also be a colon-separated pair of identifiers, where the first is the name of the property whose value is to be assigned and the second is the name of the variable to assign it to:

```javascript
const { cos: cosine, tan: tangent } = Math;

```


- [ ] recordar  [start:: 2024-10-28]
