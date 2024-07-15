document.addEventListener("DOMContentLoaded", function() {
// Game play
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let isGameActive = true;
    
let winPattern = [ // code helpfully provided by stack overflow (linked in Readme)
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
    boxes.forEach(box => box.style.pointerEvents = 'none'); // code helpfully explained by mdn web docs (linked in Readme)
}

// Function to reenable board after computer move
function enableBoard() {
    boxes.forEach(box => box.style.pointerEvents = 'auto'); // code helpfully explained by mdn web docs (linked in Readme)
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
        gameBoard[index] = currentPlayer;
        boxes[index].innerText = currentPlayer; // code helpfully inspired by study group (linked in Readme)

        let winner = checkWinner();
        if (winner) {
            endGame(winner);
        } else if (checkDraw()) {
            endGame(null);
        } else {
            currentPlayer = 'O';
            disableBoard();
            setTimeout(() => {
                computerMove();
            }, 500); // code helpfully provided by stack overflow (linked in Readme)
        }
    }
}

// Function for the computer to make a move
function computerMove() {
    if (isGameActive) {
        let bestMove = getBestMove();
        if (bestMove !== -1) { // code helpfully inspired by study group (linked in Readme)
            gameBoard[bestMove] = currentPlayer;
            boxes[bestMove].innerText = currentPlayer;

            let winner = checkWinner();
            if (winner) {
                endGame(winner);
            } else if (checkDraw()) {
                endGame(null);
            } else {
                currentPlayer = 'X';
                enableBoard();
            }
        } 
    }
}

// Function to make the best strategic move for computer
function getBestMove() {
    //check for a winning move
    for (let pattern of winPattern) {
        let [a, b, c] = pattern;
        if (gameBoard[a] === 'O' && gameBoard[b] === 'O' && gameBoard[c] === '') return c; // code helpfully inspired by stack overflow (linked in Readme)
        if (gameBoard[a] === 'O' && gameBoard[b] === '' && gameBoard[c] === 'O') return b;
        if (gameBoard[a] === '' && gameBoard[b] === 'O' && gameBoard[c] === 'O') return a;
    }

        // block player's winning move
        for (let pattern of winPattern) {
            let [a, b, c] = pattern;
            if (gameBoard[a] === 'X' && gameBoard[b] === 'X' && gameBoard[c] === '') return c;
            if (gameBoard[a] === 'X' && gameBoard[b] === '' && gameBoard[c] === 'X') return b;
            if (gameBoard[a] === '' && gameBoard[b] === 'X' && gameBoard[c] === 'X') return a;
    }

        // Check and choose centre square if availalbe 
        if (gameBoard[4] === '') return 4;

        // Check and choose a corner if available
        const corners = [0, 2, 6, 8];
        for (let corner of corners) {
            if (gameBoard[corner] === '') return corner;
        }

        let emptyCells = gameBoard.reduce((acc, cell, index) => {
            if (!cell) {
                acc.push(index); // code helpfully explained by progress telerik (linked in Readme)
            }
            return acc;
        }, []);

        return emptyCells.length > 0 ? emptyCells[Math.floor(Math.random() * emptyCells.length)] : -1; // code helpfully explained by w3 schools (linked in Readme)
}

// Function to check a winner
function checkWinner() {
for (let pattern of winPattern) {
        let [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) { // code helpfully inspired by thought co (linked in Readme)
            return gameBoard[a];
        }
    }
    return null;
}

//Function to check for a draw
function checkDraw() {
    return gameBoard.every(cell => cell !== '') && !checkWinner(); // code helpfully inspired by thought co (linked in Readme)
} 

//Function to end game
function endGame(winner) {
    isGameActive = false;
    disableBoard();
    displayWinner(winner);
}

// Function to display the winner
function displayWinner(winner) {
    const scoreElement = document.getElementById('score');

    if (winner) {
        scoreElement.textContent = winner === 'X' ? 'You win!' : 'You lose!'; //code helpfully explained by java t point (linked in Readme)
    } else {
        scoreElement.textContent = "It's a draw!"; //code helpfully explained by java t point (linked in Readme)
    }
}

// Function to reset game
function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;

    boxes.forEach(box => {
        box.textContent = '';
        box.style.pointerEvents = 'auto'; // code helpfully explained by mdn web docs (linked in Readme)
    });
    scoreElement.textContent = '';
    enableBoard();
}
});