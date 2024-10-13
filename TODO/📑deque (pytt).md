---
tags: 
aliases:
  - deque
  - collections.deque
  - queue
tipo: 📑
referencia: "[[🏛️python tutorial (dcb4c)]]"
tema:
  - python
---

#nota/📑



designed to have fast appends and pops from both end   __collections.deque__


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

