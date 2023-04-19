const inputEl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

textSpan.style.fontSize = inputEl.value + 'px';

inputEl.addEventListener('input', () => {
    textSpan.style.fontSize = `${inputEl.value}px`
});


