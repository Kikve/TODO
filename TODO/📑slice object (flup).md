---
nombre_nota: "slice object"
alias: slice object
letras: "flup"
referencias: "[[TODO/🏛️fluent python (9ba54).md]]"
tipo_nota: "📑"
hash: "2d91f1"
parent_hash: "9ba54"
---

#nota/📑

# 📑slice object
<div class="hash">(2d91f1)</div>


s[a:b:c] can be used to specify a stride or step c, causing the resulting slice to skip items.

The notation a:b:c is only valid within [] when used as the indexing or subscript
operator, and it produces a slice object: slice(a, b, c) 

to evaluate the expression seq[start:stop:step], Python calls seq.[[📑getitem (flup)|__getitem__]](slice(start, stop, step)) 




- [ ] recordar  [start:: 2024-10-25]
