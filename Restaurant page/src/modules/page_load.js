function createNav() {
    const navMenu = document.createElement("nav");
    navMenu.setAttribute("id", "nav-menu");

    const homeBtn = document.createElement("button");
    homeBtn.setAttribute("id", "home");
    homeBtn.innerHTML = ("HOME");

    const menuBtn = document.createElement("button");
    menuBtn.setAttribute("id", "menu");
    menuBtn.innerHTML = ("MENU");

    const contactBtn = document.createElement("button");
    contactBtn.setAttribute("id", "contact");
    contactBtn.innerHTML = ("CONTACT");

    navMenu.appendChild(homeBtn);
    navMenu.appendChild(menuBtn);
    navMenu.appendChild(contactBtn);

    return navMenu;
}

function initialLoad() {
    const content = document.getElementById("content");

    const contentImage = document.createElement("img");
    contentImage.src = "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80";

    const spacer = document.createElement("div");
    spacer.setAttribute("id", "spacer");

    const rightContent = document.createElement("div");
    rightContent.appendChild(createNav());

    const pageContent = document.createElement("div");
    pageContent.setAttribute("id", "pageContent");
    rightContent.appendChild(pageContent);

    content.appendChild(contentImage);
    content.appendChild(rightContent);
    content.appendChild(spacer);
}

export default initialLoad;
