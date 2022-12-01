const container = document.getElementById('container');
const resetBtn = document.getElementById('reset');
const gridSizeBtn = document.getElementById('gridnumb');
const eraseBtn = document.getElementById('erase');
const paintBtn = document.getElementById('paint');
const rgbBtn = document.getElementById('rgb');
const colorBtn = document.getElementById('color');

let numberOfDivs = 16;
let divColumn;
let divElement;
let color = colorBtn.value;

// custom color selection
colorBtn.addEventListener('change', () => {
    color = colorBtn.value;
})

// rgb functionality
rgbBtn.addEventListener('click', () => {
    rgb();
})

function rgb() {
    const divSelect = document.querySelectorAll('.div-element');

    divSelect.forEach(function (n) {
        n.addEventListener('mouseover', () => {
            let colorOne = Math.floor(Math.random() * 255) * 1;
            let colorTwo = Math.floor(Math.random() * 255) * 1;
            let colorThree = Math.floor(Math.random() * 255) * 1;
            n.style.backgroundColor = `rgb(${colorOne},${colorTwo},${colorThree})`;
        })
    })
}

// erase functionality
eraseBtn.addEventListener('click', () => {
    erase();
})

function erase() {
    const divSelect = document.querySelectorAll('.div-element');

    divSelect.forEach(function (n) {
        n.addEventListener('mouseover', () => {
            n.style.backgroundColor = null;
        })
    })
}

// continue painting after erasing
paintBtn.addEventListener('click', () => {
    paint();
})

// initial display of grid size
let output = document.getElementById("grid-value");
output.innerHTML = `${gridSizeBtn.value}x${gridSizeBtn.value}`;

// display increment / decrement grid size
gridSizeBtn.oninput = function () {
    output.innerHTML = `${this.value}x${this.value}`;
}

// custom grid size
gridSizeBtn.addEventListener('click', () => {
    numberOfDivs = gridSizeBtn.value;
    gridDelete();
    draw(numberOfDivs);
    paint();
})

// grid reset
resetBtn.addEventListener('click', () => {
    gridDelete();
    draw(numberOfDivs);
    paint();
})

// draw divs in a div container
function draw(numberOfDivs) {
    for (let i = 0; i < numberOfDivs; i++) {
        divColumn = document.createElement('div');
        divColumn.classList.add('div-column');

        for (let j = 0; j < numberOfDivs; j++) {
            divElement = document.createElement('div');
            divElement.classList.add('div-element');
            divColumn.appendChild(divElement);
        }

        container.appendChild(divColumn);
    }
}

// activate canvas
function paint() {
    const divSelection = document.querySelectorAll('.div-element');

    divSelection.forEach(function (n) {
        n.addEventListener('mouseover', () => {
            n.style.backgroundColor = color;
        })
    })
}

// delete function
function gridDelete() {
    const columns = document.querySelectorAll('.div-column');
    columns.forEach(column => {
        const elements = document.querySelectorAll('.div-element')
        elements.forEach(element => {
            element.remove();
        })
        column.remove();
    })
}

draw(numberOfDivs);
paint();