---
nombre_nota: "tuple and list methods"
alias: tuple and list methods
letras: "flup"
referencias: "[[TODO/🏛️fluent python (9ba54).md]]"
tipo_nota: "📑"
hash: "25361"
parent_hash: "9ba54"
---

#nota/📑

# 📑tuple and list methods
<div class="hash">(25361)</div>


[[📑list (flup)|list]] [[📑tuple (flup)|tuple]]

| Método        | Listas    | Tuplas | Descripción                                   |
|--------------|----------|--------|-----------------------------------------------|
| s.count(e)    | Sí       | Sí     | Cuenta las ocurrencias del elemento `e`       |
| `s.__delitem__(p)`| Sí       | No     | Elimina el elemento en la posición `p`        |
| s.extend(it)  | Sí       | No     | Agrega los elementos del iterable `it`        |
| `s.__getitem__(p)`| Sí       | Sí     | Obtiene el elemento en la posición `p`        |
| `s.__getnewargs__()`| Sí       | Sí     | Soporte para serialización optimizada con pickle |
| s.index(e)    | Sí       | Sí     | Encuentra la posición de la primera ocurrencia de `e` |
| s.insert(i, x)| Sí       | No     | Inserta el elemento `x` en la posición `i`     |
| s.len()       | Sí       | Sí     | Devuelve el número de elementos               |
| `s.__mul__(n)`  | Sí       | Sí     | Repite la secuencia `n` veces                 |
| `s.__imul__(n)` | Sí       | No     | Repite la secuencia `n` veces en el lugar      |
| `s.__rmul__(n)` | Sí       | Sí     | Repite la secuencia `n` veces (inverso)        |
| `s.pop([i])`    | Sí       | No     | Elimina y devuelve el elemento en la posición `i` (opcional) |
| s.remove(x)   | Sí       | No     | Elimina la primera ocurrencia del elemento `x` |
| s.reverse()   | Sí       | No     | Invierte el orden de los elementos            |
| `s.__reversed__()`| Sí       | Sí     | Devuelve un iterador invertido               |
| `s.__setitem__(i, x)`| Sí       | No     | Asigna el valor `x` a la posición `i`        |
| s.sort(key=None, reverse=False)| Sí       | No     | Ordena los elementos en el lugar (opcionalmente por clave y en orden inverso) |




- [ ] recordar  [start:: 2024-10-25]
