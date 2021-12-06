let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;   /* 32 pixels cada quadrado */
let snake = [];

snake[0] = {
    x: 8 * box,
    y: 8 * box
}


function createBG(){
    context.fillStyle = "darkgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); /*desenha x, y, altura, largura*/
}

function createSnake(){
    for(i=0; i<snake.length; i++){
        context.fillStyle = "brown";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

createBG();
createSnake();
