---
nombre_nota: beta reduction
aliases:
  - beta reduction
  - beta
  - reduction
  - application
letras: hpf
referencias: "[[TODO/🏛️haskell programming from first principles (9853c).md]]"
tipo_nota: 📑
hash: 901b5
parent_hash: bb1ea
---

#nota/📑

# 📑beta reduction
<div class="hash">(901b5)</div>


> [!NOTE] 
we apply a [[📑function (hpf)|function]] to an argument, we substitute the input [[📑expression (hpf)|expression]] for all instances of bound variables within the body of the [[📑abstraction (hpf)|abstraction]]. 
You also eliminate the __head__ of the [[📑abstraction (hpf)|abstraction]].
This process is called [[📑beta reduction (hpf)|beta reduction]].

This __function__ is the __identity function__ all instances of 𝑥 within the function __body__ must have the same value

![[Pasted image 20241013204711.png|300]]

--- 

> [!NOTE] 
We apply the function above to 2 
![[Pasted image 20241013204750.png|300]]



> [!NOTE] 
We can also apply our identity function to another [[📑abstraction (hpf)|lambda abstraction]]:
>
>![[Pasted image 20241013205225.png|300]]
>
>![[Pasted image 20241013205503.png|300]]

Applications in the [[📑lambda calculus (hpf)|lambda calculus]] __are left associative__. That
is, unless specific parentheses suggest otherwise, they associate,
or __group, to the left__.


The process of [[📑beta reduction (hpf)|beta reduction]] stops when there are either no more __heads__, or lambdas, left to apply or no more __arguments__ to apply functions to.


- [ ] recordar  [start:: 2024-10-13]
