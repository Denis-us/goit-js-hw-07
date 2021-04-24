const inputEl = document.querySelector('#validation-input');

inputEl  {
    border: 3px solid #bdbdbd;
  }

inputEl.addEventListener('blur', onInputBlur)

function onInputBlur () {
    if (inputEl.dataset.length = 6) {
        inputEl.valid: border-color: #4caf50;
    }
}