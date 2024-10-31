---
nombre_nota: "grab excess items"
alias: grab excess items
letras: "flup"
referencias: "[[TODO/🏛️fluent python (9ba54).md]]"
tipo_nota: "📑"
hash: "15321b"
parent_hash: "9ba54"
---

#nota/📑

# 📑grab excess items
<div class="hash">(15321b)</div>

Defining function parameters with \*args to grab arbitrary excess arguments i


```python
a, b, *rest = range(5)
a, b, rest
(0, 1, [2, 3, 4])
a, b, *rest = range(3)
a, b, rest
(0, 1, [2])
a, b, *rest = range(2)
a, b, rest
(0, 1, [])
```

```python
def fun(a, b, c, d, *rest):
    return a, b, c, d, rest

fun(*[1, 2], 3, *range(4, 7))

(1, 2, 3, 4, (5, 6))
```
- [ ] recordar  [start:: 2024-10-25]
