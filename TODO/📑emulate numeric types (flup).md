---
nombre_nota: "emulate numeric types"
alias: emulate numeric types
letras: "flup"
referencias: "[[TODO/🏛️fluent python (9ba54).md]]"
tipo_nota: "📑"
hash: "3500eb"
parent_hash: "9ba54"
---

#nota/📑

# 📑emulate numeric types
<div class="hash">(3500eb)</div>


Several [[📑special method (flup)|special methods]] allow user objects to respond to operators such as +
[[📑__str__ (flup)|__str__]]
[[📑__repr__ (flup)|__repr__]]
[[📑__bool__ (flup)|__bool__]]

```python
import math
class Vector:
    def __init__(self, x=0, y=0):
        self.x = x
        self.y = y
    def __repr__(self):
        return f'Vector({self.x!r}, {self.y!r})'
    def __abs__(self):
        return math.hypot(self.x, self.y)
    def __bool__(self):
        return bool(abs(self))
    def __add__(self, other):
        x = self.x + other.x
        y = self.y + other.y
        return Vector(x, y)
    def __mul__(self, scalar):
        return Vector(self.x * scalar, self.y * scalar)
```

- [ ] recordar  [start:: 2024-10-21]
