const userBirth = +prompt("Год рождения");
const userName = prompt("Имя");
const userSurname = prompt("Фамилия");
const currentYear = 2023;
const userAge = currentYear - userBirth;
console.log(userName, userSurname, userAge);
alert(`User Bio: ${userName} ${userSurname}, ${userAge} Year old;`);