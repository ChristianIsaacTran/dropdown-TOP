function dropdown(dropButton, dropContent) {
  function dropdownEventHandler() {
    const contentClass = dropContent.getAttribute("class");
    const classArr = contentClass.split(" ");
    const [className, visibleStatus] = classArr;

    /* 
      If visible, make it hidden.
      If hidden, make it visible.
    */
    if (visibleStatus === "visible") {
      dropContent.setAttribute("class", className + " hidden");
    } else {
      dropContent.setAttribute("class", className + " visible");
    }
  }

  function createDropDownLogic() {
    // Toggle the visibility of dropContent with dropButton while hovering over button
    dropButton.addEventListener("mouseenter", dropdownEventHandler);
    dropButton.addEventListener("mouseleave", dropdownEventHandler);

    // Content should stay visible when hovering over content, and dissapear when not hovering over content
    dropContent.addEventListener("mouseenter", dropdownEventHandler);
    dropContent.addEventListener("mouseleave", dropdownEventHandler);
  }

  return { createDropDownLogic };
}

export default dropdown;
