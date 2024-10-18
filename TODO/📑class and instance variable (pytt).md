---
nombre_nota: "class and instance variable"
alias: class and instance variable
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "30817b"
parent_hash: "aea5a"
---

#nota/📑

# 📑class and instance variable
<div class="hash">(30817b)</div>



```python
    kind = 'canine'         # class variable shared by all instances

    def __init__(self, name):
        self.name = name    # instance variable unique to each instance

>>> d = Dog('Fido')
>>> e = Dog('Buddy')
>>> d.kind                  # shared by all dogs
'canine'
>>> e.kind                  # shared by all dogs
'canine'
>>> d.name                  # unique to d
'Fido'
>>> e.name                  # unique to e
'Buddy'
```
- [ ] recordar  [start:: 2024-10-17]
