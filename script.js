const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp
            }
        }
    }
    return inputArr;
}

let filtered = arr.filter((el) => {
    if (el >= 0) return true
})

let bara = filtered.length;

let sum = 0;

for (let el of filtered) {
    sum = sum + el
}

let minimum = Math.min(16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47)
let idxMin = arr.indexOf(-63)

let maximum = Math.max(16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47)
let idxMax = arr.indexOf(76)

let bere = arr.length - bara

let uniqNumber = filtered.filter((el) => {
    if (el % 2 !== 0) return true
})
let countUniqNumber = uniqNumber.length

let evenNumber = filtered.filter((el) => {
    if (el % 2 == 0) return true
})
let countEvenNumber = evenNumber.length

let sumEvenNumber = 0
for (let el of evenNumber) {
    sumEvenNumber = sumEvenNumber + el
}

let sumUniqNumber = 0
for (let el of uniqNumber) {
    sumUniqNumber = sumUniqNumber + el
}

let mult = 1
filtered.forEach(function (e) { mult *= e });

const mas = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let removed = mas.splice(0, mas.length)
while (mas.length != arr.length)
    mas.push(0);
let added = mas.splice(idxMax, 1, maximum)


document.write(`${(arr)} <br \/> ${(bubbleSort(arr))} <br \/> ${(filtered)} <br \/>
1. Всего позитивных элеметнов = ${(bara)}, Их сумма равна = ${(sum)} <br \/>
2. Минимальный элемент массива = ${(minimum)}, И его порядковый номер = ${(idxMin)} <br \/>
3. Максимальный элемент массива = ${(maximum)}, И его порядковый номер = ${(idxMax)} <br \/>
4. Количество негативных элементов = ${(bere)} <br \/>
5. Количество не четных позитивных элиментов массива = ${(countUniqNumber)} <br \/>
6. Количество четных позитивных элиментов массива = ${(countEvenNumber)} <br \/>
7. Сумма парных позитивных чисел = ${(sumEvenNumber)} <br \/>
8. Сумма не парных позитивных чисел = ${(sumUniqNumber)} <br \/>
9. Произведение позитивных элементов = ${(mult)}<br \/>
10. Найден самый большой элемент массива, осталные обнулены = ${(mas)}`)
console.log(mas)