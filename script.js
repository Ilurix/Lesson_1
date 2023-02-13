let userName = prompt('Имя');
let userSurname = prompt('Фамилия');
let userBirthDay = +prompt('День рождения');
let userBirthMonths = +prompt('Месяц рождения');
let userBirthYear = +prompt('Год рождения');
let currentYear = 2022;
let userAge = currentYear - userBirthYear;
document.write(`User Bio: ${userName} ${userSurname} ${userAge} Years old`);
if (userBirthYear % 4 == 0 || userBirthYear % 400 == 0) {
    document.write(' (leap year)')
}
if (userBirthMonths == 1 && userBirthDay >= 20 || userBirthMonths == 2 && userBirthDay <= 18) {
    document.write(' Aquarius♒')
}
if (userBirthMonths == 2 && userBirthDay >= 19 || userBirthMonths == 3 && userBirthDay <= 20) {
    document.write(' Pisces♓')
}
if (userBirthMonths == 3 && userBirthDay >= 21 || userBirthMonths == 4 && userBirthDay <= 19) {
    document.write(' Aries♈')
}
if (userBirthMonths == 4 && userBirthDay >= 20 || userBirthMonths == 5 && userBirthDay <= 20) {
    document.write(' Taurus♉')
}
if (userBirthMonths == 5 && userBirthDay >= 21 || userBirthMonths == 6 && userBirthDay <= 20) {
    document.write(' Gemini♊')
}
if (userBirthMonths == 6 && userBirthDay >= 21 || userBirthMonths == 7 && userBirthDay <= 22) {
    document.write(' Cancer♋')
}
if (userBirthMonths == 7 && userBirthDay >= 23 || userBirthMonths == 8 && userBirthDay <= 22) {
    document.write(' Leo♌')
}
if (userBirthMonths == 8 && userBirthDay >= 23 || userBirthMonths == 9 && userBirthDay <= 22) {
    document.write(' Virgo♍')
}
if (userBirthMonths == 9 && userBirthDay >= 23 || userBirthMonths == 10 && userBirthDay <= 22) {
    document.write(' Libra♎')
}
if (userBirthMonths == 10 && userBirthDay >= 23 || userBirthMonths == 11 && userBirthDay <= 21) {
    document.write(' Scorpio♏')
}
if (userBirthMonths == 11 && userBirthDay >= 22 || userBirthMonths == 12 && userBirthDay <= 21) {
    document.write(' Sagittarius♐')
}
if (userBirthMonths == 12 && userBirthDay >= 22 || userBirthMonths == 1 && userBirthDay <= 19) {
    document.write(' Capricorn♑')
}