// const inputText = document.getElementById('validation-input');

// inputText.addEventListener('blur', (event) => {
//     if (event.currentTarget.value.length == inputText.dataset.length) {
//     inputText.classList = 'valid'        
//     } 
//     else inputText.classList = 'invalid';    
// });

const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', () => {

const inputDataLength = Number(inputText.dataset.length);
const inputValueLength = Number(inputText.value.trim().length);

if (inputDataLength === inputValueLength) {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
}
else {
    inputText.classList.add("invalid");
    inputText.classList.remove("valid");
}
});











