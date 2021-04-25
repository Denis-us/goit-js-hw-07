const inputEl = document.querySelector('#validation-input');

const validLength = inputEl.dataset.length;

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur (event) {

    if (event.currentTarget.value.length === Number(validLength)) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')

    } else {
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid')
        
    }
};