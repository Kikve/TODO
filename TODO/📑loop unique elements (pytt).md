---
nombre_nota: "loop unique elements"
alias: loop unique elements
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "6c9bcd"
parent_hash: "aea5a"
---

#nota/📑

# 📑loop unique elements
<div class="hash">(6c9bcd)</div>




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

- [x] recordar  [start:: 2024-10-15]  [completion:: 2024-10-19]