---
tags: 
aliases:
  - errores list comprehensions
tipo: 📑
referencia: "[[🏛️python tutorial (dcb4c)|python tutorial]]"
tema:
  - python
---

#nota/📑


##  Errors
```python
# the tuple must be parenthesized, otherwise an error is raised
[x, x**2 for x in range(6)]
  File "<stdin>", line 1
    [x, x**2 for x in range(6)]
     ^^^^^^^
SyntaxError: did you forget parentheses around the comprehension target?

```

