---
tags: 
aliases:
  - functions annotations
tipo: 📑
referencia: "[[🏛️python tutorial (dcb4c)]]"
tema:
  - python
---

#nota/📑


# function annotations



> [!definition] 
optional __metadata information__ about the __types__ used by user-defined [[📑functions (pytt)|functions]]



[[📑functions annotations (pytt)|functions annotations]] are stored in the `__annotations__` __attribute__ of the [[📑functions (pytt)|function]] as a [[📑dictionaries (pytt)|dictionary]]   

[[📑functions annotations (pytt)|functions annotations]] _have no effect_ on any other part of the  [[📑functions (pytt)|function]]. 


__Parameter annotations__ are _defined by a colon_ after the parameter name, followed by an __expression__ evaluating to the value of the annotation

```python
def f(ham: str, eggs: str = 'eggs') -> str:
    print("Annotations:", f.__annotations__)
    print("Arguments:", ham, eggs)
    return ham + ' and ' + eggs

f('spam')
```

- [ ] recordar  [start:: 2024-10-12]