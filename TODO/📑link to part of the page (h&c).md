---
nombre_nota: "link to part of the page"
alias: link to part of the page
letras: "h&c"
referencias: "[[TODO/🏛️html & css (31ab4).md]]"
tipo_nota: "📑"
hash: "75e10"
parent_hash: "206ab"
---

#nota/📑

# 📑link to part of the page
<div class="hash">(75e10)</div>

you need to identify the points in the page that the [[📑link (h&c)|link]] will go to. You do this using the [[📑id (h&c)|id attribute]]

To link to an element that uses an id attribute you use the [[📑link (h&c)|a element]] again, but the value of the __href attribute__([[📑link (h&c)|link]]) starts with the __# symbol__, followed by the __value__ of the [[📑id (h&c)|id attribute]] of the [[📑html elements (h&c)|element]] you want to [[📑link (h&c)|link]] to

```html
<h1 id="top">Film-Making Terms</h1>
<a href="#arc_shot">Arc Shot</a><br />
<a href="#interlude">Interlude</a><br />
<a href="#prologue">Prologue</a><br /><br />
<h2 id="arc_shot">Arc Shot</h2>
<p>A shot in which the subject is photographed by an
encircling or moving camera</p>
<h2 id="interlude">Interlude</h2>
<p>A brief, intervening film scene or sequence, not
specifically tied to the plot, that appears
within a film</p>
<h2 id="prologue">Prologue</h2>
<p>A speech, preface, introduction, or brief scene
preceding the the main action or plot of a film;
contrast to epilogue</p>
<p><a href="#top">Top</a></p>
```

---
- [ ] recordar  [start:: 2024-10-14]
