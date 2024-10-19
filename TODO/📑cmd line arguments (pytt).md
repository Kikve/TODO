---
nombre_nota: "cmd line arguments"
alias: cmd line arguments
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "58fbc4"
parent_hash: "aea5a"
---

#nota/📑

# 📑cmd line arguments
<div class="hash">(58fbc4)</div>

[[📑functions (pytt)|function]]
```python
import sys
print(sys.argv)
```

more sophisticated mechanism to process __command line arguments__

```python
import argparse

parser = argparse.ArgumentParser(
    prog='top',
    description='Show top lines from each file')
parser.add_argument('filenames', nargs='+')
parser.add_argument('-l', '--lines', type=int, default=10)
args = parser.parse_args()
print(args)
```


- [ ] recordar  [start:: 2024-10-18]
