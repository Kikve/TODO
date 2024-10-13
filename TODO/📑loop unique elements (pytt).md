---
tags: 
aliases:
  - loop unique elements
tipo: 📑
referencia: "[[🏛️python tutorial (dcb4c)]]"
tema:
  - python
---

#nota/📑




> [!example] unique elements
 Using  [[📑sets (pytt)|set]]() on a [[📑sequences types (pytt)|sequences]] eliminates duplicate elements. The use of [[📑sorted (pytt)|sorted]]() in combination with set() over a sequence  to loop over unique elements of the sequence in sorted order.
​


```python
basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']
for f in sorted(set(basket)):
    print(f)


apple
banana
orange
pear
```
