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
  console.log(e);
  if (e !== "dark-theme") {
    document.body.classList.add('dark-theme');
            document.body.classList.remove('light -theme');

    localStorage.setItem('class', 'dark-theme')
    return;
  }
      document.body.classList.remove('light -theme');

  document.body.classList.add('dark-theme');
    localStorage.setItem('class', 'light-theme');
        

  
  });