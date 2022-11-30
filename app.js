let numberOfDivs = 16;
const container = document.getElementById('container');

// draw divs in a div container
function draw(numberOfDivs) {
    for (let i = 0; i < numberOfDivs; i++) {
        const divColumn = document.createElement('div');
        divColumn.classList.add('div-column');

        for (let j = 0; j < numberOfDivs; j++) {
            const divElement = document.createElement('div');
            divElement.style.border = '1px solid black';
            divElement.classList.add('div-element');

            divColumn.appendChild(divElement);
        }

        container.appendChild(divColumn);
    }
}

draw(numberOfDivs);

const divSelection = document.querySelectorAll('.div-element');

divSelection.forEach(function (n) {
    n.addEventListener('mouseover', () => {
        n.style.backgroundColor = 'red';
    })
})