---
nombre_nota: "how special methods are used"
alias: how special methods are used
letras: "flup"
referencias: "[[TODO/🏛️fluent python (9ba54).md]]"
tipo_nota: "📑"
hash: "74c352"
parent_hash: "9ba54"
---

#nota/📑

# 📑how special methods are used
<div class="hash">(74c352)</div>


[[📑special method (flup)|special method]] is that they are meant to be called by the __Python interpreter__, and not by you


But the interpreter takes a shortcut when dealing for built-in types like __list, str,
bytearray, or extensions like the NumPy arrays__. Python variable-sized collections
written in C include a struct2 called PyVarObject, which has an ob_size field holding
the number of items in the collection.

More often than not, the [[📑special method (flup)|special method]] call is implicit. For example, the statement
for i in x: actually causes the invocation of iter(x), which in turn may call
x.__iter__() if that is available, or use x.__getitem__()[[📑getitem (flup)|__getitem__]]



- [ ] recordar  [start:: 2024-10-21]
