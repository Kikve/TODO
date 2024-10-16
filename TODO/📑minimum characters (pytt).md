---
nombre_nota: "minimum characters"
alias: minimum characters
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "6c877d"
parent_hash: "aea5a"
---

#nota/📑

# 📑minimum characters
<div class="hash">(6c877d)</div>

Passing an __integer__ after the `':'` will cause that field to be a __minimum number of characters__ wide
```python
table = {'Sjoerd': 4127, 'Jack': 4098, 'Dcab': 7678}

for name, phone in table.items():

    print(f'{name:10} ==> {phone:10d}')

Sjoerd     ==>       4127
Jack       ==>       4098
Dcab       ==>       7678
```

## __round__ decimal

```python
import math

print(f'The value of pi is approximately {math.pi:.3f}.')
The value of pi is approximately 3.142.
```
- [ ] recordar  [start:: 2024-10-15]
