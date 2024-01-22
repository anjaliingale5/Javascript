const shapeDisplay = document.getElementById('shapeDisplay');
const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#d35400', '#34495e', '#c0392b', '#27ae60'];
const shapes = ['triangle', 'square', 'circle', 'rectangle', 'diamond'];

function changeColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    shapeDisplay.style.backgroundColor = randomColor;
}

function changeShape() {
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    shapeDisplay.className = `shape ${randomShape}`;
}

// Initial shape display
changeShape();
