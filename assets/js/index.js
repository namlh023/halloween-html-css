let menu_mobile = document.getElementById("menu-mobile")
let dropdown_menu = document.getElementById("dropdown-menu")
let close_btn = document.getElementById("close-btn")

menu_mobile.addEventListener('click', () => {
    dropdown_menu.style.top = '0';
})

close_btn.addEventListener('click', () => {
    dropdown_menu.style.top = '-400px';
})