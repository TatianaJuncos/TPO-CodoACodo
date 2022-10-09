const btn_menu = document.querySelector('.btn-menu');

btn_menu.addEventListener('click', () => {
    const menu_lista = document.querySelector('.menu-lista');
    menu_lista.classList.toggle('mostrar');
})