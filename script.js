let canvas = document.querySelector("#snake"); //criar elemento que irá rodar o jogo
let context = canvas.getContext("2d");
let box = 32;   // 32 pixels cada quadrado
let direction = "right"

let record = 0;
let points = 0;
let snake = []; //criar cobra como lista

snake[0] = {
    x: 2 * box,
    y: 2 * box
}
let positionFood = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

// Criação de Background e Cobra
function createBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); //desenha x, y, altura, largura
}

// Criação da Cobra
function createSnake(){
    for(i=0; i<snake.length; i++){
        context.fillStyle = "rgb(128, 74, 52)";
        context.fillRect(snake[i].x, snake[i].y, box, box);

    }
    context.fillStyle = "rgb(80, 38, 31)";
    context.fillRect(snake[0].x, snake[0].y, box, box);
}

// Criação da Comida
function drawFood(){
    context.fillStyle = "rgb(233, 47, 47)";
    context.fillRect(positionFood.x, positionFood.y, box, box);
}

// start e play
document.addEventListener("keydown", update)

// controle de movimento
function update(event){
    if(event.keyCode == 37 && direction !="right") direction = "left";
    if(event.keyCode == 38 && direction !="down") direction = "up";
    if(event.keyCode == 39 && direction !="left") direction = "right";
    if(event.keyCode == 40 && direction !="up") direction = "down";
}

// pontuação e recorde
function gameScore(){
        let recordGame = document.querySelector("#record-game");
        let pointsGame = document.querySelector("#points-game");
    
        recordGame.innerText = `Record: ${record}`;
        pointsGame.innerText = `Pontuação:  ${points}`;
}

// game over
function gameOver(){    
    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            while((snake.length - 1) > 0){
                snake.pop();
            }
            points = 0;
            clearInterval(game);
            startGame();
        }
    }
}

// Iniciação do jogo e definindo movimentos
function game(){

// controle de movimento
    if(snake[0].x > 15*box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15*box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;

   
    createBG();
    createSnake();
    drawFood();
    gameScore();
    gameOver();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
// movimentos
    if(direction == "right") snakeX +=box;
    if(direction == "left") snakeX -=box;
    if(direction == "up") snakeY -=box;
    if(direction == "down") snakeY +=box;

    if(snakeX != positionFood.x || snakeY != positionFood.y){
        snake.pop();
    }
    else{
        positionFood.x = Math.floor(Math.random() * 15 + 1) * box;
        positionFood.y = Math.floor(Math.random() * 15 + 1) * box;
        points++;
        if(points>record) record = points;
    }


    let newHead = {
        x: snakeX, 
        y: snakeY
    }

    snake.unshift(newHead)
}

let gameSnake = setInterval(game, 130)


