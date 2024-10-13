---
tags: 
aliases:
  - matching multiples values
tipo: 📑
referencia: "[[🏛️Structural Pattern Patching Tutorial (3357e)|Structural Pattern Matching Tutorial]]"
tema:
  - python
  - match
---

#nota/📑

# matching multiples values

Un jugador puede tomar varios objetos al mismo tiempo
se puede especificar en un comando el verbo y  todos los objetos a los que se aplico esa accion 

```python
match command.split():
    case ["drop", *objects]:
        for obj in objects:
            character.drop(obj, current_room)
    # The rest of your commands go here
```

- [x] recordar  [start:: 2024-10-12]  [completion:: 2024-10-12]