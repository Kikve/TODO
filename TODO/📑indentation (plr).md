---
tags: 
aliases:
  - indentation
tipo: 📑
referencia: "[[🏛️python language reference (c848)|python language reference]]"
tema:
  - python
  - syntax
---

#nota/📑

Leading whitespace (spaces and tabs) at the beginning of a [[📑logical lines (plr)|logical lines]] is used to compute the indentation level of the line, which in turn is used to determine the grouping of statements.

**Indentation is rejected as inconsistent if a source file mixes tabs and spaces in a way that makes the meaning dependent on the worth of a tab in spaces;**

At the beginning of each logical line, the line’s indentation level is compared to the top of the stack. If it is equal, nothing happens. If it is larger, it is pushed on the stack, and one INDENT token is generated.

