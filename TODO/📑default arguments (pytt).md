---
nombre_nota: "default arguments"
aliases:
  - default arguments
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "8a13b1"
parent_hash: "aea5a"
---

#nota/📑

# 📑default arguments
<div class="hash">(8a13b1)</div>

```python
def ask_ok(prompt, retries=4, reminder='Please try again!'):
    while True:
        reply = input(prompt)
        if reply in {'y', 'ye', 'yes'}:
            return True
        if reply in {'n', 'no', 'nop', 'nope'}:
            return False
        retries = retries - 1
        if retries < 0:
            raise ValueError('invalid user response')
        print(reminder)

```


- [x] recordar  [start:: 2024-10-12]  [completion:: 2024-10-12]