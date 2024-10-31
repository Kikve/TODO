---
nombre_nota: symbol for keyfor
aliases:
  - for, keyfor
  - Symbol keyfor for
letras: jdg
referencias: "[[TODO/🏛️javascript definitive guide (56db7).md]]"
tipo_nota: 📑
hash: 3b5e33
parent_hash: 56db7
---

#nota/📑

# 📑symbol keyfor for
<div class="hash">(3b5e33)</div>



takes a [[📑string (jdg)|string]] argument and returns a [[📑Symbol (jdg)|Symbol]] value that is associated with the [[📑string (jdg)|string]] you pass. If no [[📑string (jdg)|string]] is already associated with that [[📑string (jdg)|string]], then a new one is created and returned

and it can also be retrieved by calling Symbol.keyFor() on the returned [[📑Symbol (jdg)|Symbol]].

```javascript
let s = Symbol.for("shared");
let t = Symbol.for("shared");
s === t
 // => true
s.toString()
 // => "Symbol(shared)"
Symbol.keyFor(t) // => "shared"
```


- [ ] recordar  [start:: 2024-10-20]
