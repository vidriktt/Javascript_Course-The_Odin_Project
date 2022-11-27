const Gameboard = (() => {
    let gameboard = ["", "", "X", "", "O", "", "X", "", ""];
    return { gameboard };
})();

const displayGameboard = (() => {
    let table = document.createElement('table');
    console.log(table);

    if (document.getElementById("gameboard")) {
        table = document.getElementById("gameboard");
    } else {
        table.setAttribute("id", "gameboard");
    }

    let tableBody = document.createElement('tbody');
    let row = document.createElement('tr');

    for (let i = 0; i < Gameboard.gameboard.length; i++) {
        if (i == 3 || i == 6)
            row = document.createElement('tr');

        let cell = document.createElement('td');
        cell.appendChild(document.createTextNode(Gameboard.gameboard[i]));
        row.appendChild(cell);
        tableBody.appendChild(row);
    }

    !document.querySelector("table") ? document.body.appendChild(table) : table.replaceWith(table)
    document.body.appendChild(table);
    console.log(table);
    return { table };
})();

const Player = () => {

    return {};
};

const Game = () => {

    return {};
};
