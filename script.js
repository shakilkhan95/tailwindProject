let navIcon = document.querySelector('#menu-btn');
let navItems = document.querySelector('#navItems');
let nav = document.querySelectorAll('#navItems > li')

function toggle() {
    navItems.classList.toggle('hidden');
}

navIcon.addEventListener('click', toggle);

nav.forEach(li => {
    li.addEventListener('click', toggle);
});