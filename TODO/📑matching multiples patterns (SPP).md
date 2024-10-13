---
tags: 
aliases:
  - matching multiples patterns
tipo: 📑
referencia: "[[🏛️Structural Pattern Patching Tutorial (3357e)|Structural Pattern Matching Tutorial]]"
tema:
  - python
  - match
---

#nota/📑
# multiple patterns

Even if most commands have the action/object form, you might want to have user commands of different lengths

```python
match command.split():
    case [action]:
        ... # interpret single-verb action
    case [action, obj]:
        ... # interpret action, obj
```


- [x] recordar  [start:: 2024-10-12]  [completion:: 2024-10-12]