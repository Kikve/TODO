---
nombre_nota: "optional arguments"
alias: optional arguments
letras: "eloj"
referencias: "[[TODO/🏛️eloquent javascript (b1018).md]]"
tipo_nota: "📑"
hash: "3e6f9"
parent_hash: "a922b"
---

#nota/📑

# 📑optional arguments
<div class="hash">(3e6f9)</div>



when we call it with three, the language doesn’t complain. It __ignores the extra arguments__ 
 If you pass too few, the missing __parameters__ get assigned the value [[📑undefined (eloj)|undefined]].

```javascript
function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}
console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5
```



```javascript
function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
```



- [ ] recordar  [start:: 2024-10-15]
