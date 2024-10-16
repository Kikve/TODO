---
nombre_nota: "comparing sequences"
alias: comparing sequences
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "51706d"
parent_hash: "aea5a"
---

#nota/📑

# 📑comparing sequences
<div class="hash">(51706d)</div>




[[🔌sequences types|sequence]]  __objects__ typically may be compared ([[📑comparison operators (pytt)|comparison operators]]) to other __objects__ with the same sequence type. The comparison uses __lexicographical ordering__

- __first the first two items are compared__, and if they differ this determines the outcome of the comparison __if they are equal, the next two items are compared__
- If one [[🔌sequences types|sequence]] is an initial __sub-sequence__ of the other, the shorter sequence is the smaller (lesser) one.


> [!NOTE] 
 __comparing__ objects of different types with `<` or `>` is legal provided that the objects have appropriate __comparison methods__

```python
(1, 2, 3)              < (1, 2, 4)
[1, 2, 3]              < [1, 2, 4]
'ABC' < 'C' < 'Pascal' < 'Python'
(1, 2, 3, 4)           < (1, 2, 4)
(1, 2)                 < (1, 2, -1)
(1, 2, 3)             == (1.0, 2.0, 3.0)
(1, 2, ('aa', 'ab'))   < (1, 2, ('abc', 'a'), 4)
```



- [ ] recordar  [start:: 2024-10-15]