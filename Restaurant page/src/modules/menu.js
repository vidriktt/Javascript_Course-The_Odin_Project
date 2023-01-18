function loadMenu() {
    const pageContent = document.getElementById("pageContent");
    pageContent.innerHTML = "";

    const text = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.innerHTML = "À la carte";
    const h3 = document.createElement("h3");
    h3.innerHTML = "Bon Appétit!";

    text.appendChild(h2);
    text.appendChild(h3);
    pageContent.appendChild(text);
}

export default loadMenu;
