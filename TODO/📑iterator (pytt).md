---
nombre_nota: "iterator"
alias: iterator
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "3407b2"
parent_hash: "aea5a"
---

#nota/📑

# 📑iterator
<div class="hash">(3407b2)</div>

[[📑for statements (pytt)|for statements]] call __iter()__ on the container object.The [[📑functions (pytt)|function]] returns an e[[📑iterator (pytt)|iterator]] __object__ that defines the method __next()__ which accesses elements in the container one at a time 


```python
s = 'abc'

it = iter(s)

it
<str_iterator object at 0x10c90e650>

next(it)
'a'

next(it)
'b'

next(it)
'c'

next(it)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
    next(it)
StopIteration
```

[[📑example reverse iterator (pytt)|example reverse iterator]]
[[📑generator (pytt)|generator]]
- [ ] recordar  [start:: 2024-10-18]
