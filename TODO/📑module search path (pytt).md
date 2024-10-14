---
nombre_nota: "module search path"
alias: module search path
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "61912a"
parent_hash: "aea5a"
---

#nota/📑

# 📑module search path
<div class="hash">(61912a)</div>

When a [[📑module (pytt)|module]]  is imported, the interpreter first searches for a __built-in [[[📑module (pytt)|module]] with that name__. These module names are listed in __sys.builtin_module_names__

If not found, it then __searches__ in a list of directories given by the variable __sys.path__ is initialized from these locations:

- The directory containing the input script.
- __PYTHONPATH__ (a list of directory names, with the same syntax as the shell variable __PATH__).

- The installation-dependent default (by convention including a __site-packages__ directory, handled by the site  __site Module__ responsible for site-specific configuration.

---

- [ ] recordar  [start:: 2024-10-14]
