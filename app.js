const gameCanvas = document.getElementById('game-board');
const canvasContext = gameCanvas.getContext('2d');
let snakeHorizontal = 100;
let snakeVertical;

const drawGameBoard = {
    gameBoard: document.createElement('canvas'),
    drawBoard: function() {
        this.gameBoard.width = 800;
        this.gameBoard.height = 800;
        this.context = this.gameBoard.getContext('2d');
        this.gameBoard.fillStyle = 'black';
    }
}


function updateGameBoard() {
    drawGameBoard.drawBoard();
}


function drawSnake() {
    snakeHorizontal = snakeHorizontal + 10;
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
            
            setInterval(drawSnake, 200);
            console.log('right arrow pressed')
        }
        });
    }


updateGameBoard();
//!drawSnake();
//!drawApple();
//!moveSnake();
