---
nombre_nota: "methods of file objects"
alias: methods of file objects
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "4bdcdb"
parent_hash: "aea5a"
---

#nota/📑

# 📑methods of file objects
<div class="hash">(4bdcdb)</div>
[[📑open (pytt)| open file]]



```python
f.readline()
'This is the first line of the file.\n'

f.readline()
'Second line of the file\n'

f.readline()
''
```

```python
f = open('workfile', 'rb+')

f.write(b'0123456789abcdef')
16

f.seek(5)      # Go to the 6th byte in the file
5

f.read(1)
b'5'

f.seek(-3, 2)  # Go to the 3rd byte before the end
13

f.read(1)
b'd'
```

`f.tell()` returns an integer giving the file object’s current position in the file represented as number of bytes from the beginning of the file when in binary mode and an opaque number when in text mode.``

- [ ] recordar  [start:: 2024-10-16]
