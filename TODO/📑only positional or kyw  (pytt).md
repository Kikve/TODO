---
nombre_nota: "only positional or kyw"
aliases:
  - positional only
  - only pos or kw
  - only positional or keyword parameters
  - only positional or only keywords
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "9087cb"
parent_hash: "aea5a"
---

#nota/📑

# 📑only positional or kyw
<div class="hash">(9087cb)</div>

The `/` is used in a  [[📑functions (pytt)|function]] to logically separate the __positional-only parameters__ from the rest of the __parameters__.

Parameters following the `/` may be _positional-or-keyword_ or _keyword-only_.

```python
def standard_arg(arg):
    print(arg)

def pos_only_arg(arg, /):
    print(arg)

def kwd_only_arg(*, arg):
    print(arg)

def combined_example(pos_only, /, standard, *, kwd_only):
    print(pos_only, standard, kwd_only)
```



- [x] recordar  [start:: 2024-10-12]  [completion:: 2024-10-12]