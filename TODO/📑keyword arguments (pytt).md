---
tags: 
aliases:
  - keyword arguments
tipo: 📑
referencia: "[[🏛️python tutorial (dcb4c)]]"
tema:
  - python
---

#nota/📑

# keyword arguments


[[📑functions (pytt)|functions]] can also be called using   [[📑keyword arguments (pytt)|keyword arguments]] of the form `kwarg=value`. 

```python
def parrot(voltage, state='a stiff', action='voom', type='Norwegian Blue'):
    print("-- This parrot wouldn't", action, end=' ')
    print("if you put", voltage, "volts through it.")
    print("-- Lovely plumage, the", type)
    print("-- It's", state, "!")
```

In a [[📑functions (pytt)|function]] call, __keyword arguments__ must follow __positional arguments__


> [!error] 
>```python
parrot()                     # required argument missing
parrot(voltage=5.0, 'dead')  # non-keyword argument after a keyword argument
parrot(110, voltage=220)     # duplicate value for the same argument
parrot(actor='John Cleese')  # unknown keyword argument
>```

- [x] recordar  [start:: 2024-10-12]  [completion:: 2024-10-12]