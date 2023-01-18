function loadHome() {
    const pageContent = document.getElementById("pageContent");
    pageContent.innerHTML = "";

    const headerText = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.innerHTML = "SCANDIC BRUNCH";
    const h3 = document.createElement("h3");
    h3.innerHTML = "The best place for Your morning to lunch relaxation and coffee!";

    headerText.appendChild(h1);
    headerText.appendChild(h3);
    pageContent.appendChild(headerText);
}

export default loadHome;
