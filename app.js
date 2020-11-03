const gameCanvas = document.getElementById('game-board');
const canvasContext = gameCanvas.getContext('2d');
let snakeHorizontal = 100;
let snakeVertical;


function drawSnake() {
    canvasContext.fillStyle = 'blue';
    canvasContext.fillRect(snakeHorizontal, 300, 15, 15);
    console.log(snakeHorizontal); //TODO delete console.log 

}

function drawApple() {
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(600, 300, 15, 15);
}

function moveSnake() {
    //TODO moves snake body + 10 every second by arrow pressed
    document.addEventListener('keydown', (e) => {
        if(e.which === 39) {
            snakeHorizontal = snakeHorizontal + 10;
            setInterval(drawSnake, 500);
            console.log('right arrow pressed')
        }
        });
    }



drawSnake();
drawApple();
moveSnake();
