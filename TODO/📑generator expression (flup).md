---
nombre_nota: generator expression
aliases:
  - generator expression
  - genexp
letras: flup
referencias: "[[TODO/🏛️fluent python (9ba54).md]]"
tipo_nota: 📑
hash: 9fd75
parent_hash: 9ba54
---

#nota/📑

# 📑generator expression
<div class="hash">(9fd75)</div>


 but a [[📑generator expression (flup)|genexp]] (generator expression) saves memory because it yields items
one by one using the iterator protocol instead of building a whole list just to feed
another constructor.

```python
>>> symbols = '$¢£¥€¤'
>>> tuple(ord(symbol) for symbol in symbols)
(36, 162, 163, 165, 8364, 164)
>>> import array
>>> array.array('I', (ord(symbol) for symbol in symbols))
```

- [ ] recordar  [start:: 2024-10-22]
