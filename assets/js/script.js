document.addEventListener("DOMContentLoaded", function() {
// Game play
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let isGameActive = true;
let winner = null;

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

const boxes = document.querySelectorAll('.box');
const scoreElement = document.querySelector('.score');
const resetButton = document.querySelector('.reset button');


// Event listeners for boxes
boxes.forEach((box, index) => {
    box.addEventListener('click', () => makeMove(index));
});

// Event listener for reset button
resetButton.addEventListener('click', resetGame);
    

function makeMove(index) {
    if (gameBoard[index] === '' && !checkWinner()) {
        gameBoard[index] = currentPlayer;
        document.getElementsByClassName('box')[index].innerText = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        checkWinner();
    }
}

/* Function to make a move
function makeMove(index) {
    if (isGameActive && gameBoard[index] === '') {
      gameBoard[index] = currentPlayer;
      updateBoard();
      checkForWinner();

      if (isGameActive) {
        switchPlayer();
        if (currentPlayer === 'O') {
          // Computer's turn
          setTimeout(makeComputerMove);
        }
      }
  }
} */


// Function to check a winner
function checkWinner() {
    let winPattern = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let pattern of winPattern) {
        let [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            winner = gameBoard[a];
            isGameActive = false;
            displayWinner();
            break;
        }
    }
}

// Function to reset game
function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    winner = null;
    updateBoard();
    scoreElement.textContent = '';
}
});