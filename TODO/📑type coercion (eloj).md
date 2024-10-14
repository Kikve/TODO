---
nombre_nota: "type coercion"
alias: type coercion
letras: "eloj"
referencias: "[[TODO/🏛️eloquent javascript (b1018).md]]"
tipo_nota: "📑"
hash: "7d187"
parent_hash: "a922b"
---

#nota/📑

# 📑type coercion
<div class="hash">(7d187)</div>


When an [[📑operators (eloj)|operator]] is applied to the “wrong” [[📑type  (eloj)|type]] of value, [[📑javascript (eloj)|javascript]] will
quietly convert that value to the type it needs, using __a set of rules__

This is called __type coercion__

- When something that doesn’t map to a [[📑numbers (eloj)|number]] in an obvious way  is converted to a [[📑numbers (eloj)|number]], you get the value [[📑NaN (eloj)|NaN]]
- When comparing [[📑values (eloj)|values]] of the same [[📑type  (eloj)|type]] using __\==__  , when both [[📑values (eloj)|values]] are the same,
   when the types differ tries to convert one of the [[📑values (eloj)|values]] to the other value’s type 
-  when null or undefined occurs on either side of the [[📑operators (eloj)|operator]], 
   it produces true only if both sides are one of [[📑null (h&c)|null]] or [[📑undefined (eloj)|undefined]]
-   The rules for converting [[📑strings (eloj)|strings]] and [[📑numbers (eloj)|numbers]] to [[📑boolean  (eloj)|boolean]] [[📑values (eloj)|values]] state
    that 0, [[📑NaN (eloj)|NaN]], and the empty [[📑strings (eloj)|string]] ( "") count as __false__


```javascript
console.log(null == undefined);
// → true
console.log(null == 0);
// → false
```

> [!NOTE] 
When you do not want any __type conversions__
to happen, there are two additional operators: __\=\==__and__ !\==__

- [ ] recordar  [start:: 2024-10-13]