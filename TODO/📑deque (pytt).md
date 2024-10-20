---
nombre_nota: "deque"
aliases:
  - deque
  - collections.deque
  - queue
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "200062"
parent_hash: "aea5a"
---

#nota/📑

# 📑deque
<div class="hash">(200062)</div>

designed to have fast appends and pops from both end   __collections.deque__
[[📑list (pytt)|list]]

```python
from collections import deque

queue = deque(["Eric", "John", "Michael"])
queue.append("Terry")           # Terry arrives
queue.append("Graham")          # Graham arrives
queue.popleft()                 # The first to arrive now leaves
'Eric'
queue.popleft()                 # The second to arrive now leaves
'John'
queue                           # Remaining queue in order of arrival
deque(['Michael', 'Terry', 'Graham'])
```

- [x] recordar  [start:: 2024-10-15]  [completion:: 2024-10-19]
