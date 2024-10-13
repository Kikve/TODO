---
tags: 
aliases:
  - else clauses on loops
tipo: 📑
referencia: "[[🏛️python tutorial (dcb4c)]]"
tema:
  - python
---

#nota/📑

# else clauses on loops


In a [[📑for statements (pytt)|for ]] or `while` __loop__ the `break` __statement__ may be paired with an `else` clause. If the loop finishes without executing the `break`, the `else` clause executes.


In a [[📑for statements (pytt)|for]] loop, the `else` clause is executed after the loop finishes its final iteration, that is, if no __break__ occurred.


```python
for n in range(2, 10):
    for x in range(2, n):
        if n % x == 0:
            print(n, 'equals', x, '*', n//x)
            break
    else:
        # loop fell through without finding a factor
        print(n, 'is a prime number')
```
- [x] recordar  [start:: 2024-10-12]  [completion:: 2024-10-12]