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