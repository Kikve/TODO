---
nombre_nota: "un pack argument list"
alias: un pack argument list
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "9464ff"
parent_hash: "aea5a"
---

#nota/📑

# 📑un pack argument list
<div class="hash">(9464ff)</div>

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
