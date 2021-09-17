const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');

function randomRgb() {
    return Math.floor(Math.random() * 256);
}
function amountOfBoxes() {
    let amount = Number(inputEl.value);
    createBoxes(amount);
}
function createBoxes(amount) {
    for (let i = 0; i < amount; i += 1) {
        const boxEl = document.createElement('div');
        let boxSize = 30 + (i * 10) + 'px';
        boxEl.style.width = boxSize;
        boxEl.style.height = boxSize;
        boxEl.style.backgroundColor = `rgb(${randomRgb()}, ${randomRgb()}, ${randomRgb()})`;
        boxEl.textContent = i + 1;
        boxesEl.appendChild(boxEl);
    }
}


function destroyBoxes() {
    boxesEl.innerHTML = '';
} 

renderBtn.addEventListener('click', amountOfBoxes);
destroyBtn.addEventListener('click', destroyBoxes);


