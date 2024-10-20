---
nombre_nota: "sets"
aliases:
  - sets
  - set
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "2138cc"
parent_hash: "aea5a"
---

#nota/📑

# 📑sets
<div class="hash">(2138cc)</div>


- A set is an unordered collection with no duplicate elements.
- Set objects also support mathematical operations like union, intersection, difference, and symmetric difference.

[[📑set list comprehension (pytt)|set list comprehension]]

```python
basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}
print(basket)                      # show that duplicates have been removed
{'orange', 'banana', 'pear', 'apple'}

'orange' in basket                 # fast membership testing
True

'crabgrass' in basket
False

# Demonstrate set operations on unique letters from two words
a = set('abracadabra')
b = set('alacazam')
a                                  # unique letters in a
{'a', 'r', 'b', 'c', 'd'}
a - b                              # letters in a but not in b
{'r', 'd', 'b'}
a | b                              # letters in a or b or both
{'a', 'c', 'r', 'd', 'b', 'm', 'z', 'l'}
a & b                              # letters in both a and b
{'a', 'c'}
a ^ b                              # letters in a or b but not both
{'r', 'd', 'b', 'm', 'z', 'l'}
```



- [x] recordar  [start:: 2024-10-15]  [completion:: 2024-10-19]