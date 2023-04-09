"use strict";

let a = 10;
alert(a);
a = 20;
alert(a)

let b = 2007;
alert('2007');

let name = "Brandan Eich";
alert(name);

let c=10;
let d=2;
alert(c+d);
alert(c-d);
alert(c*d);
alert(c%d);

let result = (2 ** 5);
alert(result);

let w = 9;
let z = 2;
alert(w%z);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = Number(prompt("Сколько вам лет?"));
alert(age);

const user = {
	name: "Dji",
	age: 33,
	isAdmin: true
};
user['city of residence'] = 'Saint-Petersburg';
user.age = 18;
delete user['city of residence'];
let info = prompt('Какую информацию хотите узнать о пользователе?', 'Укажите name, age или isAdmin');
    alert (user[info]);
    console.log(user[info]);






