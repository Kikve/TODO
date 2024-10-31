---
nombre_nota: "object to primitive algorithms"
alias: object to primitive algorithms
letras: "jdg"
referencias: "[[TODO/🏛️javascript definitive guide (56db7).md]]"
tipo_nota: "📑"
hash: "57ee49"
parent_hash: "56db7"
---

#nota/📑

# 📑object to primitive algorithms
<div class="hash">(57ee49)</div>



 three fundamental algorithms for converting objects to primitive
values:

- prefer-string
- prefer-number
- no-preference


 The __prefer-string__ algorithm first tries the toString() method. If the __method__ is defined and returns a __primitive value__, then JavaScript uses that __primitive value__

 If toString() does not exist or if it returns an [[📑object type (jdg)|object]], then JavaScript tries the valueOf() method


 The __prefer-number__ algorithm works like the prefer-string algorithm, except that it
tries [[📑value of (jdg)|valueOf()]] first and toString() second.

- [ ] recordar  [start:: 2024-10-28]
