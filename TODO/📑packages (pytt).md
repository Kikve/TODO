---
nombre_nota: packages
aliases:
  - packages
  - package
letras: pytt
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: 📑
hash: 4c3aed
parent_hash: aea5a
---

#nota/📑

# 📑packages
<div class="hash">(4c3aed)</div>

[[📑packages (pytt)|packages]] are a way of structuring Python’s [[📑module (pytt)|module]] __namespace__ by using “dotted module names”

- The `__init__.py` files are required to make Python treat __directories__ containing the file as [[📑packages (pytt)|packages]] (unless using a __namespace package__  a relatively advanced feature).

In the simplest case, `__init__.py` can just be an empty file, but it can also execute initialization code for the [[📑packages (pytt)|package]] or set the `__all__` __variable__, described later.


Users of the package can import individual [[📑module (pytt)|modules]] from the package


- [ ] recordar  [start:: 2024-10-15]


