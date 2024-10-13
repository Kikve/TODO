---
tags: 
aliases:
  - lamba expressions
  - lambda
  - lambda keyword
  - lambda functions
tipo: 📑
referencia: "[[🏛️python tutorial (dcb4c)]]"
tema:
  - python
---

#nota/📑

# lambda 


anonymous functions can be created with the  [[📑lamba expressions (pytt)|lambda keyword]] 

[[📑lamba expressions (pytt)|lambda functions]]  can be used wherever [[📑functions (pytt)|function]] objects are required. _They are syntactically restricted to a single expression_.


```python
def make_incrementor(n):
    return lambda x: x + n

f = make_incrementor(42)
f(0)

f(1)
```




- [x] recordar  [start:: 2024-10-12]  [completion:: 2024-10-12]


