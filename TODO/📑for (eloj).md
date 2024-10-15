---
nombre_nota: "for"
alias: for
letras: "eloj"
referencias: "[[TODO/🏛️eloquent javascript (b1018).md]]"
tipo_nota: "📑"
hash: "7e084d"
parent_hash: "a922b"
---

#nota/📑

# 📑for
<div class="hash">(7e084d)</div>

The parentheses after a for keyword must contain two semicolons. 
- The part before the __first__ semicolon initializes the loop, usually by defining a binding.
- The __second__ part is the expression that checks whether the loop must continue.
- The __final part__ updates the state of the loop after every iteration.

```javascript
let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
result = result * 2;
}
console.log(result);
// → 1024
```




- [ ] recordar  [start:: 2024-10-15]
