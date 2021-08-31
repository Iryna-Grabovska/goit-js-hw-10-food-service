import menu from './menu.json';
import menuTpl from '../templates/menu.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const input = document.querySelector('#theme-switch-toggle');
const menuRef = document.querySelector('.js-menu');
const lessons = menuTpl(menu);
menuRef.insertAdjacentHTML('beforeend', lessons);


document.body.classList.add(localStorage.getItem('theme') 
    
  ? localStorage.getItem('theme') : Theme.LIGHT,);
  

if (document.body.classList.value === Theme.DARK) {
  input.checked = true;
}

input.addEventListener('change', e => {
  if (e.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);

    document.body.classList.add(Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);

    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);

  }
});
  
