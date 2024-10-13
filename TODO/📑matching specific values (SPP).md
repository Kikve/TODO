---
tags: 
aliases:
  - matching specific values
tipo: 📑
referencia: "[[🏛️Structural Pattern Patching Tutorial (3357e)|Structural Pattern Matching Tutorial]]"
tema:
  - python
  - match
---

#nota/📑

Your code still needs to look at the specific actions and conditionally execute different logic depending on the specific action

```python
match command.split():
    case ["quit"]:
        print("Goodbye!")
        quit_game()
    case ["look"]:
        current_room.describe()
    case ["get", obj]:
        character.get(obj, current_room)
    case ["go", direction]:
        current_room = current_room.neighbor(direction)
    # The rest of your commands go here
```

- [x] recordar  [start:: 2024-10-12]  [completion:: 2024-10-12]