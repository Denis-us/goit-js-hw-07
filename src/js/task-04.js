const counter = document.querySelector('#counter');
const counterValue = document.querySelector('#value');

const decr = counter.firstElementChild;

const incr = counter.lastElementChild;

decr.addEventListener('click', handleDecrementButtonClick)
incr.addEventListener('click', handleIncrementButtonClick)

function handleDecrementButtonClick () {
    console.log('Увеличиваем значение на 1');
    counterValue.textContent --;
};

function handleIncrementButtonClick () {
    console.log('Уменьшаем значение на 1');
    counterValue.textContent ++;
};
