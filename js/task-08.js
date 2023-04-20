const form = document.querySelector(".login-form");
const email = document.querySelector('[type="email"]');
const password = document.querySelector('[type="password"]');

form.addEventListener("submit", (event) => {
event.preventDefault();

if (email.value === '' || password.value === '') {
    alert('всі поля повинні бути заповнені!');
}
else {
const elements = {
    email: email.value,
    password: password.value
}
console.log(elements);
}
form.reset();
});
