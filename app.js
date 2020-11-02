

function drawSnake() {
    const gameCanvas = document.getElementById('game-board');
    const canvasContext = gameCanvas.getContext('2d');
    canvasContext.fillStyle = 'blue';
    canvasContext.fillRect(200, 200, 15, 15); 
    
}

drawSnake();