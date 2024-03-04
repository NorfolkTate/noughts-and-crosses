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
        
// updated function to make a move
function makeMove(index) {
    if (gameBoard[index] === '' && !checkWinner()) {
        gameBoard[index] = currentPlayer;
    }

    document.getElementsByClassName('box')[index].innerText = currentPlayer;

    let winner = checkWinner();
    if (winner) {
        endGame(winner);
    } else if (checkDraw()) {
        endGame(null);
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        if (currentPlayer === 'O' && isGameActive) {
            computerMove();
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
            document.getElementsByClassName('box')[computerChoice].innerText = currentPlayer;

            let winner = checkWinner();
            if (winner) {
                endGame(winner);
            } else if (checkDraw()) {
                endGame(null);
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }
}


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


// Function to display the winner
function displayWinner(winner) {
    const scoreElement = document.getElementById('score');

    if (winner) {
        scoreElement.textContent = winner === 'X' ? 'You win!' : 'You lose!';
    } else {
        scoreElement.textContent = "It's a draw!";
    }
    gameOver = true;
}

//Function to check fro a draw
function checkDraw() {
    return gameBoard.every(cell => cell !== '');
} 



// Function to reset game
function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    gameOver = false;

    boxes.forEach(box => {
        box.textContent = '';
    });

    scoreElement.textContent = '';
}
});