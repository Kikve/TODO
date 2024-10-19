---
nombre_nota: "example reverse iterator"
alias: example reverse iterator
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "3ae3b9"
parent_hash: "aea5a"
---

#nota/📑

# 📑example reverse iterator
<div class="hash">(3ae3b9)</div>


```python
class Reverse:
    """Iterator for looping over a sequence backwards."""
    def __init__(self, data):
        self.data = data
        self.index = len(data)

    def __iter__(self):
        return self

    def __next__(self):
        if self.index == 0:
            raise StopIteration
        self.index = self.index - 1
        return self.data[self.index]
```

```python
rev = Reverse('spam')

iter(rev)
<__main__.Reverse object at 0x00A1DB50>

for char in rev:

    print(char)

m
a
p
s
```
- [ ] recordar  [start:: 2024-10-18]
