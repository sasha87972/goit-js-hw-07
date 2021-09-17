const inputEl = document.querySelector('#validation-input');
const onInputElChange = (event) => {
    if (event.target.value.length !== Number(inputEl.dataset.length)) {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    } else {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }   
}
inputEl.addEventListener('change', onInputElChange);

