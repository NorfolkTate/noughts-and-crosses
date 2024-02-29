document.addEventListener("DOMContentLoaded", function() {
    // Game play
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let isGameActive = true;
    let winner = null;

    const boxes = document.querySelectorAll('.box');
    const scoreElement = document.querySelector('.score');
    const resetButton = document.querySelector('.reset button');

    // Event listeners for boxes
    boxes.forEach((box, index) => {
    box.addEventListener('click', () => makeMove(index));
  });
});

function makeMove(index) {
    if (isGameActive && gameBoard[index] === '') {
        gameBoard[index] = currentPlayer;
        updateBoard();
        checkForWinner();
    }
}

function checkWinner() {

}

function resetGame() {

}