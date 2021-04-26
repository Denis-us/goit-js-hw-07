const nameInputEl = document.querySelector('#name-input')
const nameSpanEl = document.querySelector('#name-output')

nameInputEl.addEventListener('input', inputChange)

function inputChange(event) {
    if(event.currentTarget.value) {
        nameSpanEl.textContent = event.currentTarget.value 
    }
    else {
        nameSpanEl.textContent = 'незнакомец';
    }
}