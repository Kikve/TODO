---
nombre_nota: "capture multiple exceptions"
alias: capture multiple exceptions
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "901a98"
parent_hash: "aea5a"
---

#nota/📑

# 📑capture multiple exceptions
<div class="hash">(901a98)</div>

__try__ statement may have more than one _except clause_, to specify handlers for different [[📑exception (pytt)|exceptions]]. At most one handler will be executed.

```python
except (RuntimeError, TypeError, NameError):
...     pass
```
- [ ] recordar  [start:: 2024-10-17]
