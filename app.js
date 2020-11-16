const gameCanvas = document.getElementById('game-board');
const canvasContext = gameCanvas.getContext('2d');
let snakeY = + 0;
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
        drawGameBoard(); //!Clears the game Canvas everytime its called
        moveSnake();
        drawSnake(); //! Draws the snake body parts in the new coordinates
        gameRefresh();
    }, 100)
}

gameRefresh();

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

function snakeDirection(move) {
    const arrowUp = 38;
    const arrowDown = 40;
    const arrowRight = 39;
    const arrowLeft = 37;
    const arrowPressed = move.keyCode;
    const snakeMovesUp = snakeY === - 10;
    const snakeMovesDown = snakeY === + 10;
    const snakeMovesLeft = snakeX === - 10;
    const snakeMovesRight = snakeX === + 10;

    if (changingDirection) return;
    changingDirection = true;

    if (arrowPressed === arrowUp && !snakeMovesDown) {
        snakeY = - 10;
        snakeX = + 0;
        console.log("arrow up pressed");
    } if (arrowPressed === arrowDown && !snakeMovesUp) {
        snakeY = + 10;
        snakeX = 0;
        console.log("arrow down pressed");
    } if (arrowPressed === arrowLeft && !snakeMovesRight) {
        snakeY = 0;
        snakeX = - 10;
        console.log("arrow left pressed");
    } if (arrowPressed === arrowRight && !snakeMovesLeft) {
        snakeY = 0;
        snakeX = + 10;
        console.log("arrow right pressed");
    }
}

document.addEventListener('onkeydown', snakeDirection());

function gameOverDetection() {  //! SNAKE HAS HIT ITSELF OR HIT A BORDER

}


//! Draw apple function here. Comment back in function at the borrom on inside GAMEREFRESH function
// function drawApple() {
//     canvasContext.fillStyle = 'green';
//     canvasContext.fillRect(500, 300, 20, 20);
// }





gameOverDetection();
//!drawApple(); CALL HERE OR INSIDDE OF GAME REFRESH?;


