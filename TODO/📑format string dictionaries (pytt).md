---
nombre_nota: format string dictionaries
aliases:
  - format string dictionaries
  - uses for dictionary
letras: pytt
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: 📑
hash: "394102"
parent_hash: aea5a
---

#nota/📑

# 📑format string dictionaries
<div class="hash">(394102)</div>


```python
table = {'Sjoerd': 4127, 'Jack': 4098, 'Dcab': 8637678}

print('Jack: {0[Jack]:d}; Sjoerd: {0[Sjoerd]:d}; '

      'Dcab: {0[Dcab]:d}'.format(table))
Jack: 4098; Sjoerd: 4127; Dcab: 8637678

```

```python
table = {'Sjoerd': 4127, 'Jack': 4098, 'Dcab': 8637678}

print('Jack: {Jack:d}; Sjoerd: {Sjoerd:d}; Dcab: {Dcab:d}'.format(**table))
Jack: 4098; Sjoerd: 4127; Dcab: 8637678
```
- [ ] recordar  [start:: 2024-10-16]
