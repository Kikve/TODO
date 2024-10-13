---
tags: 
aliases:
  - un pack argument list
tipo: 📑
referencia: "[[🏛️python tutorial (dcb4c)]]"
tema:
  - python
---

#nota/📑

# unpack argument list

The __arguments__ are already in a [[📑list (pytt)|list]] or [[📑tuples (pytt)|tuples]] but need to be unpacked for a [[📑functions (pytt)|function]] call that is  requiring separate __positional arguments__



```python
list(range(3, 6))            # normal call with separate arguments

args = [3, 6]
list(range(*args))            # call with arguments unpacked from a list
```


```python
def parrot(voltage, state='a stiff', action='voom'):
    print("-- This parrot wouldn't", action, end=' ')
    print("if you put", voltage, "volts through it.", end=' ')
    print("E's", state, "!")

d = {"voltage": "four million", "state": "bleedin' demised", "action": "VOOM"}
parrot(**d)
```



- [ ] recordar  [start:: 2024-10-12]
