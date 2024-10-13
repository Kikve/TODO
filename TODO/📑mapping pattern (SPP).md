---
tags: 
aliases:
  - mapping pattern
tipo: 📑
referencia: "[[🏛️Structural Pattern Patching Tutorial (3357e)|Structural Pattern Matching Tutorial]]"
tema:
  - python
  - match
---

#nota/📑


here are patterns to match mappings based on their present keys. In this case you could use:

```python
for action in actions:
    match action:
        case {"text": message, "color": c}:
            ui.set_text_color(c)
            ui.display(message)
        case {"sleep": duration}:
            ui.wait(duration)
        case {"sound": url, "format": "ogg"}:
            ui.play(url)
        case {"sound": _, "format": _}:
            warning("Unsupported audio format")
```

The keys in your mapping pattern need to be literals, but the values can be any pattern.

You can use `**rest` within a mapping pattern to capture additional keys in the subject



- [x] aprender  [start:: 2024-10-12]  [completion:: 2024-10-12]




