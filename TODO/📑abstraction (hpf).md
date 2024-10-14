---
tags: 
aliases:
  - abstraction
  - abstractions
  - lambda abstraction
tipo: 📑
referencia: "[[🏛️haskell programming from first principles (9853c)]]"
tema:
  - haskell
---

#nota/📑

# abstraction lambda


- [ ] recordar  [start:: 2024-10-11]


> [!definition] 
An __abstraction__ is a [[📑function (hpf)|function]]. It is a [[📑lambda term (hpf)|lambda term]] that has a __head (a lambda)__ and a __body__ and is applied to an __argument__. 
An argument is an input value.
>
>The __head__ of the [[📑function (hpf)|function]]  is a __$𝜆$ (lambda)__ followed by a [[📑lambda variable (hpf)|variable]]
name. The __body__ of the function is another [[📑expression (hpf)|expression]]


> [!NOTE]
>![[Pasted image 20241011210318.png|300]]
>
>The [[📑lambda variable (hpf)|variable]] named in the __head__  is the parameter and binds
all instances of that same [[📑lambda variable (hpf)|variable]] in the body of the [[📑abstraction (hpf)|function]]
>
> When we apply the __abstraction to arguments__, we replace the
names with values, making it concrete.




