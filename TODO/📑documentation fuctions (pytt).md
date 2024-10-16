---
nombre_nota: "documentation functions"
aliases:
  - documentation functions
  - documentation on functions
letras: "pytt"
referencias: "[[TODO/🏛️python tutorial (dcb4c).md]]"
tipo_nota: "📑"
hash: "94e7cf"
parent_hash: "aea5a"
---

#nota/📑

# 📑documentation functions
<div class="hash">(94e7cf)</div>

## First line 

- The __first line__ should always be a short
    - Be a _verb_ describing a [[📑functions (pytt)|function]]’s operation). 
    - Should begin with a capital letter and end with a period.


- If there are more lines in the __documentation string__, the second line should be blank

## Next

- The __following lines__ should be one or more paragraphs describing the object’s calling conventions, its side effects, etc.



```python
def my_function():
    """Do nothing, but document it.

    No, really, it doesn't do anything.
    """
    pass

print(my_function.__doc__)
```


- [ ] recordar  [start:: 2024-10-12]