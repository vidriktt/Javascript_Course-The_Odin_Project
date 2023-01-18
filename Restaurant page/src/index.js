import "./style.css";
import initialLoad from "./modules/page_load";
import loadHome from "./modules/home";
import loadMenu from "./modules/menu";
import loadContact from "./modules/contact";

function navMenu() {
    const homeBtn = document.getElementById("home");
    const menuBtn = document.getElementById("menu");
    const contactBtn = document.getElementById("contact");

    homeBtn.addEventListener("click", loadHome);
    menuBtn.addEventListener("click", loadMenu);
    contactBtn.addEventListener("click", loadContact);
}

function init() {
    initialLoad();
    loadHome();
    navMenu();
}

init();
