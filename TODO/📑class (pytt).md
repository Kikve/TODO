---
nombre_nota: "class"
alias: class
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "267615"
parent_hash: "aea5a"
---

#nota/📑

# 📑class
<div class="hash">(267615)</div>
When a [[📑class (pytt)|class]] definition is entered, a new namespace is created, and used as the local scope — thus, all assignments to local variables go into this new [[📑namespace (pytt)|namespace]]. In particular, [[📑functions (pytt)|function]] definitions bind the name of the new function here.


[[📑class (pytt)|class]] objects support two kinds of operations: __attribute references__ and __instantiation__
```python
class MyClass:
    """A simple example class"""
    i = 12345

    def f(self):
        return 'hello world'
```

```python
x = MyClass()
```


```python
class Complex:

    def __init__(self, realpart, imagpart):

        self.r = realpart

        self.i = imagpart

x = Complex(3.0, -4.5)

x.r, x.i
(3.0, -4.5)
```
- [ ] recordar  [start:: 2024-10-17]
