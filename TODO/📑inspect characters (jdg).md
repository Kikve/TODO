---
nombre_nota: "inspect characters"
alias: inspect characters
letras: "jdg"
referencias: "[[TODO/🏛️javascript definitive guide (56db7).md]]"
tipo_nota: "📑"
hash: "58ced0"
parent_hash: "56db7"
---

#nota/📑

# 📑inspect characters
<div class="hash">(58ced0)</div>

```javascript
// Inspecting individual (16-bit) characters of a string
s.charAt(0)
 // => "H": the first character
s.charAt(s.length-1)
 // => "d": the last character
s.charCodeAt(0)
 // => 72: 16-bit number at the specified position
s.codePointAt(0)
 // => 72: ES6, works for codepoints > 16 bits
```


- [ ] recordar  [start:: 2024-10-20]
