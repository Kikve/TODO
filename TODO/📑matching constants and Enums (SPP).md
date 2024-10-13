---
tags: 
aliases:
  - matching constants and Enums
tipo: 📑
referencia: "[[🏛️Structural Pattern Patching Tutorial (3357e)|Structural Pattern Matching Tutorial]]"
tema:
  - python
  - match
---

#nota/📑


You can in fact match against enumeration values like this:

```python
match event.get():
    case Click((x, y), button=Button.LEFT):  # This is a left click
        handle_click_at(x, y)
    case Click():
        pass  # ignore other clicks
```




- [x] aprender  [start:: 2024-10-12]  [completion:: 2024-10-12]