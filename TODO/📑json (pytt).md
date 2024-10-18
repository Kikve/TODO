---
nombre_nota: "json"
alias: json
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "575d88"
parent_hash: "aea5a"
---

#nota/📑

# 📑json
<div class="hash">(575d88)</div>


[[📑functions (pytt)|function]]
you can view its JSON __string__ representation
```python
import json

x = [1, 'simple', 'list']

json.dumps(x)
'[1, "simple", "list"]'
```


 serializes the object to a __text file__ So if `f` is a __text file__ object opened for writing

```python
json.dump(x, f)
```

To decode the object

```python
x = json.load(f)
```
- [ ] recordar  [start:: 2024-10-16]
