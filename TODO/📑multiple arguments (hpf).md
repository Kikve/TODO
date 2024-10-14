---
nombre_nota: multiple arguments
aliases:
  - multiple arguments
  - multiple argument
letras: hpf
referencias: "[[TODO/🏛️haskell programming from first principles (9853c).md]]"
tipo_nota: 📑
hash: b2ee5
parent_hash: bb1ea
---

#nota/📑

# 📑multiple arguments
<div class="hash">(b2ee5)</div>

can only bind one __parameter__ and can only accept one __argument__. [[📑function (hpf)|functions]] that require multiple __arguments__ have multiple, nested __heads__

When you apply it once and eliminate the first (__leftmost__) __head__, the next one is applied and so on

This formulation was originally discovered by __Moses Schönfinkel__ in the 1920s but was later rediscovered and named after [[📑haskell (hpf)|haskell]] __Curry__ and is commonly called __currying__

![[Pasted image 20241013211956.png|300]]

is a convenient shorthand for two nested [[📑lambda term (hpf)|lambdas]]

![[Pasted image 20241013212045.png|300]]
When you apply the first __argument__, you’re binding 𝑥, elimi-
nating the outer lambda, and have 𝜆𝑦.𝑥𝑦


![[Pasted image 20241013212415.png|300]]



- [ ] recordar  [start:: 2024-10-13]
