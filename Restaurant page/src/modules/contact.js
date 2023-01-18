function loadContact() {
    const pageContent = document.getElementById("pageContent");
    pageContent.innerHTML = "";

    const text = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.innerHTML = "Contact";
    const p = document.createElement("p");
    p.innerHTML = "email@email.com";

    text.appendChild(h2);
    text.appendChild(p);
    pageContent.appendChild(text);
}

export default loadContact;
