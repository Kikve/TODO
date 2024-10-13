---
tags: 
aliases:
  - matching sequences
tipo: 📑
referencia: "[[🏛️Structural Pattern Patching Tutorial (3357e)|Structural Pattern Matching Tutorial]]"
tema:
  - python
---

#nota/📑

el input del usuario contiene accion y objeto 
```python

command = input("What are you doing next? ")
```


y se puede usar el patron para especificar la accion
```python
match command.split():
    case [action, obj]:
        ... # interpret action, obj
```
- [x] recordar  [start:: 2024-10-12]  [completion:: 2024-10-12]