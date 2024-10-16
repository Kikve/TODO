---
nombre_nota: "executing modules"
aliases:
  - executing modules
  - modules as scripts
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "4fda2c"
parent_hash: "aea5a"
---

#nota/📑

# 📑executing modules
<div class="hash">(4fda2c)</div>


the code in the [[📑module (pytt)|module]] will be executed, just as if you __imported__ it

```python
python fibo.py <arguments>
```


> [!NOTE]
>adding this __code__ at the end of your [[📑module (pytt)|module]] you can make the file __usable as a script__ as well as an importable [[📑module (pytt)|module]], because the code that parses the command line _only runs if the module is executed_ as the __“main”__ file:
>
>```python
>if __name__ == "__main__":
>    import sys
>    fib(int(sys.argv[1]))
>```
>


- [ ] recordar  [start:: 2024-10-14]
