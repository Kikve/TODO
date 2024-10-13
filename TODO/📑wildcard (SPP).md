---
tags: 
aliases:
  - wildcard
tipo: 📑
referencia: "[[🏛️Structural Pattern Patching Tutorial (3357e)|Structural Pattern Matching Tutorial]]"
tema:
  - python
  - match
---

#nota/📑


This special pattern which is written **\_**  (and called *wildcard*) always matches but it doesn’t bind any variables.

```python
match command.split():
    case ["quit"]: ... # Code omitted for brevity
    case ["go", direction]: ...
    case ["drop", *objects]: ...
    ... # Other cases
    case _:
        print(f"Sorry, I couldn't understand {command!r}")
```

Note that this will match any object, not just sequences. As such, it only makes sense to have it by itself as the last pattern (to prevent errors, Python will stop you from using it before).

- [x] recordar  [start:: 2024-10-12]  [completion:: 2024-10-12]
