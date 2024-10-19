---
nombre_nota: "tuples"
alias: tuples
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "212ab7"
parent_hash: "aea5a"
---

#nota/📑

# 📑tuples
<div class="hash">(212ab7)</div>

[[🔌sequence data types]]


> [!NOTE] 
> - __Tuples__ are immutable
>-  But they can contain mutable objects:
>-  often parentheses are necessary
>- usually contain a heterogeneous sequence of elements that are accessed via unpacking
>- elements are accesed 
    >- _unpacking_  
    >- _index_
>

[[📑tuples one element (pytt)|tuples one element]]
[[📑tuple packing unpacking (pytt)|tuple packing unpacking]]


```python
t = 12345, 54321, 'hello!'

t[0]
12345
t
(12345, 54321, 'hello!')

# Tuples may be nested:
u = t, (1, 2, 3, 4, 5)
u
((12345, 54321, 'hello!'), (1, 2, 3, 4, 5))

# Tuples are immutable:
t[0] = 88888
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment

# but they can contain mutable objects:
v = ([1, 2, 3], [3, 2, 1])
v
([1, 2, 3], [3, 2, 1])
```

```python
x, y, z = t
```


- [x] recordar  [start:: 2024-10-15]  [completion:: 2024-10-19]