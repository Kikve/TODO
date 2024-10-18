---
nombre_nota: raise exception
aliases:
  - raise exception
  - raise
letras: pytt
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: 📑
hash: "30998"
parent_hash: aea5a
---

#nota/📑

# 📑raise exception
<div class="hash">(30998)</div>
The [[📑raise exception (pytt)|raise]] __statement__ allows the programmer to force a specified exception to occur.

the sole argument to [[📑raise exception (pytt)|raise]] indicates the exception to be __raised__. This must be either an __exception instance__ or an [[📑exception classes (pytt)|exception class]] (a class that derives from __BaseException__ such as  [[📑exception (pytt)|exception]] or one of its subclasses). If an [[📑exception classes (pytt)|exception class]] is passed, it will be implicitly instantiated by calling its constructor with no arguments


```python
raise NameError('HiThere')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
    raise NameError('HiThere')
NameError: HiThere
```

```python
raise ValueError  # shorthand for 'raise ValueError()'
```

- [ ] recordar  [start:: 2024-10-17]
