---
tags: 
aliases:
  - hex
tipo: 📑
referencia: "[[🏛️python standard library(50e6)]]"
tema:
  - python
  - function
---

#nota/📑


Convert an integer number to a lowercase hexadecimal string prefixed with _“0x”_. If _x_ is not a Python __int__ object, it has to define an` __index__()` method that returns an integer. Some examples:

```python
hex(255)
'0xff'

hex(-42)
'-0x2a'
```

```python
'%#x' % 255, '%x' % 255, '%X' % 255
('0xff', 'ff', 'FF')

format(255, '#x'), format(255, 'x'), format(255, 'X')
('0xff', 'ff', 'FF')

f'{255:#x}', f'{255:x}', f'{255:X}'
('0xff', 'ff', 'FF')
```
