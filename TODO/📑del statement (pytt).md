---
nombre_nota: "del statement"
alias: del statement
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "211d09"
parent_hash: "aea5a"
---

#nota/📑

# 📑del statement
<div class="hash">(211d09)</div>



This differs from the  [[📑list pop (pytt)|pop]]method which returns a value. The  __del statement__ can also be used to remove slices from a list or clear the entire list

```python
a = [-1, 1, 66.25, 333, 333, 1234.5]
del a[0]
a
[1, 66.25, 333, 333, 1234.5]

del a[2:4]
a
[1, 66.25, 1234.5]

del a[:]
a
[]
```


 ##   Entire variables 
 
```python
del a
```




- [ ] recordar  [start:: 2024-10-15]