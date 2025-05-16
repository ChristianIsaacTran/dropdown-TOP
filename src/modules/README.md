#   Dropdown menu 

Assigns dropdown menu logic based off of 
HTML class attribute and css style. 

#   Requirements

```
1. Requires a CSS file with at least .visible and .hidden classes defined:

.visible {
    visibility: visible;
}

.hidden {
    visibility: hidden;
}

2. Requires 2 HTML elements, one to toggle visibility and one to contain content.
HTML dropdown content element should have 2 class names with a space in between, one to describe the 
HTML element, and the "hidden" class. (Should start off as hiddden):

<button class="dropdown-toggle-button">toggle</button>
<ul class="dropdown-content hidden">
    <li>content 1</li>
    <li>content 2</li>
    <li>content 3</li>
</ul>


```

#   Usage

```
const toggle = document.querySelector(".dropdown-toggle-button");
const content = document.querySelector(".dropdown-content");

//Creates reveal dropdown logic to hardcoded HTML elements
const dropdown1 = dropdown(toggle, content);
dropdown1.createDropDownLogic();

```