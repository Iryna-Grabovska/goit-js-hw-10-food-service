import menu from "./menu.json";
import menuTpl from "../templates/menu.hbs";

const menuRef = document.querySelector('.js-menu');
console.log(menuRef);
const lessons = menuTpl(menu);
menuRef.insertAdjacentHTML('beforeend', lessons);


