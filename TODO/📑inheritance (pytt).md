---
nombre_nota: "inheritance"
alias: inheritance
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "3265d2"
parent_hash: "aea5a"
---

#nota/📑

# 📑inheritance
<div class="hash">(3265d2)</div>
```python
class DerivedClassName(modname.BaseClassName):
```

```python
class DerivedClassName(BaseClassName):
    <statement-1>
    .
    .
    .
    <statement-N>
```

__isinstance()__
to check an instance’s type: `isinstance(obj, int)` will be `True` only if `obj.__class__` is __int__ or some class derived from __int__

__issubclass()__ 
to check class inheritance: `issubclass(bool, int)` is `True` since  "bool") is a __bool__ subclass of __int__  


[[📑multiple inheritance (pytt)|multiple inheritance]]

- [ ] recordar  [start:: 2024-10-17]
