---
tags: 
aliases:
  - module
tipo: 📑
referencia: "[[🏛️python tutorial (dcb4c)]]"
tema:
  - python
---

#nota/📑

# module 

- [ ] recordar  [start:: 2024-10-11]

__Python__ has a way to _put definitions in a file_ and use them in a script or in an interactive instance of the interpreter.

Such a file is called a __module__; __definitions from a module can be imported__  into other __modules__ or into the _main_ module

- A __module__ is a file containing _Python_ definitions and statements.
-  The __file name__ is the module name with the suffix `.py` appended

[[📑get module name  (pytt)|get module name]]
[[📑import names from module (pytt)|import names from module]]
[[📑bound to the module (pytt)|bound to the module]]


> [!NOTE] 
For efficiency reasons, each module is only imported once per interpreter session. use [[📑importlib reload (pytt)|importlib reload]] to __reload the module__
