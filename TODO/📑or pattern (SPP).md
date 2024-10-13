---
tags: 
aliases:
  - or pattern
tipo: 📑
referencia: "[[🏛️Structural Pattern Patching Tutorial (3357e)|Structural Pattern Matching Tutorial]]"
tema:
  - python
  - match
---

#nota/📑


This is called an [[📑or pattern (SPP)|or pattern]] and will produce the expected result. Patterns are tried from left to right; this may be relevant to know what is bound if more than one alternative matches


```python
match command.split():
    ... # Other cases
    case ["north"] | ["go", "north"]:
        current_room = current_room.neighbor("north")
    case ["get", obj] | ["pick", "up", obj] | ["pick", obj, "up"]:
        ... # Code for picking up the given object
```

- [x] recordar  [start:: 2024-10-12]  [completion:: 2024-10-12]