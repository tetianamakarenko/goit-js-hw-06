function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const button = document.querySelector('.change-color');
const span = document.querySelector('.color');
const body = document.querySelector('body');

const colorChange = () => {
  span.textContent = body.style.backgroundColor = getRandomHexColor()
};

button.addEventListener('click', (colorChange)); 
// {
//   // span.textContent = getRandomHexColor();
//   // body.style.backgroundColor = span.textContent;
// };
