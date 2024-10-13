---
tags: 
aliases:
  - list comprehensions
tipo: 📑
referencia: "[[🏛️python tutorial (dcb4c)]]"
tema:
  - python
---


#nota/📑

List comprehensions provide a concise way to create [[📑list (pytt)|list]]


- [[📑ex list comprehensions (pytt)|examples list comprehensions]]
- [[📑nested list compresions (pytt)|nested list compresions]]
- [[📑errores list comprehensions (pytt)|errores list comprehensions]]
- [[📑sets (pytt)|sets]]


Operations applied to each member of another sequence or iterable, or to create a subsequence of those elements that satisfy a certain condition.


```python
squares = list(map(lambda x: x**2, range(10)))
squares = [x**2 for x in range(10)]
```


consists of brackets containing an expression followed by a [[📑for statements (pytt)|for]] clause, then zero or more [[📑for statements (pytt)|for]] or  [[📑if statements (pytt)|if]] clauses.
The result will be a new [[📑list (pytt)|list]] resulting from evaluating the expression in the context of the [[📑for statements (pytt)|for]] and  [[📑if statements (pytt)|if]] clauses which follow it.

```python
[(x, y) for x in [1,2,3] for y in [3,1,4] if x != y]
[(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]
```


