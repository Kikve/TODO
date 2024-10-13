---
tags: 
aliases:
  - binary search
tipo: 📑
referencia: "[[🏛️grokking algoritms (30c56)]]"
tema:
---

#nota/📑

__Binary search__ is an algorithm; its input is a sorted list of elements. 

If an element you’re looking for is in that list, binary search returns the position where it’s located

You have to try to guess my number in the fewest tries possible. 
With every guess, I’ll tell you if your guess is too low, too high, or correct.

In general, for any _list_ of n, __binary search__ will take `log2 n` steps to run in the worst case,

The __binary_search__ function takes a sorted array and an item. If the item is in the array, the function returns its position. 

- Each time, you check the middle element
- If the guess is too low, you update low accordingly
- And if the guess is too high, you update high . 






