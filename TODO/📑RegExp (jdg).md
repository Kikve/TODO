---
nombre_nota: RegExp
aliases:
  - RegExp
  - regular expression
letras: jdg
referencias: "[[TODO/🏛️javascript definitive guide (56db7).md]]"
tipo_nota: 📑
hash: 66fae8
parent_hash: 56db7
---

#nota/📑

# 📑RegExp
<div class="hash">(66fae8)</div>

[[📑RegExp (jdg)|regular expression]] (or RegExp) for describing and matching patterns in [[📑string (jdg)|strings]] of text




```javascript
let text = "testing: 1, 2, 3";
let pattern = /\d+/g;
pattern.test(text)
text.search(pattern)
text.match(pattern)
text.replace(pattern, "#")
text.split(/\D+/)
// Sample text
// Matches all instances of one or more digits
// => true: a match exists
// => 9: position of first match
// => ["1", "2", "3"]: array of all matches
// => "testing: #, #, #"
// => ["","1","2","3"]: split on nondigits
```

- [ ] recordar  [start:: 2024-10-17]
