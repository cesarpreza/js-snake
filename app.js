
let snakeHorizontal = 100;
let snakeVertical;

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

function drawGameBoard {
    const gameCanvas = document.getElementById('game-board');
    const canvasContext = gameCanvas.getContext('2d');
    canvasContext.fillRect(0, 0, gameCanvas.width, gameCanvas.height );
}

function drawSnake() {
    canvasContext.fillStyle = 'blue';
    canvasContext.fillRect(snakeBody.x[0], snakeBody.y[0], 20, 20);
    console.log(snakeHorizontal); //TODO delete console.log 
}


//! Draw canvas in CSS commented out. EDIT OR DELETE
//! Draw apple function here.
// function drawApple() {
//     canvasContext.fillStyle = 'green';
//     canvasContext.fillRect(500, 300, 20, 20);
// }

function moveSnake() {
    //TODO moves snake body + 10 every second by arrow pressed
    document.addEventListener('keydown', (e) => {
        if (e.which === 39) {

            setInterval(drawSnake, 200);
            console.log('right arrow pressed')
        }
    });
}

drawGameBoard();
drawSnake();
drawApple();
moveSnake();
