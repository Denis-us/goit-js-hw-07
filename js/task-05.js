const nameInputEl = document.querySelector('#name-input')
const nameSpanEl = document.querySelector('#name-output')

nameInputEl.addEventListener('input', inputChange)

function inputChange(event) {
    nameSpanEl.textContent = event.currentTarget.value
}