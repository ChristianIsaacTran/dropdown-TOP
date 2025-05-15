# Dropdown menu part for "Dynamic User Interface Interactions"

This is part of the UI interactions section in the javascript course in the odin project. I am to make a javascript based 
dropdown menu, so I am designing not a whole webpage, but practicing making smaller interactible UI parts.

This dropdown should have 2 main moving parts as stated in the lesson:
    1. A button that toggles the dropdown content's visibility
    2. The dropdown content itself

Dropdown menus are used everywhere. For navigation, tools, options, or anything, dropdowns are a very common 
thing to code in javascript in web development.

Recommended lesson steps for the dropdown menu:
    1. Menu can be visible on click or hover (I'm going to choose hover since its more difficult than click toggle)

    2. I am allowed to hardcode the menu items in HTML, but hide/reveal them with javascript. We
    can accomplish this by adding a html class "visible" or using javascript to manually add the 
    visibility CSS property style. 

    3. Make sure the javascript code is reusable. Should be able to create multiple drop-downs on 
    a page using HTML and reuse the javascript logic to hide/reveal them.

    4. If I bundle my code into a module, I can publish it to NPM as a package. I can then 
    install it as a dependency and use it anytime I like. Practice publishing NPM packages.

My plan for a resuable dropdown button: 
    1. Use a factory function to pass logic of 
    any dropdown button and menu options 
    so that I can manipulate it within the 
    dropdown button.
    
    2. Code it for hovering