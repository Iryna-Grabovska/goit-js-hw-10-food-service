import menu from './menu.json';
import menuTpl from '../templates/menu.hbs';

const menuRef = document.querySelector('.js-menu');
console.log(menuRef);
const lessons = menuTpl(menu);
menuRef.insertAdjacentHTML('beforeend', lessons);


// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// }
const themeSwitch = document.querySelector('#theme-switch-toggle');
console.log(themeSwitch);
themeSwitch.addEventListener('change', (e) => {
  // if (e) {
  //   e.classList.add('light-theme');

  //   e.classList.remove('dark-theme');
  //   return;

  // }
  // e.classList.add('dark-theme');
  // e.classList.remove('light-theme');
})