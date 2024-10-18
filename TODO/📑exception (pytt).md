---
nombre_nota: exception
aliases:
  - exception
  - exceptions
letras: pytt
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: 📑
hash: 7eb6c9
parent_hash: aea5a
---

#nota/📑

# 📑exception
<div class="hash">(7eb6c9)</div>


__statement__ or __expression__ is syntactically correct, it may cause an __error__ when an attempt is made to execute it

```python
10 * (1/0)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
    10 * (1/0)
          ~^~
ZeroDivisionError: division by zero

4 + spam*3
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
    4 + spam*3
        ^^^^
NameError: name 'spam' is not defined

'2' + 2
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
    '2' + 2
    ~~~~^~~
TypeError: can only concatenate str (not "int") to str
```

[[📑hadling exception (pytt)|hadling exception]]

[[📑raise exception (pytt)|raise exception]]

- [ ] recordar  [start:: 2024-10-17]
