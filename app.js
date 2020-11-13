const gameCanvas = document.getElementById('game-board');
const canvasContext = gameCanvas.getContext('2d');
let snakeY = + 10;
let snakeX = + 10;

let snakeBody = [
    { x: 100, y: 300 },
    { x: 80, y: 300 },
    { x: 60, y: 300 }
]

snakeBodyCopy = [
    { x: 100, y: 300 },
    { x: 80, y: 300 },
    { x: 60, y: 300 }
]

function gameRefresh() {
    setTimeout(function refresh() {
        drawGameBoard(); //!Clears the game Canvas
        moveSnake();
        drawSnake(); //! Draws the snake body parts
        gameRefresh();
    }, 150)
}

function drawGameBoard() {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
}

function drawSnake() {
    snakeBody.forEach(snakeParts);
}


function snakeParts(snakePart) {
    canvasContext.fillStyle = 'blue';
    canvasContext.strokeStyle = 'white';
    canvasContext.fillRect(snakePart.x, snakePart.y, 10, 10);
    canvasContext.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function moveSnake() {
    const snakeHead = {
        x: snakeBody[0].x + snakeX,
        y: snakeBody[0].y + snakeY
    }
    snakeBody.unshift(snakeHead);
    snakeBody.pop();
}


//! Draw canvas in CSS commented out. EDIT OR DELETE
//! Draw apple function here. Comment lower function!
// function drawApple() {
//     canvasContext.fillStyle = 'green';
//     canvasContext.fillRect(500, 300, 20, 20);
// }




gameRefresh();

//!drawApple();


