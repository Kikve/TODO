---
nombre_nota: var declaration
aliases:
  - var declaration
  - var
letras: jdg
referencias: "[[TODO/🏛️javascript definitive guide (56db7).md]]"
tipo_nota: 📑
hash: 81608e
parent_hash: 56db7
---

#nota/📑

# 📑var declaration
<div class="hash">(81608e)</div>

 Variables declared with var do not have block scope. Instead, they are scoped to the body of the containing function no matter how deeply nested they are inside that __function__.

If you use var outside of a __function body__, it declares a __global variable__. But global variables declared with [[📑var declaration (jdg)|var]] differ from globals declared with __let__ in an important way. Globals declared with var are implemented as properties of the [[📑global object (jdg)|global object]]


 Unlike variables declared with let, it is legal to declare the same variable multiple times with [[📑var declaration (jdg)|var]]



One of the most unusual features of var declarations is known as __hoisting__. When a variable is declared with var, the declaration is lifted up (or “hoisted”) to the top of the enclosing function


- [ ] recordar  [start:: 2024-10-28]
