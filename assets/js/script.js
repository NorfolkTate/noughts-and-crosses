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
// Function to make a move
function makeMove(index) {
    if (isGameActive && gameBoard[index] === '') {
        gameBoard[index] = currentPlayer;
        updateBoard();
        checkForWinner();
        if (isGameActive) {
            switchPlayer();
        }
    }
}
// Function to check a winner
function checkWinner() {
    let winPattern = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
}
// Function to reset game
function resetGame() {

}