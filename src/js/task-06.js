const inputText = document.getElementById('validation-input');

inputText.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length == inputText.dataset.length) {
    inputText.classList = 'valid'        
    } 
    else inputText.classList = 'invalid';    
});