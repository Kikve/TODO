---
tags: 
aliases:
  - ex print sort sequence
  - print sort sequence
tipo: 📑
referencia: "[[🏛️python tutorial (dcb4c)|python tutorial]]"
tema:
  - python
---

#nota/📑





> [!example] print sort sequence 
>To loop over a sequence in sorted order, use the [[📑sorted (pytt)|sorted]] function which returns a new sorted list while leaving the source unaltered.

```python
basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']

for i in sorted(basket):

    print(i)

apple
apple
banana
orange
orange
pear
```
