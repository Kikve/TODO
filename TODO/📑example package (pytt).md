---
nombre_nota: "example package"
alias: example package
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "540069"
parent_hash: "aea5a"
---

#nota/📑

# 📑example package
<div class="hash">(540069)</div>

Here’s a possible structure for your package (expressed in terms of a hierarchical filesystem):

```
sound/                          Top-level package
      __init__.py               Initialize the sound package
      formats/                  Subpackage for file format conversions
              __init__.py
              wavread.py
              wavwrite.py
              aiffread.py
              aiffwrite.py
              auread.py
              auwrite.py
              ...
      effects/                  Subpackage for sound effects
              __init__.py
              echo.py
              surround.py
              reverse.py
              ...
      filters/                  Subpackage for filters
              __init__.py
              equalizer.py
              vocoder.py
              karaoke.py
              ...

```


- [ ] recordar  [start:: 2024-10-15]
