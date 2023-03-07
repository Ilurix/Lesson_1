let arr = [];
let value = '';
let error = '';
let sum = 0;
do {
    error = ''
    value = +prompt(`знач`)
    Math.abs(value)
    Math.round(value)
    if (value < 2 || value > 10) {
        error = error + 'число должно быть не меньше 2 и не больше 10\n'
    }
    if (error == '') {
        success = true
    }
    if (error !== '') {
        alert(error)
    }
}

while (error !== '')
if (success = true) {
    while (arr.length != value)
        arr.push(Math.round(Math.random() * 10))
}
for (let i of arr) {
    document.write(i + '-');
    console.log(i);
}

for (let el of arr) {
    sum = sum + el
}
document.write(sum);
console.log(sum);