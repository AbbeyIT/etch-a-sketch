const grid = document.querySelector('.grid');

setupGrid = () => {
for (let i=0; i<256; i++) {
    const getGridElement = document.createElement('div');
    getGridElement.classList.add('cell');
    getGridElement.addEventListener('click', function(event){
        event.target.style.backgroundColor = 'black';
    })
    grid.appendChild(getGridElement);
}
};

function removeAllChildNodes(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const slider = document.querySelector('#slider')
const screenVal = document.querySelector('.value');
slider.addEventListener('input', function() {
    let sliderVal = document.getElementById('slider').value;
    screenVal.textContent = sliderVal;
    removeAllChildNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${sliderVal}, 2fr); grid-template-rows: repeat(${sliderVal}, 2fr);`);
    for (let i=0; i<sliderVal*sliderVal; i++) {
        const getGridElement = document.createElement('div');
        getGridElement.classList.add('cell');
        getGridElement.addEventListener('click', function(event){
            event.target.style.backgroundColor = 'black';
        })
        grid.appendChild(getGridElement);
    }
});


const black = document.querySelector('#blackBtn');
black.addEventListener('click', function() {
    let sliderVal = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i=0; i<sliderVal*sliderVal; i++) {
        cell[i].addEventListener('click', function(event){
            event.target.style.backgroundColor = 'black';
        })
    }
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const rgb = document.querySelector('#rgbBtn');
rgb.addEventListener('click', function() {
    let sliderVal = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i=0; i<sliderVal*sliderVal; i++) {
        cell[i].addEventListener('click', function(event){
            event.target.style.backgroundColor = getRandomColor();
        })
    }
});

const eraser = document.querySelector('#eraserBtn');
eraser.addEventListener('click', function() {
    let sliderVal = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i=0; i<sliderVal*sliderVal; i++) {
        cell[i].addEventListener('click', function(event){
            event.target.style.backgroundColor = 'white';
        })
    }
});

const reset = document.querySelector('#resetBtn');
reset.addEventListener('click', function() {
    let sliderVal = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i=0; i<sliderVal*sliderVal; i++) {
        cell[i].style.backgroundColor = 'white';
    }
});


const chooseColor = document.querySelector('#color');
chooseColor.addEventListener('input', function() {
    let sliderVal = document.getElementById('slider').value;
    let pickColor = document.getElementById('color').value;
    let cell = grid.children;
    for (let i=0;i<sliderVal*sliderVal; i++) {
        cell[i].addEventListener('click', function(event){
            event.target.style.backgroundColor = pickColor;
        })
    }
});

setupGrid();