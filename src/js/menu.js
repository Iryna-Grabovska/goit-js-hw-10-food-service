import menu from './menu.json';
import menuTpl from '../templates/menu.hbs';

const menuRef = document.querySelector('.js-menu');
const lessons = menuTpl(menu);
menuRef.insertAdjacentHTML('beforeend', lessons);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

document.body.addEventListener('change', (e) => {
 console.log(document.body)
  if (localStorage.getItem('theme') === Theme.DARK) {
    console.log(e);
    localStorage.removeItem('theme')

  }
  else {
    localStorage.setItem('theme', Theme.DARK)
  }
  addDarkTheme();
});
//  if (document.body.classList.value === Theme.DARK) {
//   input.checked = true;
//   };

function addDarkTheme() {
  if (localStorage.getItem('theme') === Theme.DARK) {
      document.body.classList.add(Theme.DARK);
    } else {
            document.body.classList.remove(Theme.DARK);
    }
  }
  addDarkTheme();
