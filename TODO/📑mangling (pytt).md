---
nombre_nota: "mangling"
alias: mangling
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "265cda"
parent_hash: "aea5a"
---

#nota/📑

# 📑mangling
<div class="hash">(265cda)</div>

Any __identifier__ of the form __`__spam`__ (at least two leading underscores, at most one trailing underscore) is textually replaced with __`_classname__spam`__, where __`classname`__ is the current [[📑class (pytt)|class]] name with leading underscore(s) stripped

```python
class Mapping:
    def __init__(self, iterable):
        self.items_list = []
        self.__update(iterable)

    def update(self, iterable):
        for item in iterable:
            self.items_list.append(item)

    __update = update   # private copy of original update() method

class MappingSubclass(Mapping):

    def update(self, keys, values):
        # provides new signature for update()
        # but does not break __init__()
        for item in zip(keys, values):
            self.items_list.append(item)
```

- [ ] recordar  [start:: 2024-10-18]
