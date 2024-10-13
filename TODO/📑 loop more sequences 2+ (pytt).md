---
tags: 
aliases:
  - ex loop more sequences 2+
  - loop more sequences at the same time
tipo: 📑
referencia: "[[🏛️python tutorial (dcb4c)]]"
tema:
  - python
---

#nota/📑




> [!example] Loop more sequences  
> To loop over two or more [[📑sequences types (pytt)|sequences]] at the same time, the entries can be paired with the [[📑zip (pytt)|zip]] function.

```python
questions = ['name', 'quest', 'favorite color']

answers = ['lancelot', 'the holy grail', 'blue']

for q, a in zip(questions, answers):

    print('What is your {0}?  It is {1}.'.format(q, a))

What is your name?  It is lancelot.
What is your quest?  It is the holy grail.
What is your favorite color?  It is blue.
```

