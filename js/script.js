// Obtengo el elemento con id menu
const menu = document.getElementById("menu")
//obtengo el elemento con clase .menu-icon
const burger = document.querySelector('#burger-icon')

function openClose() {
    // Open
    if (menu.className === "ul-nav") {
        menu.className = "active"
    } //Close
    else {
        menu.className = "ul-nav"
    }
    burger.classList.toggle("open")
}