const gameCanvas = document.getElementById('game-board');
const canvasContext = gameCanvas.getContext('2d');
let snakeY = + 0;
let snakeX = + 10;
let snakeBody = [
    { x: 100, y: 300 },
    { x: 80, y: 300 },
    { x: 60, y: 300 }
];
snakeBodyCopy = [
    { x: 100, y: 300 },
    { x: 80, y: 300 },
    { x: 60, y: 300 }
];

let apple = [
    { x: 500, y: 300 }
];


function gameRefresh() {
    changingDirection = false;
    if (gameOver()) return;
    setTimeout(function refresh() {
        drawGameBoard(); //!Clears the game Canvas everytime its called
        moveSnake();
        drawSnake(); //! Draws the snake body parts in the new coordinates
        drawApple();
        applePart();
        gameRefresh();
    }, 100)
}

gameRefresh();

function drawGameBoard() {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
};

function drawSnake() {
    snakeBody.forEach(snakeParts);
};


function snakeParts(snakePart) {
    canvasContext.fillStyle = 'blue';
    canvasContext.strokeStyle = 'white';
    canvasContext.fillRect(snakePart.x, snakePart.y, 10, 10);
    canvasContext.strokeRect(snakePart.x, snakePart.y, 10, 10);
};

function moveSnake() {
    const snakeHead = {
        x: snakeBody[0].x + snakeX,
        y: snakeBody[0].y + snakeY
    }

    snakeBody.unshift(snakeHead);
    snakeBody.pop();

}

function drawApple() {
    apple.forEach(applePart);
};

function applePart(food) {
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(food.x, food.y, 10, 10);
};

function snakeDirection() {
    const arrowUp = 38;
    const arrowDown = 40;
    const arrowRight = 39;
    const arrowLeft = 37;
    let snakeMovesUp = snakeY === - 10;
    let snakeMovesDown = snakeY === + 10;
    let snakeMovesLeft = snakeX === - 10;
    let snakeMovesRight = snakeX === + 10;

    if (changingDirection) return;
    changingDirection = true;
    document.addEventListener('keydown', (e) => {
        if (e.keyCode === arrowUp && !snakeMovesDown) {
            snakeY = - 10;
            snakeX = + 0;
            console.log("arrow up pressed");
        }
        if (e.keyCode === arrowDown && !snakeMovesUp) {
            snakeY = + 10;
            snakeX = 0;
            console.log("arrow down pressed");
        }
        if (e.keyCode === arrowLeft || !snakeMovesRight) {
            snakeY = 0;
            snakeX = - 10;
            console.log("arrow left pressed");
        }
        if (e.keyCode === arrowRight && !snakeMovesLeft) {
            snakeY = 0;
            snakeX = + 10;
            console.log("arrow right pressed");
        }
    })

};

snakeDirection();

function gameOver() {  //! SNAKE HAS HIT ITSELF OR HIT A BORDER
    for (let i = 2; i < snakeBody.length; i++) {
        if (snakeBody[i].x === snakeBody[0].x && snakeBody[i].y === snakeBody[0].y)
            return true;
    }
    const hitLeft = snakeBody[0].x < 0;
    const hitRight = snakeBody[0].x > gameCanvas.width - 10;
    const hitTop = snakeBody[0].y < 0;
    const hitBottom = snakeBody[0].y > gameCanvas.height - 10;

    return hitLeft || hitRight || hitTop || hitBottom;
};
