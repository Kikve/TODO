---
nombre_nota: getitem
aliases:
  - getitem
  - __getitem__
letras: flup
referencias: "[[TODO/🏛️fluent python (9ba54).md]]"
tipo_nota: 📑
hash: "933181"
parent_hash: 9ba54
---

#nota/📑

# 📑getitem
<div class="hash">(933181)</div>

Just by implementing the __getitem__ special method, our deck is also iterable

[[📑card deck example (flup)|card deck example]]

```python
for card in deck:
    print(card)

Card(rank='2', suit='spades')
Card(rank='3', suit='spades')
Card(rank='4', suit='spades')
```

We can also iterate over the deck in reverse:

```python
for card in reversed(deck):
    print(card)

Card(rank='A', suit='hearts')
Card(rank='K', suit='hearts')
Card(rank='Q', suit='hearts')
```


if  If a collection has no [[📑__contains__ (flup)|__contains__]] method, the __in__ operator does a sequential scan


- [ ] recordar  [start:: 2024-10-24]
