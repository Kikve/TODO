---
nombre_nota: "handling unknown exception"
alias: handling unknown exception
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "978a3b"
parent_hash: "aea5a"
---

#nota/📑

# 📑handling unknown exception
<div class="hash">(978a3b)</div>


the most common pattern for [[📑hadling exception (pytt)|hadling exception]] is to print or log the [[📑exception (pytt)|exception]] and then re-raise it (allowing a caller to handle the exception as well):
```python
import sys

try:
    f = open('myfile.txt')
    s = f.readline()
    i = int(s.strip())
except OSError as err:
    print("OS error:", err)
except ValueError:
    print("Could not convert data to an integer.")
except Exception as err:
    print(f"Unexpected {err=}, {type(err)=}")
    raise
```





- [ ] recordar  [start:: 2024-10-17]
