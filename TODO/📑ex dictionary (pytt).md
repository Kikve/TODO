---
tags: 
aliases:
  - ex dictionary
  - dictionary examples
tipo: 📑
referencia: "[[🏛️python tutorial (dcb4c)]]"
tema:
  - python
---

#nota/📑


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

- [ ] recordar  [start:: 2024-10-13]
