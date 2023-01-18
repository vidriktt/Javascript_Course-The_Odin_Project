const initialLoad = () => {
    const content = document.getElementById("content");

    const headerImage = document.createElement("img");
    headerImage.src = "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80";

    const headerText = document.createElement("div");
    headerText.setAttribute("id", "header-text");
    const h1 = document.createElement("h1");
    h1.innerHTML = "SCANDIC BRUNCH";
    const h3 = document.createElement("h3");
    h3.innerHTML = "The best place for Your morning to lunch relaxation and coffee!";

    const spacer = document.createElement("div");
    spacer.setAttribute("id", "spacer");

    headerText.appendChild(h1);
    headerText.appendChild(h3);
    content.appendChild(headerImage);
    content.appendChild(headerText);
    content.appendChild(spacer);
};

export default initialLoad;
