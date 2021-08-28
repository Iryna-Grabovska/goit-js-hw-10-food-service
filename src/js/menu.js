import menu from './menu.json';
import menuTpl from '../templates/menu.hbs';

const menuRef = document.querySelector('.js-menu');
console.log(menuRef);
const lessons = menuTpl(menu);
menuRef.insertAdjacentHTML('beforeend', lessons);

document.body.querySelector('#theme-switch-toggle').addEventListener('change', (e) => {
  console.log(e)
  if (localStorage.getItem('theme') === 'dark-theme') {
    localStorage.removeItem('theme');
  }
  else {
    localStorage.setItem('theme', 'dark-theme')
  }
  addDarkTheme();
});
  function addDarkTheme() {
    if (localStorage.getItem('theme') === 'dark-theme') {
      document.body.classList.add('dark-theme');
    } else {
            document.body.classList.remove('dark-theme');

    }
  }
  addDarkTheme();
