---
tags: 
aliases:
  - short circuit evaluation
tipo: 📑
referencia: "[[🏛️eloquent javascript (b1018)]]"
tema:
  - javascript
---

#nota/📑

# short circuit evaluation 



Another important property of these two [[📑operators (eloj)|operators]] is that the part to their
right __is evaluated only when necessary.__


__&&__    

When the [[📑values (eloj)|value]] to its left is something that converts to false, it returns that value, and otherwise it returns __the value on its right.__

__||__

```javascript
So 0 || -1 produces -1, and "" || "!?" yields "!?".
```




- [ ] recordar  [start:: 2024-10-11]
