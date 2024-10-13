---
tags: 
aliases:
  - bindings
  - let
tipo: 📑
referencia: "[[🏛️eloquent javascript (b1018)]]"
tema:
  - javascript
---

#nota/📑

# bindings 


The special word (keyword) __let__ indicates
that this sentence is going to define a __binding__. It is followed by the name of
the __binding__ and, if we want to immediately give it a value, by an  __=__  [[📑operators (eloj)|operator]] and an [[📑expression (eloj)|expression]].


If you ask for the [[📑values (eloj)|value]] of an empty binding,
you’ll get the value [[📑undefined (eloj)|undefined]].

The __=__ [[📑operators (eloj)|operator]] can be used at any time on existing __bindings__ to
disconnect them from their current value and have them point to a new one.

```javascript
let mood = "light";
console.log(mood);
// → light
mood = "dark";
console.log(mood);
// → dark
```


The words __var and const__ can also be used to create bindings, in a way similar
to let.

```javascript
var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);
// → Hello Ayda
```
__let__ [[📑statement (eloj)|statement]] may define multiple bindings

```javascript
let one = 1, two = 2;
console.log(one + two);
// → 3
```

- [ ] recordar  [start:: 2024-10-11]
