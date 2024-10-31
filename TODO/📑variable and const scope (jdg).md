---
nombre_nota: variable and const scope
aliases:
  - variable and const scope
  - scope variable
letras: jdg
referencias: "[[TODO/🏛️javascript definitive guide (56db7).md]]"
tipo_nota: 📑
hash: 7d56b1
parent_hash: 56db7
---

#nota/📑

# 📑variable and const scope
<div class="hash">(7d56b1)</div>

__Variables and constants__ declared with let and const are __block scoped__

This means that they are only defined within the block of code in which the __let or const__
statiement appears. [[📑variable assignment (jdg)|variable assignment]]

When a [[📑variable assignment (jdg)|variable assignment]] appears at the top level, outside of any code blocks, we say it is a
__global variable__ or constant and has global scope  [[📑global object (jdg)|global object]].
 
> [!NOTE]
 if a variable or constant is declared within a set of curly braces, then those curly braces delimit the region of code in which the variable or constant is defined

- [ ] recordar  [start:: 2024-10-28]
