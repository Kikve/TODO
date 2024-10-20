---
nombre_nota: "tag functions"
alias: tag functions
letras: "jdg"
referencias: "[[TODO/🏛️javascript definitive guide (56db7).md]]"
tipo_nota: "📑"
hash: "713fb4"
parent_hash: "56db7"
---

#nota/📑

# 📑tag functions
<div class="hash">(713fb4)</div>


 if a __function__ name (or “tag”) comes right before the opening backtick, then the text and the [[📑value (jdg)|values]] of the expressions within the [[📑template literal (jdg)|template literal]] are passed

```javascript
`\n`.length
 // => 1: the string has a single newline character
String.raw`\n`.length
 // => 2: a backslash character and the letter n
```


- [ ] recordar  [start:: 2024-10-20]
