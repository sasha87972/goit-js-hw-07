let counterValue = 0;

function decrement() {
        counterValue -= 1;
    }
function increment() {
        counterValue += 1;
    }
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector('#value');

const onDecrementClick = () => {
    decrement();
    counterValueEl.textContent = counterValue;
}
const onIncrementClick = () => {
    increment();
    counterValueEl.textContent = counterValue;
}
decrementBtn.addEventListener('click', onDecrementClick);
incrementBtn.addEventListener('click', onIncrementClick);

