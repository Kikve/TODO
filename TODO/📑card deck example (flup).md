---
nombre_nota: "card deck example"
alias: card deck example
letras: "flup"
referencias: "[[TODO/🏛️fluent python (9ba54).md]]"
tipo_nota: "📑"
hash: "8f0e59"
parent_hash: "9ba54"
---

#nota/📑

# 📑card deck example
<div class="hash">(8f0e59)</div>
[[📑special method (flup)|special methods]]



```python
import collections

Card = collections.namedtuple('Card', ['rank', 'suit'])

class FrenchDeck:

    ranks = [str(n) for n in range(2, 11)] + list('JQKA')

    suits = 'spades diamonds clubs hearts'.split()

    def __init__(self):
        self._cards = [Card(rank, suit) for suit in self.suits
                       for rank in self.ranks]
    def __len__(self):
        return len(self._cards)
    def __getitem__(self, position):
        return self._cards[position]

```


- [ ] recordar  [start:: 2024-10-24]
