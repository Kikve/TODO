---
tags: 
aliases:
  - match builtin clases
tipo: 📑
referencia: "[[🏛️Structural Pattern Patching Tutorial (3357e)|Structural Pattern Matching Tutorial]]"
tema:
  - python
  - match
---

#nota/📑


# match builtin classes 



> [!definition] 
> Ensure that match to the correct __type__ 



Any __class__ is a valid __match target__, and that includes _built-in classes_ like `bool` `str` or `int`. 


> [!example]  info
That allows us to combine the code  with a __class pattern__. 

So instead of writing `{"text": message, "color": c}` we can use `{"text": str() as message, "color": str() as c}` to ensure that `message` and `c` are both __strings__



you can use a positional parameter as a shorthand, writing `str(c)` rather than `str() as c`

```python
for action in actions:
    match action:
        case {"text": str(message), "color": str(c)}:
            ui.set_text_color(c)
            ui.display(message)
        case {"sleep": float(duration)}:
            ui.wait(duration)
        case {"sound": str(url), "format": "ogg"}:
            ui.play(url)
        case {"sound": _, "format": _}:
            warning("Unsupported audio format")
```


- [x] aprender  [start:: 2024-10-12]  [completion:: 2024-10-12]