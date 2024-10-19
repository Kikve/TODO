---
nombre_nota: "arithmetic in JS"
alias: arithmetic in JS
letras: "jdg"
referencias: "[[TODO/🏛️javascript definitive guide (56db7).md]]"
tipo_nota: "📑"
hash: "752e94"
parent_hash: "56db7"
---

#nota/📑

# 📑arithmetic in JS
<div class="hash">(752e94)</div>

Arithmetic in JavaScript does not raise errors in cases of __overflow__, __underflow__, or __division__ by zero

When the result of a numeric operation is larger than the largest representable [[📑number (jdg)|number]]
`Infinity` `-Infinity`


__Division by zero__ is not an error in JavaScript: it simply returns infinity or negative infinity.

__NaN__ operations that cannot be converted to numbers

```javascript
Number.MAX_VALUE
Number.isNaN()
//  true if its argument is a number other than NaN, Infinity, or -Infinity
Number.isFinite() 
```

[[📑errores float number (jdg)|errores float number]]
- [ ] recordar  [start:: 2024-10-18]
