/*Скрыть Логин / E-Mail*/
const inputField = document.getElementById('login-input');
inputField.addEventListener('focus', () => {
    inputField.placeholder = '';
});
inputField.addEventListener('blur', () => {
    if (inputField.value === '') {
        inputField.placeholder = 'Логин / E-Mail';
    }
});
/*Скрыть текст Пароль*/
const passwordField = document.getElementById('password-input');
passwordField.addEventListener('focus', () => {
    passwordField.placeholder = '';
});
passwordField.addEventListener('blur', () => {
    if (passwordField.value === '') {
        passwordField.placeholder = 'Пароль';
    }
});
