---
nombre_nota: "loop over more sequences"
alias: loop over more sequences
aliases:
  - ex loop more sequences 2+
  - loop more sequences at the same time
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "76f331"
parent_hash: "aea5a"
---

#nota/📑

# 📑loop over more sequences
<div class="hash">(76f331)</div>



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


- [ ] recordar  [start:: 2024-10-15]