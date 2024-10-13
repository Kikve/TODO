---
tags: 
aliases:
  - add module name
  - add module to the current namespace
tipo: 📑
referencia: "[[🏛️python tutorial (dcb4c)]]"
tema:
  - python
---

#nota/📑

# add module name 

- [ ] recordar  [start:: 2024-10-11]


This does not add the __names__ of the functions defined in `fibo` directly to the current  __namespace__  only adds the __module name__`fibo` there

```python
import fibo
```



```python
fibo.fib(1000)
0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987

fibo.fib2(100)
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

```