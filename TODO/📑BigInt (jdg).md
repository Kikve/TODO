---
nombre_nota: "BigInt"
alias: BigInt
letras: "jdg"
referencias: "[[TODO/🏛️javascript definitive guide (56db7).md]]"
tipo_nota: "📑"
hash: "49ac2"
parent_hash: "56db7"
---

#nota/📑

# 📑BigInt
<div class="hash">(49ac2)</div>

[[📑object type (jdg)|object]]
```javascript
1234n
 // A not-so-big BigInt literal
0b111111n
 // A binary BigInt
0o7777n
 // An octal BigInt
0x8000000000000000n
 // => 2n**63n: A 64-bit integer
```

```javascript
BigInt(Number.MAX_SAFE_INTEGER)
 // => 9007199254740991n
let string = "1" + "0".repeat(100); // 1 followed by 100 zeros.
BigInt(string)
 // => 10n**100n: one googol
```

- [ ] recordar  [start:: 2024-10-18]
