const canvas;
const canvasContext;

function snakeGame() {
    canvas = document.getElementById('game-board');
    canvasContext = gameBoard.getContext('2d');
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height); 
}

snakeGame();