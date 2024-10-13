---
tags: 
aliases:
  - del statement
tipo: 📑
referencia: "[[🏛️python tutorial (dcb4c)]]"
tema:
  - python
---

#nota/📑


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
