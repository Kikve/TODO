---
nombre_nota: "convert value "
alias: convert value 
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "6fcc4a"
parent_hash: "aea5a"
---

#nota/📑

# 📑convert value 
<div class="hash">(6fcc4a)</div>

Other modifiers can be used to convert the value before it is formatted. 

`'!a'` applies __`ascii()`__
`'!s'` applies [[📑str() (pytt)|str()]]
`'!r'` applies [[📑repr() (pytt)|repr()]] 

```python
animals = 'eels'

print(f'My hovercraft is full of {animals}.')
My hovercraft is full of eels.

print(f'My hovercraft is full of {animals!r}.')
My hovercraft is full of 'eels'.
```
- [ ] recordar  [start:: 2024-10-15]
