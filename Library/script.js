class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() {
        return (
            `${this.title
            } by ${this.author
            }, ${this.pages
            }pages, ${this.read}`
        );
    }
}

const myLibrary = [
    new Book("title", "author", "pages", true),
    new Book("title", "author", "pages", false),
];

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
    displayLibrary(myLibrary);
}

function deleteClick(counter) {
    myLibrary.splice(counter, 1);
    displayLibrary(myLibrary);
}

function readClick(counter) {
    myLibrary[counter].read == true
        ? (myLibrary[counter].read = false)
        : (myLibrary[counter].read = true);
    displayLibrary(myLibrary);
}

function displayLibrary(myLibrary) {
    const table = document.getElementById("library");
    const tableBody = document.createElement("tbody");

    for (let i = 0; i < myLibrary.length; i++) {
        const row = document.createElement("tr");

        Object.values(myLibrary[i])
            .slice(0, -1)
            .forEach((cellData) => {
                const cell = document.createElement("td");
                cell.appendChild(document.createTextNode(cellData));
                row.appendChild(cell);
            });

        const buttonDelete = document.createElement("button");
        buttonDelete.innerHTML = "Delete";
        buttonDelete.addEventListener("click", () => {
            deleteClick(i);
        });
        const deleteCell = document.createElement("td");
        deleteCell.appendChild(buttonDelete);
        row.appendChild(deleteCell);

        const buttonRead = document.createElement("button");
        buttonRead.innerHTML = "Read";
        buttonRead.addEventListener("click", () => {
            readClick(i);
        });
        const readCell = document.createElement("td");
        readCell.appendChild(buttonRead);
        row.appendChild(readCell);

        row.dataset.index = i;
        tableBody.appendChild(row);
    }

    !document.querySelector("tbody")
        ? table.appendChild(tableBody)
        : table.firstChild.replaceWith(tableBody);
}

function submitClick(event) {
    event.preventDefault();
    const inputs = [];

    Array.from(form.elements).forEach((element) => {
        if (element.value != "Submit") {
            element.type != "checkbox"
                ? inputs.push(element.value)
                : inputs.push(element.checked);
        }
    });

    addBookToLibrary(inputs[0], inputs[1], inputs[2], inputs[3]);
}

window.onload = function () {
    displayLibrary(myLibrary);
    const submit = document.querySelector("#submit");
    submit.addEventListener("click", submitClick);
};
