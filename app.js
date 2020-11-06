const gameCanvas = document.getElementById('game-board');
const canvasContext = gameCanvas.getContext('2d');
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

function drawSnake() {
    canvasContext.fillStyle = 'blue';
    canvasContext.fillRect(100, 300, 20, 20);
    console.log(snakeHorizontal); //TODO delete console.log 
}




function drawApple() {
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(500, 300, 20, 20);
}

function moveSnake() {
    //TODO moves snake body + 10 every second by arrow pressed
    document.addEventListener('keydown', (e) => {
        if (e.which === 39) {

            setInterval(drawSnake, 200);
            console.log('right arrow pressed')
        }
    });
}


drawSnake();
drawApple();
moveSnake();
