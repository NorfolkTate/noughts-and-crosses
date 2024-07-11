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
    boxes.forEach(pointerEvents);
}

// Function to reenable board after computer move
function enableBoard() {
    boxes.forEach(pointerEvents);
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
            if (currentPlayer === 'O' && isGameActive) {
                setTimeout(computerMove, 500);
                enableBoard();
            }
        }
    }
}

// Function for the computer to make a move
function computerMove() {
    if (isGameActive) {
        let emptyCells = gameBoard.reduce((acc, cell, index) => {
            if (!cell) {
                acc.push(index);
            }
            return acc;
        }, []);

        if (emptyCells.length > 0) {
            let randomIndex = Math.floor(Math.random() * emptyCells.length);
            let computerChoice = emptyCells[randomIndex];

            gameBoard[computerChoice] = currentPlayer;
            boxes[computerChoice].innerText = currentPlayer;

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
    });
    scoreElement.textContent = '';
}
});