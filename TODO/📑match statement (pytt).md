---
tags: 
aliases:
  - match statement
tipo: 📑
referencia: "[[🏛️python tutorial (dcb4c)]]"
tema:
  - python
---

#nota/📑

# Match

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