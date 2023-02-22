let userEmail = '';
let userPassword = '';
let tries = 3;
let error = '';
let success = false;
do {
    error = ''
    tries = tries - 1
    if (tries === 2) {
        alert('У вас 3 попытки!')
    }
    if (tries === 1) {
        alert('У вас еше 2 попытки!!')
    }
    if (tries === 0) {
        alert('У вас еше 1 попытка!!!')
    }
    userEmail = prompt('Введите ваш email')
    userPassword = prompt('Введите ваш пароль')
    if (userEmail.startsWith('@') || userEmail.startsWith(' ')) {
        error = error + 'email не должен начинаться с "@" и пробела\n'
    }
    if (userEmail.endsWith('@') || userEmail.endsWith(' ')) {
        error = error + 'email не должен заканчиваться с "@" и пробела\n'
    }
    if (userEmail.length > 15) {
        error = error + 'email не должен быть больше 15 символов\n'
    }
    if (!userEmail.match(/[@]/g)) {
        error = error + 'email должен включать в себя "@"\n'
    }
    if (!userEmail.endsWith('.com')) {
        error = error + 'email должен заканчиваться на ".com"\n'
    }
    if (userEmail.match(/[A-Z]/g)) {
        error = error + 'пароль должен включать как минимум 1 заглавную букву\n'
    }
    if (userPassword.length < 4 || userPassword.length > 12) {
        error = error + 'пароль должен быть не меньше 4 и не больше 12 символов\n'
    }
    if (error == '') {
        success = true
    }
    if (error !== '') {
        alert(error)
    }
    if (tries === 0) {
        alert(`Нет больше попыток! \n${error}`)
    }
}
while (tries && error !== '')
if (success = true) {
    document.write(`Your account successfully registed! Email: ${userEmail} Password: ${userPassword}`)
}