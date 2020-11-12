const gameCanvas = document.getElementById('game-board');
const canvasContext = gameCanvas.getContext('2d');
let snakeY = + 20;
let snakeX = + 20;

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

function main() {
    drawGameBoard(); //!Clears the game Canvas
    drawSnake(); //! Draws the snake body parts
    moveSnake();
}

function drawGameBoard() {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, gameCanvas.width, gameCanvas.height );
}

function drawSnake() {
    snakeBody.forEach(snakeParts);
}


function snakeParts(snakePart) {
    canvasContext.fillStyle = 'blue';
    canvasContext.strokeStyle = 'white';
    canvasContext.fillRect(snakePart.x, snakePart.y, 20, 20);
    canvasContext.strokeRect(snakePart.x, snakePart.y, 20, 20);
}

function moveSnake() {
    const snakeHead = {
        x: snakeBody[0].x + snakeX,
        y: snakeBody[0].y
    }
    snakeBody.unshift(snakeHead);
    snakeBody.pop();
    console.log(snakeHead);
}


//! Draw canvas in CSS commented out. EDIT OR DELETE
//! Draw apple function here. Comment lower function!
// function drawApple() {
//     canvasContext.fillStyle = 'green';
//     canvasContext.fillRect(500, 300, 20, 20);
// }




main();

//!drawApple();


