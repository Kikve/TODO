---
tags: 
aliases:
  - logical operator
tipo: 📑
referencia: "[[🏛️eloquent javascript (b1018)]]"
tema:
  - javascript
---

#nota/📑

# logical operator 


> [!NOTE] definition
There are also some [[📑operators (eloj)|operations]] that can be applied to [[📑boolean  (eloj)|boolean]] [[📑values (eloj)|values]] themselves

```javascript
console.log(false || true)
// → true
console.log(false || false)
// → false
```

[[📑precedence of operators (eloj)|precedence]]:
__||__   has  the lowest precedence, then comes __&&__, then the comparison operators


 When the value to its left __is something that converts to false__, it returns that value,
  and otherwise it returns the __value on its right__.