/*Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число */

console.log('Задание 1');

const task_1 = (num) => {
    for (let i = 0; i <= num; i++) {

        if (i === 0) {
            console.log(i + ' - это ноль');
        } else if (i % 2 !== 0) {
            console.log(i + ' - нечетное число');
        } else {
            console.log(i + ' - четное число');
        }

    }
}

task_1(10);

console.log('-------------------------------');

/*Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7] */

console.log('Задание 2');

const array1 = [1, 2, 3, 4, 5, 6, 7];
console.log(`Изначальный массив - ${array1}`);
array1.splice(3, 2);
console.log(`Изменённый массив - ${array1}`);

console.log('-------------------------------');

/*Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3 */
console.log('Задание 3');

const generateRandomArray = (size) => {
    const arr = [];
    for (let i = 0; i < size; i++) {
        const randomDigit = Math.floor(Math.random() * 10);
        arr.push(randomDigit);
    }
    return arr;
}

const array2 = generateRandomArray(5)
console.log(`Массив - ${array2}`);

const sumElementArr = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(`Сумма элементов Массива = ${sumElementArr(array2)}`);

const findminElementArr = (array) => {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

console.log(`Минимальный элемент Массива = ${findminElementArr(array2)}`);

function findElement(array, element) {
    let found = false;
    let index;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            found = true;
            index;
            break;
        }
    }
    if (found) {
        console.log(`Число ${element} найдено в массиве и находится под индексом ${index}`);
    } else {
        console.log(`Число ${element} не найдено в массиве`);
    }
}
console.log(findElement(array2, 3));

console.log('-------------------------------');

/**Необязательное задание. *
Необходимо вывести горку в консоль (используя цикл for), 
как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx */

console.log('*Необязательное задание');

function drawSlide(size) {
    for (let i = 0; i <= size; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "x"
        }
        console.log(row);
    }
}

drawSlide(20);
