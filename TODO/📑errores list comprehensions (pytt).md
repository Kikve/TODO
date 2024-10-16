---
nombre_nota: "errores list comprehensions"
alias: errores list comprehensions
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "20fcee"
parent_hash: "aea5a"
---

#nota/📑

# 📑errores list comprehensions
<div class="hash">(20fcee)</div>

##  Errors
```python
# the tuple must be parenthesized, otherwise an error is raised
[x, x**2 for x in range(6)]
  File "<stdin>", line 1
    [x, x**2 for x in range(6)]
     ^^^^^^^
SyntaxError: did you forget parentheses around the comprehension target?

```

- [ ] recordar  [start:: 2024-10-15]
