---
nombre_nota: "closure"
alias: closure
letras: "eloj"
referencias: "[[TODO/🏛️eloquent javascript (b1018).md]]"
tipo_nota: "📑"
hash: "79429"
parent_hash: "a922b"
---

#nota/📑

# 📑closure
<div class="hash">(79429)</div>

The ability to treat [[📑function (eloj)|functions]] as values, combined with the fact that local [[📑bindings (eloj)|bindings]] are recreated every time a [[📑function (eloj)|function]] is called


> [!NOTE] 
being able to reference a specific instance of a local [[📑bindings (eloj)|binding]] in an enclosing scope—is called [[📑closure (eloj)|closure]]

```javascript
function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2
```


- [ ] recordar  [start:: 2024-10-15]
