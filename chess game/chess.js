// chess.js
document.addEventListener("DOMContentLoaded", function () {
    const chessboard = document.getElementById("chessboard");

    // Create chessboard squares
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement("div");
            square.className = `square ${((row + col) % 2 === 0) ? 'light' : 'dark'}`;
            square.dataset.row = row;
            square.dataset.col = col;
            chessboard.appendChild(square);
        }
    }

    // Initial chess pieces setup (using Unicode symbols)
    const pieces = [
        "♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜",
        "♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟",
        "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "",
        "♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙",
        "♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"
    ];

    const squares = document.querySelectorAll(".square");

    // Place pieces on the chessboard
    squares.forEach((square, index) => {
        if (pieces[index] !== "") {
            const piece = document.createElement("div");
            piece.className = "piece";
            piece.innerHTML = pieces[index];
            square.appendChild(piece);
        }
    });

    // Add click event listeners for interactive chessboard
    squares.forEach((square) => {
        square.addEventListener("click", handleSquareClick);
    });

    function handleSquareClick(event) {
        const clickedSquare = event.target;
        const clickedRow = clickedSquare.dataset.row;
        const clickedCol = clickedSquare.dataset.col;

        // Implement your move logic here
        console.log(`Clicked on square at row ${clickedRow}, col ${clickedCol}`);
    }
});
