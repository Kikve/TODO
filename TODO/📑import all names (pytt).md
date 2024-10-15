---
nombre_nota: "import all names"
alias: import all names
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "812962"
parent_hash: "aea5a"
---

#nota/📑

# 📑import all names
<div class="hash">(812962)</div>

[[📑module (pytt)|module]]
> [!important] 
> poorly readable code
>
>```python
from fibo import *
>
>fib(500)
0 1 1 2 3 5 8 13 21 34 55 89 144 233 377
>```

[[📑packages (pytt)|package]]


if a [[📑packages (pytt)|package]]’s `__init__.py` code defines a [[📑list (pytt)|list]] __named__ __`__all__`__, it is taken to be the [[📑list (pytt)|list]] of [[📑module (pytt)|module]] names that should be imported when `from package import *`

```python
from sound.effects import *
```

`sound/effects/__init__.py`
```python
__all__ = [
    "echo",      # refers to the 'echo.py' file
    "surround",  # refers to the 'surround.py' file
    "reverse",   # !!! refers to the 'reverse' function now !!!
]
```


> [!NOTE] 
If `__all__` __is not defined__ it only ensures that the [[📑packages (pytt)|package]]`sound.effects` has been imported
- [ ] recordar  [start:: 2024-10-15]
