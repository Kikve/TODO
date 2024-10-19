---
nombre_nota: "nested list comprehensions"
alias: nested list comprehensions
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "20ad87"
parent_hash: "aea5a"
---

#nota/📑

# 📑nested list comprehensions
<div class="hash">(20ad87)</div>


The following list comprehension will transpose rows and columns:

```python
matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
]


[[row[i] for row in matrix] for i in range(4)]
[[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]
```






- [x] recordar  [start:: 2024-10-15]  [completion:: 2024-10-19]