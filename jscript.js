let password = 'пароль';

let entry = String(prompt('Введите пароль'));

let respond = entry !== password ? 'пароль введён неверно' : 'пароль введён верно';
alert(respond);

let c = 12;
c >= 0 && c < 10 ? console.log('Верно') : console.log('Неверно');

c = 0;
c >= 0 && c < 10 ? console.log('Верно') : console.log('Неверно');

c = 10;
c >= 0 && c < 10 ? console.log('Верно') : console.log('Неверно');

c = -3;
c >= 0 && c < 10 ? console.log('Верно') : console.log('Неверно');

c = 2;
c >= 0 && c < 10 ? console.log('Верно') : console.log('Неверно');


let d, e;
d = 15, e = 108;

d > 100 || e > 100 ? console.log('Верно') : console.log('Неверно');



let a = '2';
let b = '3';

a = parseInt('2', 10);
b = parseInt('3', 10);

alert(a + b);

let monthNumber = Number(prompt("Введите номер месяца и узнайте к какому сезону относится данный месяц"));
if (monthNumber === 12 || monthNumber <= 2 && monthNumber > 0) {
    alert('Это зимний месяц');
} else if (monthNumber >= 3 && monthNumber <= 5) {
    alert('Это весенний месяц');
} else if (monthNumber >= 6 && monthNumber <= 8) {
    alert('Это летний месяц');
} else if (monthNumber >= 9 && monthNumber <= 11) {
    alert('Это осенний месяц');
} else if (monthNumber === 0) {
    alert('Такого месяца нет');
} else {
    alert("Введите число от 1 до 12")
}
