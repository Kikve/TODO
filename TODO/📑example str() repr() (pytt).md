---
nombre_nota: "example str() repr()"
alias: example str() repr()
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "64acc1"
parent_hash: "aea5a"
---

#nota/📑

# 📑example str() repr()
<div class="hash">(64acc1)</div>

- [ ] recordar  [start:: 2024-10-15]



### example
```python
s = 'Hello, world.'

str(s)
'Hello, world.'

repr(s)
"'Hello, world.'"

str(1/7)
'0.14285714285714285'

x = 10 * 3.25

y = 200 * 200

s = 'The value of x is ' + repr(x) + ', and y is ' + repr(y) + '...'

print(s)
The value of x is 32.5, and y is 40000...

# The repr() of a string adds string quotes and backslashes:

hello = 'hello, world\n'

hellos = repr(hello)

print(hellos)
'hello, world\n'

# The argument to repr() may be any Python object:

repr((x, y, ('spam', 'eggs')))
"(32.5, 40000, ('spam', 'eggs'))"
```

