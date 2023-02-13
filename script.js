let userName = prompt('Имя');
let userSurname = prompt('Фамилия');
let userBirthDay = +prompt('День рождения');
let userBirthMonths = +prompt('Месяц рождения');
let userBirthYear = +prompt('Год рождения');
let currentYear = 2022;
let userAge = currentYear - userBirth;
document.whrite(`User Bio: ${userName}, ${userSurname},${userAge}`)
if (userBirthYear % 4 == 0 || userBirthYear % 400 == 0) {
    document.write('leap year')
}
if (userBirthMonths == 1 && userBirthDay >= 20 || userBirthMonths == 2 && userBirthDay >= 18) {
    document.write('Aquarius ♒')
}