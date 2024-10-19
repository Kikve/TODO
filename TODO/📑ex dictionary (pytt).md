---
nombre_nota: "ex dictionary"
aliases:
  - ex dictionary
  - dictionary examples
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "500538"
parent_hash: "aea5a"
---

#nota/📑

# 📑ex dictionary
<div class="hash">(500538)</div>

ejemplos de [[📑dictionaries (pytt)|dictionary]]
```python
tel = {'jack': 4098, 'sape': 4139}

tel['guido'] = 4127

tel
{'jack': 4098, 'sape': 4139, 'guido': 4127}

tel['jack']
4098

del tel['sape']

tel['irv'] = 4127

tel
{'jack': 4098, 'guido': 4127, 'irv': 4127}

list(tel)
['jack', 'guido', 'irv']

sorted(tel)
['guido', 'irv', 'jack']

'guido' in tel
True

'jack' not in tel
False


```

- [x] recordar  [start:: 2024-10-13]  [completion:: 2024-10-19]
