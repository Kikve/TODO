---
nombre_nota: "convert numbers to specified digits"
alias: convert numbers to specified digits
letras: "jdg"
referencias: "[[TODO/🏛️javascript definitive guide (56db7).md]]"
tipo_nota: "📑"
hash: "53715c"
parent_hash: "56db7"
---

#nota/📑

# 📑convert numbers to specified digits
<div class="hash">(53715c)</div>


converts a [[📑number (jdg)|number]] to a string with a specified number of digits after the decimal point
```javascript
let n = 123456.789;
n.toFixed(0)
 // => "123457"
n.toFixed(2)
 // => "123456.79"
n.toFixed(5)
 // => "123456.78900"
n.toExponential(1)
 // => "1.2e+5"
n.toExponential(3)
 // => "1.235e+5"
n.toPrecision(4)
 // => "1.235e+5"
n.toPrecision(7)
 // => "123456.8"
n.toPrecision(10)
 // => "123456.7890"
```
- [ ] recordar  [start:: 2024-10-20]
