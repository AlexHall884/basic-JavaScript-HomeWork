/*Задание 1
Создать переменные num1, num2 которые пользователь вводит с клавиатуры
Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.*/

// alert('Hello')
// let num1 = Number(prompt('1) Input first number'));
// let num2 = Number(prompt('2) Input second number'));

// if (num1 <= 1 && num2 >= 3) {
//     alert('first number <= 1 and second number >= 3')
// } else {
//     alert('ok')
// }

/*Задание 2
Перепишите код к тернарному оператору

let test = true;
if (test === true) {
console.log('+++');
} else {
console.log('---');
}*/
console.log('Задание 2');
let test = true;
console.log(test === true ? '+++' : '---');

/*Задание 3
В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).*/
console.log('Задание 3');
let day = 13;
let decade;

if (day >= 1 && day <= 10) {
    decade = "первую";
} else if (day >= 11 && day <= 20) {
    decade = "вторую";
} else {
    decade = "третью";
}

console.log(`Число ${day} попадает в ${decade} декаду месяца.`);

/*Задание 4
Необязательное задание.
Необходимо от пользователя получить число. Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц

Пример: Пользователь ввел число 163. Программа должна вывести: "В числе 163 количество сотен: 1, десятков: 6, единиц: 3".Уточнение: пользователь всегда вводит корректное положительное целое число.*/
console.log('Задание 4');

const countDigitOfNumber = (number) => {
    let hundreds = Math.floor(number / 100);     // Количество сотен
    let tens = Math.floor((number % 100) / 10);  // Количество десятков
    let units = number % 10;                     // Количество единиц
    console.log(`в числе ${number} -> сотен: ${hundreds}; десятков: ${tens}; единиц: ${units};`);
}

const validatePositiveInteger = () => {
    while (true) {
        let userNumber = Number(prompt("Введите число:"));
        if (Number.isInteger(userNumber) && userNumber > 0) {
            return countDigitOfNumber(userNumber);
        } else {
            console.log("ERROR!!! Введите корректное положительное целое число");
        }
    }
};

validatePositiveInteger();




