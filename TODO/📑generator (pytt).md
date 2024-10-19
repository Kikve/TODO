---
nombre_nota: "generator"
alias: generator
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "4029ca"
parent_hash: "aea5a"
---

#nota/📑

# 📑generator
<div class="hash">(4029ca)</div>

simple and powerful tool for creating [[📑iterator (pytt)|iterator]]. They are written like regular functions but use the __yield__ 

Each time __next()__ is called he generator resumes where it left off (it remembers all the data values and which statement was last executed)

```python
def reverse(data):
    for index in range(len(data)-1, -1, -1):
        yield data[index]
```

```python
for char in reverse('golf'):

    print(char)

f
l
o
g
```
- [ ] recordar  [start:: 2024-10-18]
