---
nombre_nota: "arguments of the exception"
alias: arguments of the exception
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "92828b"
parent_hash: "aea5a"
---

#nota/📑

# 📑arguments of the exception
<div class="hash">(92828b)</div>


> [!NOTE] 
The _except clause_ may specify a variable after the [[📑exception (pytt)|exception]] name. The __variable__ is bound to the exception instance which typically has an __`args`__ attribute that stores the __arguments__.
```python
try:

    raise Exception('spam', 'eggs')

except Exception as inst:

    print(type(inst))    # the exception type

    print(inst.args)     # arguments stored in .args

    print(inst)          # __str__ allows args to be printed directly,

                         # but may be overridden in exception subclasses

    x, y = inst.args     # unpack args

    print('x =', x)

    print('y =', y)

<class 'Exception'>
('spam', 'eggs')
('spam', 'eggs')
x = spam
y = eggs
```







- [ ] recordar  [start:: 2024-10-17]
