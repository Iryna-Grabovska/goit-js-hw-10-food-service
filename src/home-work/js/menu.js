
import menuTpl from "../templates/menu.hbs";
console.log(menuTpl);
import menu from "./menu.json";
console.log(menuTpl(menu));

function greatMenu(menu) {
  return menu.map(menuTpl).join("");
  
}
const greatItems = document.createElement("ul");
greatItems.appendChild(menu);