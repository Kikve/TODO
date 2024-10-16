---
nombre_nota: "match statement"
alias: match statement
aliases:
  - match statement
  - match
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "86e6a5"
parent_hash: "aea5a"
---

#nota/📑

# 📑match statement
<div class="hash">(86e6a5)</div>

A    [[📑match statement (pytt)|match statement]] takes an __expression__ and compares its value to _successive patterns_ given as one or more case block


[[🔌pattern matching]]

```python
def http_error(status):
    match status:
        case 400:
            return "Bad request"
        case 404:
            return "Not found"
        case 418:
            return "I'm a teapot"
        case _:
            return "Something's wrong with the internet"
```


- [ ] recordar  [start:: 2024-10-12]