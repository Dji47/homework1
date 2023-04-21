let password = 'пароль';

let entry = String(prompt('Введите пароль'));

let respond = entry !== password ? 'пароль введён неверно' : 'пароль введён верно';
alert(respond);
8