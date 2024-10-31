---
nombre_nota: dropdown list box
aliases:
  - dropdown list box
  - <select>
letras: h&c
referencias: "[[TODO/🏛️html & css (31ab4).md]]"
tipo_nota: 📑
hash: "20407"
parent_hash: 206ab
---

#nota/📑

# 📑dropdown list box
<div class="hash">(20407)</div>

A [[📑dropdown list box (h&c)|dropdown list box]]  (also known as a select box) allows users to select one option from a drop down list

[[📑name (h&c)|name]]
[[📑value (h&c)|value]]jkkj
[[📑size (h&c)|size]]

`<option>` is used to specify the options that the user can select from

__selected__ The selected attribute can be used to indicate the option that should be selected when the page loads

__multiple__ You can allow users to select multiple options from this list by adding the multiple attribute with a value of multiple.

```html
<form action="http://www.example.com/profile.php">
    <p>What device do you listen to music on?</p>
        <select name="devices">
        <option value="ipod">iPod</option>
        <option value="radio">Radio</option>
        <option value="computer">Computer</option>
    </select>
</form>
```

```html
<form action="http://www.example.com/profile.php">
    <p>Do you play any of the following instruments?
    		 (You can select more than one option by holding
    		 down control on a PC or command key on a Mac
    		 while selecting different options.)</p>

    <select name="instruments" size="3" multiple="multiple">
    		 <option value="guitar" selected="selected"> Guitar</option>
    		 <option value="drums">Drums</option>
    		 <option value="keyboard" selected="selected">Keyboard</option>
    		 <option value="bass">Bass</option>
    </select>
</form>
```
- [ ] recordar  [start:: 2024-10-25]
