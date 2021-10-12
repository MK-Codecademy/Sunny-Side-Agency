const burgerIcon = document.getElementById('burger-icon');
const menu = document.getElementById('nav-menu');

let show = false;

const openMenu = (e) => {
  show = !show;

  if (show) {
    menu.style.display = 'flex';
  } else {
    menu.style.display = 'none';
  }
}

burgerIcon.addEventListener('click', openMenu)