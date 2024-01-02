// Inicialização de variáveis
let currentColor = 'black';
let canDraw = false;
let mouseX, mouseY;
let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');

// Eventos
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);

document.querySelector('.clear').addEventListener('click', clearScreen);

// Função para tratar evento de clique nas cores
function colorClickEvent(event) {
    let color = event.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    event.target.classList.add('active');
}

// Função para tratar evento de clique do mouse
function mouseDownEvent(event) {
    canDraw = true;
    mouseX = event.pageX - screen.offsetLeft;
    mouseY = event.pageY - screen.offsetTop;
}

// Função para tratar evento de movimento do mouse
function mouseMoveEvent(event) {
    if (canDraw) {
        draw(event.pageX, event.pageY);
    }
}

// Função para tratar evento de soltar o mouse
function mouseUpEvent() {
    canDraw = false;
}

// Função para desenhar no canvas
function draw(x, y) {
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();

    mouseX = x;
    mouseY = y;
}

// Função para limpar o canvas
function clearScreen() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
