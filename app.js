const DEBUG = true; //! Remove DEBUGGER ENVIRONMENT before submit
const gameCanvas = document.getElementById('game-board');
const canvasContext = gameCanvas.getContext('2d');
let gameScore = 0;
let snakeY = + 0;
let snakeX = + 10;
let snakeBody = [
    { x: 100, y: 300 },
    { x: 80, y: 300 },
    { x: 60, y: 300 }
];
let apple = [
    {
        x: Math.floor(Math.random() * (600 / 10)) * 10,
        y: Math.floor(Math.random() * (600 / 10)) * 10
    }
];


function gameRefresh() {
    let gameInterval = 100;
    if (DEBUG === true) {
        apple[0].x = 150;
        apple[0].y = 300;
        gameInterval = 800;
    }
    changingDirection = false;
    if (gameOver()) return;
    setTimeout(function refresh() {
        drawGameBoard();
        moveSnake();
        drawSnake();
        drawApple();
        applePart();
        gameRefresh();
    }, gameInterval)
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
    if (snakeBody[0].x === apple[0].x && snakeBody[0].y === apple[0].y) {
        newApple();
        console.log('hit apple')
    }
};

function newApple() {
    apple.x = Math.floor(Math.random() * (600 / 10)) * 10
    apple.y = Math.floor(Math.random() * (600 / 10)) * 10
}

function applePart() {
    canvasContext.fillStyle = 'green';
    canvasContext.strokeStyle = 'white'
    canvasContext.fillRect(apple[0].x, apple[0].y, 10, 10);
    canvasContext.strokeRect(apple[0].x, apple[0].y, 10, 10);
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
        }
        if (e.keyCode === arrowDown && !snakeMovesUp) {
            snakeY = + 10;
            snakeX = 0;
        }
        if (e.keyCode === arrowLeft || !snakeMovesRight) {
            snakeY = 0;
            snakeX = - 10;
        }
        if (e.keyCode === arrowRight && !snakeMovesLeft) {
            snakeY = 0;
            snakeX = + 10;
        }
    })

};

snakeDirection();

function gameOver() {
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
