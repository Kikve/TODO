---
nombre_nota: "requirements"
alias: requirements
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "8ac92a"
parent_hash: "aea5a"
---

#nota/📑

# 📑requirements
<div class="hash">(8ac92a)</div>


will produce a similar [[📑all packages installed (pytt)|list of installed packages]], but the output uses the format that `python -m pip install` expects. A common convention is to put this list in a `requirements.txt` file:
```bash
(tutorial-env) $ python -m pip freeze > requirements.txt
(tutorial-env) $ cat requirements.txt
novas==3.1.1.3
numpy==1.9.2
requests==2.7.0
```

The `requirements.txt` can then be committed to version control and shipped as part of an application. Users can then install all the necessary packages with `install -r`:

```bash
(tutorial-env) $ python -m pip install -r requirements.txt
Collecting novas==3.1.1.3 (from -r requirements.txt (line 1))
  ...
Collecting numpy==1.9.2 (from -r requirements.txt (line 2))
  ...
Collecting requests==2.7.0 (from -r requirements.txt (line 3))
  ...
Installing collected packages: novas, numpy, requests
  Running setup.py install for novas
Successfully installed novas-3.1.1.3 numpy-1.9.2 requests-2.7.0
```
- [ ] recordar  [start:: 2024-10-18]
