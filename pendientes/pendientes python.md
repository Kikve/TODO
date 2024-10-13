- [ ] txt     **if**  txt **else** txt 
revisar estructura

revisar estructura
```python

def find_outlier(int):
    odds = [x for x in int if x%2!=0]
    evens= [x for x in int if x%2==0]
    return odds[0] if len(odds)<len(evens) else evens[0]
```



- [ ]   buscar informacion sobre zip() 

- [ ] revisar _divmod_ y _format_
```python
def make_readable(seconds):
    hours, seconds = divmod(seconds, 60 ** 2)
    minutes, seconds = divmod(seconds, 60)
    return '{:02}:{:02}:{:02}'.format(hours, minutes, seconds)
```

- [ ] revisar group by 🛫 2024-10-11
```python
from itertools import groupby

def unique_in_order(iterable):
    return [k for (k, _) in groupby(iterable)]

```


