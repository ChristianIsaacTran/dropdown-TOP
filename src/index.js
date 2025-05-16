import "./style/style.css";
// import dropdown from "./modules/dropdown.js";
import dropdown from "create-dropdown-logic";

// Query the hardcoded dropdown button and options
const dropButton1 = document.querySelector(".dropdown-toggle.drop1");
const dropContent1 = document.querySelector(".dropdown-content.drop1");
const dropButton2 = document.querySelector(".dropdown-toggle.drop2");
const dropContent2 = document.querySelector(".dropdown-content.drop2");

//Add dropdown logic to both dropdowns
const dropdown1 = dropdown(dropButton1, dropContent1);
const dropdown2 = dropdown(dropButton2, dropContent2);

dropdown1.createDropDownLogic();
dropdown2.createDropDownLogic();
