const inputEl = document.querySelector('#controls input')
const boxesEl = document.querySelector('#boxes')
const actions = document.querySelectorAll('#controls button')

console.log(actions[0].dataset.action)
console.log(actions[1].dataset.action)

inputEl.addEventListener('input', onInputChange)
actions[0].addEventListener('click', createBtnClick)
actions[1].addEventListener('click', removeBtnClick)


function onInputChange(event) {
    console.log(event.currentTarget.value)
}

function createBtnClick() {

}

function removeBtnClick() {

}



function createBoxes(amount) {
    amount = Number()
}