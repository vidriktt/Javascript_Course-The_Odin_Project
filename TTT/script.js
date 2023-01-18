const gameboard = (() => {
    const gameboard = ["", "", "", "", "", "", "", "", ""];
    return { gameboard };
})();

const displayGameboard = (() => {
    const fillGameboard = () => {
        table = document.getElementById("gameboard");

        const tableBody = document.createElement("tbody");
        let row = document.createElement("tr");

        for (let i = 0; i < gameboard.gameboard.length; i++) {
            if (i == 3 || i == 6) row = document.createElement("tr");

            const cell = document.createElement("td");
            cell.setAttribute("id", i);
            cell.appendChild(document.createTextNode(gameboard.gameboard[i]));
            row.appendChild(cell);
            tableBody.appendChild(row);
        }

        table.appendChild(tableBody);
        !document.querySelector("tbody")
            ? table.appendChild(tableBody)
            : table.firstChild.replaceWith(tableBody);
        document.body.appendChild(table);

        return { table };
    };

    fillGameboard();

    return { fillGameboard };
})();

const Player = (number, mark, turn) => ({ number, mark, turn });

const game = (() => {
    const player1 = Player(1, "X", true);
    const player2 = Player(2, "O", false);

    document.querySelector("button").onclick = () => {
        for (let i = 0; i < gameboard.gameboard.length; i++) {
            gameboard.gameboard[i] = "";
            displayGameboard.fillGameboard();
            game.cellClick();
        }
    };

    const cellClick = () => {
        const table = document.querySelector("#gameboard tbody");

        table.addEventListener("click", (e) => {
            const cell = e.target.closest("td");
            if (cell.textContent != "") return;

            let current_player;

            if (player1.turn == true) {
                current_player = player1.number;
                gameboard.gameboard[cell.id] = "X";
                player1.turn = false;
                player2.turn = true;
                document.getElementById("playerturn").textContent = "2";
            } else {
                current_player = player2.number;
                gameboard.gameboard[cell.id] = "O";
                player2.turn = false;
                player1.turn = true;
                document.getElementById("playerturn").textContent = "1";
            }

            displayGameboard.fillGameboard();
            const game_end = gameEnd(parseInt(cell.id));
            if (game_end) {
                alert(`Player ${current_player} wins!`);
            } else cellClick();
        });

        return { table };
    };

    const gameEnd = (cell_id) => {
        const cell_value = gameboard.gameboard[cell_id];

        if (checkRow(cell_id, cell_value)) return true;
        if (checkCol(cell_id, cell_value)) return true;
        if (checkDiagonal(cell_id, cell_value)) return true;

        if (!gameboard.gameboard.includes("")) alert("Draw!");

        return false;
    };

    const checkRow = (cell_id, cell_value) => {
        if (cell_id == 0 || cell_id == 1 || cell_id == 2) {
            if (
                cell_value == gameboard.gameboard[0]
                && cell_value == gameboard.gameboard[1]
                && cell_value == gameboard.gameboard[2]
            ) { return true; }
        } else if (cell_id == 3 || cell_id == 4 || cell_id == 5) {
            if (
                cell_value == gameboard.gameboard[3]
                && cell_value == gameboard.gameboard[4]
                && cell_value == gameboard.gameboard[5]
            ) { return true; }
        } else if (
            cell_value == gameboard.gameboard[6]
                && cell_value == gameboard.gameboard[7]
                && cell_value == gameboard.gameboard[8]
        ) return true;
    };

    const checkCol = (cell_id, cell_value) => {
        if (cell_id == 0 || cell_id == 3 || cell_id == 6) {
            if (
                cell_value == gameboard.gameboard[0]
                && cell_value == gameboard.gameboard[3]
                && cell_value == gameboard.gameboard[6]
            ) { return true; }
        } else if (cell_id == 1 || cell_id == 4 || cell_id == 7) {
            if (
                cell_value == gameboard.gameboard[1]
                && cell_value == gameboard.gameboard[4]
                && cell_value == gameboard.gameboard[7]
            ) { return true; }
        } else if (
            cell_value == gameboard.gameboard[2]
                && cell_value == gameboard.gameboard[5]
                && cell_value == gameboard.gameboard[8]
        ) return true;
    };

    const checkDiagonal = (cell_id, cell_value) => {
        if (cell_id == 0 || cell_id == 4 || cell_id == 8) {
            if (
                cell_value == gameboard.gameboard[0]
                && cell_value == gameboard.gameboard[4]
                && cell_value == gameboard.gameboard[8]
            ) { return true; }
        }
        if (cell_id == 2 || cell_id == 4 || cell_id == 6) {
            if (
                cell_value == gameboard.gameboard[2]
                && cell_value == gameboard.gameboard[4]
                && cell_value == gameboard.gameboard[6]
            ) { return true; }
        }
    };

    cellClick();
    gameEnd();

    return {
        player1, player2, cellClick, gameEnd,
    };
})();
