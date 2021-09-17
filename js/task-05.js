const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const inputElChanged = text => {

    if (text.currentTarget.value !== '') {
        outputEl.textContent = text.target.value;
    } else {
        outputEl.textContent = 'незнакомец';
    }
}
inputEl.addEventListener('input', inputElChanged);