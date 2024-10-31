---
nombre_nota: "type conversions"
alias: type conversions
letras: "jdg"
referencias: "[[TODO/🏛️javascript definitive guide (56db7).md]]"
tipo_nota: "📑"
hash: "14ab96"
parent_hash: "56db7"
---

#nota/📑

# 📑type conversions
<div class="hash">(14ab96)</div>

[[📑type (jdg)|type]]
[[📑explicit type conversions (jdg)|explicit type conversions]]

| Value                           | to String           | to Number   | to Boolean |
| ------------------------------- | ------------------- | ----------- | ---------- |
| `undefined`                     | `"undefined"`       | `NaN`       | `false`    |
| `null`                          | `"null"`            | `0`         | `false`    |
| `true`                          | `"true"`            | `1`         | `true`     |
| `false`                         | `"false"`           | `0`         | `false`    |
| `""` (empty string)             | `""`                | `0`         | `false`    |
| `"1.2"` (nonempty, numeric)     | `"1.2"`             | `1.2`       | `true`     |
| `"one"` (nonempty, non-numeric) | `"one"`             | `NaN`       | `true`     |
| `0`                             | `"0"`               | `0`         | `false`    |
| `-0`                            | `"0"`               | `0`         | `false`    |
| `1` (finite, non-zero)          | `"1"`               | `1`         | `true`     |
| `Infinity`                      | `"Infinity"`        | `Infinity`  | `true`     |
| `-Infinity`                     | `"-Infinity"`       | `-Infinity` | `true`     |
| `NaN`                           | `"NaN"`             | `NaN`       | `false`    |
| `{}` (any object)               | `"[object Object]"` | see section | `true`     |
| `[]` (empty array)              | `""`                | `0`         | `true`     |
| `[9]` (one numeric element)     | `"9"`               | `9`         | `true`     |
| `['a']` (any other array)       | use join() method   | NaN         | true       |
| function(){} (any function)     | see §3.9.3          | NaN         | true       |



- [ ] recordar  [start:: 2024-10-20]
