const burger = document.querySelector('#sidebarToggle');
const sidebar = document.querySelector('#sidebar');

burger.addEventListener('click', () => {
    document.body.classList.toggle('show-sidebar')
})