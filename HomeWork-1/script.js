// Задание 1
// Необходимо создать переменную в которой будет храниться температура в градусах Цельсия, преобразовать значение в температуру по фаренгейту.
// Формула перевода градусов Цельсия в градусы Фаренгейта: градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Вывести в консоль температуру в Цельсиях и Фаренгейтах.

let temperatureInCelsius = 23;
let temperatureInFahrenheit = 0;

function convertCelsiusToFahrenheit(degreesCelsius) {
    let result = (9 / 5) * degreesCelsius + 32;
    return result;
}

temperatureInFahrenheit = convertCelsiusToFahrenheit(temperatureInCelsius);

console.log('Задание 1');
console.log('⬇⬇⬇');
console.log(`Температура в Цельсиях = ${temperatureInCelsius}`);
console.log(`Температура в Фаренгейтах = ${temperatureInFahrenheit}`);

console.log('---------------------------------');
// Задание 2
// Необходимо создать переменную name, записать в эту переменную свое имя. Необходимо также создать переменную admin и присвоить этой переменной значение из переменной name. Вывести значение переменной admin в консоль.

let myName = 'Alexander';
let admin = myName;

console.log('Задание 2');
console.log('⬇⬇⬇');
console.log(`Администратор - ${admin}`);