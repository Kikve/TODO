---
nombre_nota: "generator expressions"
alias: generator expressions
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "4617cb"
parent_hash: "aea5a"
---

#nota/📑

# 📑generator expressions
<div class="hash">(4617cb)</div>

syntax similar to [[📑list comprehensions (pytt)|list comprehensions]] but with __parentheses instead of square brackets__
for situations where the [[📑generator (pytt)|generator]] is used right away by an enclosing [[📑functions (pytt)|function]]

more memory friendly than equivalent [[📑list comprehensions (pytt)|list comprehensions]]

```python
sum(i*i for i in range(10))                 # sum of squares
285

xvec = [10, 20, 30]

yvec = [7, 5, 3]

sum(x*y for x,y in zip(xvec, yvec))         # dot product
260

unique_words = set(word for line in page  for word in line.split())

valedictorian = max((student.gpa, student.name) for student in graduates)

data = 'golf'

list(data[i] for i in range(len(data)-1, -1, -1))
['f', 'l', 'o', 'g']
```
- [ ] recordar  [start:: 2024-10-18]
