---
tags: 
aliases:
  - capturing sub-patterns
  - as pattern
tipo: 📑
referencia: "[[🏛️Structural Pattern Patching Tutorial (3357e)|Structural Pattern Matching Tutorial]]"
tema:
  - python
  - match
---

#nota/📑


. What we need is a pattern that behaves like the or pattern but at the same time does a capture. We can do so with an **as pattern**:

```python
match command.split():
    case ["go", ("north" | "south" | "east" | "west") as direction]:
        current_room = current_room.neighbor(direction)
```


- [x] aprender  [start:: 2024-10-12]  [completion:: 2024-10-12]







