const inputEl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

inputEl.addEventListener('input', () => {
    textSpan.style.fontSize = `${Range.inputEl.value}px`
});

