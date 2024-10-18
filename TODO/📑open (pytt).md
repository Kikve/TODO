---
nombre_nota: "open"
alias: open
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "31c55a"
parent_hash: "aea5a"
---

#nota/📑

# 📑open
<div class="hash">(31c55a)</div>

[[📑functions (pytt)|function]]
returns a __file object__([[📑methods of file objects (pytt)|methods of file objects]]) and is most commonly used with two __positional arguments__ and one __keyword argument__: `open(filename, mode, encoding=None)`

```python
f = open('workfile', 'w', encoding="utf-8")
```

The second argument is another string containing a few characters describing the way in which the file will be used


_mode_ can be 


__`'r'`__ when the file will only be read, 

`'w'` for only writing (an existing file with the same name will be erased), and 

`'a'` opens the file for appending; any data written to the file is automatically added to the end. 

`'r+'` opens the file for both reading and writing. The _mode_ argument is optional; `'r'` will be assumed if it’s omitted.



```python
>>>

with open('workfile', encoding="utf-8") as f:

    read_data = f.read()

# We can check that the file has been automatically closed.

f.closed
True
```
- [ ] recordar  [start:: 2024-10-16]
