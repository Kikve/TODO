---
tags: 
aliases:
  - adding conditions
tipo: 📑
referencia: "[[🏛️Structural Pattern Patching Tutorial (3357e)|Structural Pattern Matching Tutorial]]"
tema:
  - python
  - match
---

#nota/📑


 Sometimes you may wish for the full power of a boolean expression.
 
We can achieve that by adding a **guard** to our case. Guards consist of the `if` keyword followed by any expression:


```python
 match command.split():
    case ["go", direction] if direction in current_room.exits:
        current_room = current_room.neighbor(direction)
    case ["go", _]:
        print("Sorry, you can't go that way")
```


The guard is not part of the pattern, it’s part of the case. It’s only checked if the pattern matches

- [x] recordar  [start:: 2024-10-12]  [completion:: 2024-10-12]