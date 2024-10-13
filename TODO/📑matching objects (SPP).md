---
tags: 
aliases:
  - matching objects
tipo: 📑
referencia: "[[🏛️Structural Pattern Patching Tutorial (3357e)|Structural Pattern Matching Tutorial]]"
tema:
  - python
  - match
---

#nota/📑

# matching objects
Rather than writing multiple `isinstance()` checks, you can use patterns to recognize different kinds of objects, and also apply patterns to its attributes:


```python
match event.get():
    case Click(position=(x, y)):
        handle_click_at(x, y)
    case KeyPress(key_name="Q") | Quit():
        game.quit()
    case KeyPress(key_name="up arrow"):
        game.go_north()
    ...
    case KeyPress():
        pass # Ignore other keystrokes
    case other_event:
        raise ValueError(f"Unrecognized event: {other_event}")
```

A pattern like `Click(position=(x, y))` only matches if the type of the event is a subclass of the `Click` class. It will also require that the event has a `position` attribute that matches the `(x, y)`


[[📑matching objects (SPP)|matching objects]]
[[📑matching constants and Enums (SPP)|matching constants and Enums]]

[[📑matching positional attributes (SPP)|matching positional attributes]]
[[📑mapping pattern (SPP)|mapping pattern]]

[[📑match builtin clases (SPP)|match builtin clases]]

- [ ] recordar  [start:: 2024-10-12]