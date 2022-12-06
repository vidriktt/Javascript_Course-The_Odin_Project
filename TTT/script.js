const gameboard = (() => {
    let gameboard = ["", "", "X", "", "O", "", "X", "", ""];
    return { gameboard };
})();

const displayGameboard = (() => {
    const fillGameboard = () => {
        table = document.getElementById("gameboard");

        let tableBody = document.createElement('tbody');
        let row = document.createElement('tr');

        for (let i = 0; i < gameboard.gameboard.length; i++) {
            if (i == 3 || i == 6)
                row = document.createElement('tr');

            let cell = document.createElement('td');
            cell.setAttribute("id", i);
            cell.appendChild(document.createTextNode(gameboard.gameboard[i]));
            row.appendChild(cell);
            tableBody.appendChild(row);
        }

        table.appendChild(tableBody);
        !document.querySelector("tbody") ? table.appendChild(tableBody) : table.firstChild.replaceWith(tableBody)
        document.body.appendChild(table);

        return { table };
    };

    fillGameboard();

    return { fillGameboard };
})();

const Player = (number, mark, turn) => {
    // const sayHello = () => console.log('hello!');

    return { number, mark, turn };
};

const game = (() => {
    const player1 = Player(1, "X", true);
    const player2 = Player(2, "O", false);

    const cellClick = () => {
        const table = document.querySelector('#gameboard tbody');

        table.addEventListener('click', function (e) {
            const cell = e.target.closest('td');
            // if (!cell) { return; }
            if (cell.textContent != "") { return; }

            if (player1.turn == true) {
                gameboard.gameboard[cell.id] = "X";
                player1.turn = false;
                player2.turn = true;
                document.getElementById("playerturn").textContent = "2";
            } else {
                gameboard.gameboard[cell.id] = "O";
                player2.turn = false;
                player1.turn = true;
                document.getElementById("playerturn").textContent = "1";
            }

            displayGameboard.fillGameboard();
            cellClick();
        });

        return { table };
    };

    cellClick();

    return { player1, player2, cellClick };
})();
