const counterValue = 0;

const buttonSpan = document.querySelector("#value");

const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    buttonSpan.textContent = counterValue;
});

const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    buttonSpan.textContent = counterValue;
});