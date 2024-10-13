---
tags: 
aliases:
  - matching positional attributes
tipo: 📑
referencia: "[[🏛️Structural Pattern Patching Tutorial (3357e)|Structural Pattern Matching Tutorial]]"
tema:
  - python
  - match
---

#nota/📑

# match positional attributes


For some objects it could be convenient to describe the matched arguments by position


f the classes that you are using are named tuples or dataclasses, you can do that by following the same order that you’d use when constructing an object.

```python
from dataclasses import dataclass

@dataclass
class Click:
    position: tuple
    button: Button
```

match with 

```python
match event.get():
    case Click((x, y)):
        handle_click_at(x, y)
```

Other classes don’t have a natural ordering of their attributes so you’re required to use explicit names in your pattern to match with their attributes

specify of order of atributtes 

```python
 class Click:
    __match_args__ = ("position", "button")
    def __init__(self, pos, btn):
        self.position = pos
        self.button = btn
        ...
```


- [ ] recordar  [start:: 2024-10-12]