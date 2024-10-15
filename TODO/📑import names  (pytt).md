---
tags: 
aliases:
  - import names from module
  - import names directly in actual module
  - import names
tipo: 📑
referencia: 
tema:
---

#nota/📑

# import names


imports __names__ from a [[📑module (pytt)|module]] or [[📑packages (pytt)|package]] directly into the importing module’s namespace.

```python
from fibo import fib, fib2

fib(500)
0 1 1 2 3 5 8 13 21 34 55 89 144 233 377
```

```python
from sound.effects.echo import echofilter
```

import all __names__

> [!important] 
> poorly readable code
>
>```python
from fibo import *
>
>fib(500)
0 1 1 2 3 5 8 13 21 34 55 89 144 233 377
>```

- [ ] recordar  [start:: 2024-10-11]