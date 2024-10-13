---
tags: 
aliases:
  - explicit line joining
tipo: 📑
referencia: "[[🏛️python language reference (c848)|python language reference]]"
tema:
  - python
---

#nota/📑

Two or more [[📑physical lines (plr)|physical line]] may be joined into logical lines using backslash characters (__\\__)
it is joined with the following forming a single [[📑logical lines (plr)|logical line]],


```python
if 1900 < year < 2100 and 1 <= month <= 12 \
   and 1 <= day <= 31 and 0 <= hour < 24 \
   and 0 <= minute < 60 and 0 <= second < 60:   # Looks like a valid date
        return 1
```

