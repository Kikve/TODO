---
nombre_nota: "create virtual enviroment"
alias: create virtual enviroment
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "6a842b"
parent_hash: "aea5a"
---

#nota/📑

# 📑create virtual enviroment
<div class="hash">(6a842b)</div>

```python
python -m venv tutorial-env
```
This will create the `tutorial-env` directory if it doesn’t exist, and also create __directories__ inside it containing a copy of the Python interpreter and various supporting files.

linux activate
```python
source tutorial-env/bin/activate
```
This script is written for the bash shell. If you use the **csh** or **fish** shells, there are alternate `activate.csh` and `activate.fish` scripts you should use instead.)


windows active
```python
tutorial-env\Scripts\activate
```

To deactivate a virtual environment, type:
```python
deactivate
```

- [ ] recordar  [start:: 2024-10-18]
