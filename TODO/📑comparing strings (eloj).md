---
tags: 
aliases:
  - comparing strings
tipo: 📑
referencia: "[[🏛️eloquent javascript (b1018)]]"
tema:
  - javascript
---

#nota/📑

# comparing strings 


- The way [[📑strings (eloj)|strings]] are ordered is roughly alphabetic but not really what you’d
expect to see in a dictionary   __uppercase__  letters are always less  than __lowercase__
-  and __nonalphabetic characters__ (!, -, and so on) are also
included in the ordering
- When comparing [[📑strings (eloj)|strings]], [[📑javascript (eloj)|javascript]] goes over the
__characters__ from left to right, comparing the __Unicode__ codes one by one.



