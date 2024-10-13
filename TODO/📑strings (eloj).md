---
tags: 
aliases:
  - strings
  - string
tipo: 📑
referencia: "[[🏛️eloquent javascript (b1018)]]"
tema:
  - javascript
---

#nota/📑

# strings 

__Strings__, too, have to be modeled as a series of bits to be able to exist inside
the computer. The way [[📑javascript (eloj)|javascript]] does this is based on the __Unicode standard__.

__Strings__ are used to represent text. They
are written by enclosing their content in quotes.

```javascript
`Down on the sea`
"Lie on the ocean"
'Float on the ocean'
```

> [!NOTE] 
[[📑javascript (eloj)|javascript]]
representation uses 16 bits per string element, which can describe up to 216
different characters. But Unicode defines more


__Backtick-quoted strings__, usually called template literals, can do a few more
tricks.

```javascript
`half of 100 is ${100 / 2}`
```

