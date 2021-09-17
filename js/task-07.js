const inputRangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
console.dir(inputRangeEl);
textEl.style.fontSize = 50 + 'px';
inputRangeEl.value = textEl.style.fontSize;

const oninputRangeElChange = () => {
    textEl.style.fontSize = inputRangeEl.value + 'px';
}

inputRangeEl.addEventListener('input', oninputRangeElChange);
