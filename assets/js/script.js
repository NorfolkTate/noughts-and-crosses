document.addEventListener("DOMContentLoaded", function() {
// Game play
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let isGameActive = true;
    
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
const scoreElement = document.getElementById('score');
const resetButton = document.querySelector('.reset button');

// Function to disable board until next move
function disableBoard() {
    boxes.forEach(box => box.style.pointerEvents = 'none');
}

// Function to reenable board after computer move
function enableBoard() {
    boxes.forEach(box => box.style.pointerEvents = 'auto');
}

   
// Event listeners for boxes
boxes.forEach((box, index) => {
    box.addEventListener('click', () => makeMove(index));
});

// Event listener for reset button
resetButton.addEventListener('click', resetGame);

// Function to make a move
function makeMove(index) {
    if (gameBoard[index] === '' && isGameActive && currentPlayer === 'X') {
        disableBoard();

        gameBoard[index] = currentPlayer;
        boxes[index].innerText = currentPlayer;

        let winner = checkWinner();
        if (winner) {
            endGame(winner);
        } else if (checkDraw()) {
            endGame(null);
        } else {
            currentPlayer = 'O';
            setTimeout(() => {
                computerMove();
                enableBoard();
            }, 500);
        }
    }
}

// Function for the computer to make a move
function computerMove() {
    if (isGameActive) {
        let bestMove = getBestMove();
        if (bestMove !== -1) {
            gameBoard[bestMove] = currentPlayer;

            let winner = checkWinner();
            if (winner) {
                endGame(winner);
            } else if (checkDraw()) {
                endGame(null);
            } else {
                currentPlayer = 'X'
            }
        } 
    }
}

// Function to make the best strategic move for computer
function getBestMove() {
    //check for a winning move
    for (let pattern of winPattern) {
        let [a, b, c] = pattern;
        if (gameBoard[a] === 'O' && gameBoard[b] === 'O' && gameBoard[c] === '') return c;
        if (gameBoard[a] === 'O' && gameBoard[b] === '' && gameBoard[c] === 'O') return b;
        if (gameBoard[a] === '' && gameBoard[b] === 'O' && gameBoard[c] === 'O') return a;
    }

        // Check and choose centre square if availalbe 
        if (gameBoard[4] === '') return 4;

        // Check and choose a corner if available
        const corners = [0, 2, 6, 8];
        for (let corner of corners) {
            if (gameBoard[corner] === '') return corner;
        }
}

// Function to check a winner
function checkWinner() {
for (let pattern of winPattern) {
        let [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return gameBoard[a];
        }
    }
    return null;
}

//Function to check for a draw
function checkDraw() {
    return gameBoard.every(cell => cell !== '') && !checkWinner();
} 

//Function to end game
function endGame(winner) {
    isGameActive = false;
    displayWinner(winner);
}

// Function to display the winner
function displayWinner(winner) {
    const scoreElement = document.getElementById('score');

    if (winner) {
        scoreElement.textContent = winner === 'X' ? 'You win!' : 'You lose!';
    } else {
        scoreElement.textContent = "It's a draw!";
    }
}

// Function to reset game
function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;

    boxes.forEach(box => {
        box.textContent = '';
        box.style.pointerEvents = 'auto';
    });
    scoreElement.textContent = '';
    enableBoard();
}
});