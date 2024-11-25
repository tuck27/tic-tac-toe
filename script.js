const TicTac = {
    cPlayer: "X",
    state: Array(9).fill(null),
    gameOver: "false",

    init() {
        this.cBoard();
        document.getElementbyId("reset")
        document.addEventListener("click", () => this.reset());
    },

    cBoard() {
        const board = document.getElementById("board");
        board.innerHTML = "";
        this.state.forEach((_, i) => {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.index = i;
            board.appendChild(cell);
        })
    }
};