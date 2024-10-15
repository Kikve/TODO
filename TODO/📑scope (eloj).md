---
nombre_nota: scope
aliases:
  - scope
  - scopes
letras: eloj
referencias: "[[TODO/🏛️eloquent javascript (b1018).md]]"
tipo_nota: 📑
hash: 8c8c46
parent_hash: a922b
---

#nota/📑

# 📑scope
<div class="hash">(8c8c46)</div>


Each [[📑bindings (eloj)|binding]] has a [[📑scope (eloj)|scope]], which is the part of the program in which the __binding is visible__. For [[📑bindings (eloj)|bindings]] defined outside of any [[📑function (eloj)|function]] or [[📑block (eloj)|block]], the [[📑scope (eloj)|scope]] is the __whole program__

each local scope can also see all the local [[📑scope (eloj)|scopes]]that contain it,
> [!NOTE] 
[[📑bindings (eloj)|bindings]] declared with [[📑let (eloj)|let]] and [[📑const (eloj)|const]] are in fact local to the [[📑block (eloj)|block]] that they are declared in
>[[📑var (eloj)|var]] keyword, are visible throughout the whole function that they appear in

```javascript
let x = 10;
if (true) {
let y = 20;
var z = 30;
console.log(x + y + z);
// → 60
}
// y is not visible here
console.log(x + z);
// → 40
```
- [ ] recordar  [start:: 2024-10-15]
