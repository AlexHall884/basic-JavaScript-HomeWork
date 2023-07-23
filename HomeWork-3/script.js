/*Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени */
console.log('==================');
console.log('Задание 1');
console.log('Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени');
console.log('↓↓↓');

const cubeDigit = (number) => number ** 3;
const sumDigit = (num1, num2) => num1 + num2;

console.log(sumDigit(2, 3));

console.log('==================');

/*Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение" */
console.log('Задание 2');
console.log('Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно');
console.log('Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"');
console.log('↓↓↓');

const validatePositiveInteger = () => {
    while (true) {
        let userNumber = Number(prompt("Введите число:"));
        if (Number.isInteger(userNumber) && userNumber > 0) {
            return userNumber;
        } else {
            console.log("ERROR!!! Введите корректное положительное целое число");
        }
    }
};

function countSalary(number) {
    number = number - (number * 0.13);
    console.log(`Размер заработной платы за вычетом налогов равен: ${number}`);
}

//countSalary(validatePositiveInteger());

console.log('==================');

/*Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел */

console.log('Задание 3');
console.log('Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел');
console.log('↓↓↓');

// let number1 = validatePositiveInteger();
// let number2 = validatePositiveInteger();
// let number3 = validatePositiveInteger();

// const maxNumber = (num1, num2, num3) => {
//     let max = num1;

//     if (num2 > max) {
//         max = num2;
//     }

//     if (num3 > max) {
//         max = num3;
//     }

//     return max;
// }

// alert(`Максимальное число ${maxNumber(number1, number2, number3)}`)

console.log('==================');

/*Задание 4
Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно. */

console.log('Задание 4');
console.log('Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций...');
console.log('↓↓↓');
let number1 = 4;
let number2 = 8;
const sumNumber = (num1, num2) => num1 + num2;
console.log(`Сумма чисел ${number1} и ${number2} = ${sumNumber(number1, number2)}`);

const diffNumber = (num1, num2) => {
    let result;

    if (num1 > num2) {
        result = num1 - num2;
    } else if (num1 === num2) {
        result = 0;
    } else {
        result = num2 - num1;
    }

    return result;
}

console.log(`Разность чисел ${number1} и ${number2} = ${diffNumber(number1, number2)}`);

const multNumber = (num1, num2) => num1 * num2;
console.log(`Произведение чисел ${number1} и ${number2} = ${multNumber(number1, number2)}`);

const divNumber = (num1, num2) => num1 / num2;
console.log(`Частное чисел ${number1} и ${number2} = ${divNumber(number1, number2)}`);
console.log('==================');