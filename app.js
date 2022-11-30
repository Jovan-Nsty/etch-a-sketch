let numberOfDivs = 16;
let divColumn;
let divElement;
const container = document.getElementById('container');
const resetBtn = document.getElementById('reset');

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
            divElement.style.border = '1px solid black';
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
            n.style.backgroundColor = 'red';
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