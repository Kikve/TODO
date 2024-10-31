---
nombre_nota: "number literal to number"
alias: number literal to number
letras: "jdg"
referencias: "[[TODO/🏛️javascript definitive guide (56db7).md]]"
tipo_nota: "📑"
hash: "57cb75"
parent_hash: "56db7"
---

#nota/📑

# 📑number literal to number
<div class="hash">(57cb75)</div>

[[📑numeric literal (jdg)|numeric literal]] to [[📑number (jdg)|number]]
That __function__ only works for base-10 integers and does not allow trailing characters that are not part of the literal

they can, and ignore anything that follows

```javascript
parseInt("3 blind mice")
parseFloat(" 3.14 meters")
parseInt("-12.34")
parseInt("0xFF")
parseInt("0xff")
parseInt("-0XFF")
parseFloat(".1")
parseInt("0.1")
parseInt(".1")
parseFloat("$72.47")
// => 3
// => 3.14
// => -12
// => 255
// => 255
// => -255
// => 0.1
// => 0
// => NaN: integers can't start with "."
// => NaN: numbers can't start with "$"
```
- [ ] recordar  [start:: 2024-10-20]
