---
tags: 
aliases:
  - conditional operator
  - ternary operator
tipo: 📑
referencia: "[[🏛️eloquent javascript (b1018)]]"
tema:
  - javascript
---

#nota/📑

# conditional operator 

- [ ] recordar  [start:: 2024-10-11]
[[📑operators (eloj)|operator]]

__conditional operator__  (or sometimes just the __ternary operator__ )

 The [[📑values (eloj)|value]] on the __left of the question mark__ “_picks_” which of the other two values will come out.
When it is true, it chooses the __middle value__, and when it is false, it chooses the
__value on the right.__

```javascript
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2
```