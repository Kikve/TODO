---
nombre_nota: "module"
aliases:
  - module
  - modules
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "511074"
parent_hash: "aea5a"
---

#nota/📑

# 📑module
<div class="hash">(511074)</div>



__Python__ has a way to _put definitions in a file_ and use them in a script or in an interactive instance of the interpreter.

Such a file is called a __module__
__definitions from a module can be imported__  into other __modules__ or into the _main_ module

- A __module__ is a file containing _Python_ definitions and statements.
-  The __file name__ is the module name with the suffix `.py` appended

[[📑get module name  (pytt)|get module name]]
[[📑import names  (pytt)|import names from module]]
[[📑bound to the module (pytt)|bound to the module]]
[[📑executing modules (pytt)|executing modules]]
[[📑module search path (pytt)|module search path]]
[[📑compiled modules (pytt)|compiled modules]]
[[📑import all names (pytt)|import all names]]
[[📑relative imports (pytt)|relative imports]]



> [!NOTE] 
For efficiency reasons, each module is only imported once per interpreter session. use [[📑importlib reload (pytt)|importlib reload]] to __reload the module__
>
>This is often used either to provide a convenient user interface to a [[📑module (pytt)|module]], or for __testing__ purposes (running the module as a script executes a test suite)





- [ ] recordar  [start:: 2024-10-11]