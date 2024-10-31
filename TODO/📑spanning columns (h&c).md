---
nombre_nota: "spanning columns"
alias: spanning columns
letras: "h&c"
referencias: "[[TODO/🏛️html & css (31ab4).md]]"
tipo_nota: "📑"
hash: "8852b8"
parent_hash: "206ab"
---

#nota/📑

# 📑spanning columns
<div class="hash">(8852b8)</div>

Sometimes you may need the entries in a [[📑table (h&c)|table]] to stretch across more than one column. The colspan attribute can be used on a [[📑th (h&c)|<th>]] or [[📑td (h&c)|<td>]] [[📑html elements (h&c)|element]] and indicates how many columns that cell should run across.

```html
<table>
    <tr>
        <th></th>
        <th>9am</th>
        <th>10am</th>
        <th>11am</th>
        <th>12am</th>
    </tr>
    <tr>
        <th>Monday</th>
        <td colspan="2">Geography</td>
        <td>Math</td>
        <td>Art</td>
    </tr>
    <tr>
        <th>Tuesday</th>
        <td colspan="3">Gym</td>
        <td>Home Ec</td>
    </tr>
</table>
```

- [ ] recordar  [start:: 2024-10-24]
