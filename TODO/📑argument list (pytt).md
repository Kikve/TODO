---
tags: 
aliases:
  - argument list
tipo: 📑
referencia: "[[🏛️python tutorial (dcb4c)]]"
tema:
  - python
---

#nota/📑


# argument list

specify that a [[📑functions (pytt)|function]] can be called with an arbitrary number of __arguments__.



```python
def write_multiple_items(file, separator, *args):
    file.write(separator.join(args))
```

- [ ] recordar  [start:: 2024-10-12]