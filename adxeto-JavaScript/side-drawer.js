const sideDrawerEl = document.getElementById('side-drawer');
const hamburgerLinkEl = document.querySelector('.hamburger-link');
const asideHamburgerClosingEl = document.querySelector('.aside-closing');

function openSideDrawer () {
  sideDrawerEl.style.display = 'block';
}

function closeSideDrawer () {
  sideDrawerEl.style.display = 'none';
}

hamburgerLinkEl.addEventListener('click', openSideDrawer);
asideHamburgerClosingEl.addEventListener('click', closeSideDrawer);
