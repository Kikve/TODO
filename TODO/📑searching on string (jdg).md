---
nombre_nota: "searching on string"
alias: searching on string
letras: "jdg"
referencias: "[[TODO/🏛️javascript definitive guide (56db7).md]]"
tipo_nota: "📑"
hash: "2f8296"
parent_hash: "56db7"
---

#nota/📑

# 📑searching on string
<div class="hash">(2f8296)</div>

```javascript
// Searching a string
s.indexOf("l")
s.indexOf("l", 3)
s.indexOf("zz")
s.lastIndexOf("l")
// => 2: position of first letter l
// => 3: position of first "l" at or after 3
// => -1: s does not include the substring "zz"
// => 10: position of last letter l
// Boolean searching functions in ES6 and later
s.startsWith("Hell")
 // => true: the string starts with these
s.endsWith("!")
 // => false: s does not end with that
s.includes("or")
 // => true: s includes substring "or"

```
- [ ] recordar  [start:: 2024-10-18]
