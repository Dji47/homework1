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

let monthNumber = Number(prompt("Введите номер месяца и узнайте к какому сезону относится данный месяц"))