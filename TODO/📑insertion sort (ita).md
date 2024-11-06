---
nombre_nota: "insertion sort"
alias: insertion sort
letras: "ita"
referencias: "[[TODO/🏛️introduction to algorithms (bbc0e).md]]"
tipo_nota: "📑"
hash: "346a62"
parent_hash: "bbc0e"
---

#nota/📑

# 📑insertion sort
<div class="hash">(346a62)</div>

> [!NOTE] 
 is an efﬁcient algorithm for sorting a small number of elements


[[📑insertion sort (ita)|insertion sort]], takes time roughly equal to $c_1 n^2$ to sort 
n([[📑input size (ita)|input size]]) items, where $c_1$ is a constant that does not depend on n.

That is, it takes time roughly proportional to $n^2$
 

se compara dos celdas contiguas y se se tiene que cambiar de lugar se busca el lugar correcto iterando hacia atras


![[Pasted image 20241104151654.png|400]]

```python
def ins_sort(lst):
    print(f"{lst=}")
    match lst:
        case [n]:
            return lst
        case ls:

            for j in range(1,len(lst)):
                print(f"ciclo {j}")
                # se toman dos valores del array de j = 0 -> inf
                # y i = j - 1
                i = j  - 1 
                key = lst[j] # se guarda el valor de j 
                while i >= 0 and lst[i] > key:
                    lst[i + 1] = lst[i]
                    # se busca donde poner el element hacia atras
                    i -= 1
                lst [i + 1] = key
                    
lst = [5, 4, 1]
ins_sort(lst)
```


- [ ] recordar  [start:: 2024-11-04]
