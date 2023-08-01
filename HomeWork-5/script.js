/*Задание 1
Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

const numbers = {
keyin1: 1,
keyin2: 2,
keyin3: 3,
keyin4: 4,
keyin5: 5,
keyin6: 6,
keyin7: 7,
} */

console.log('===========================');
console.log('Задание 1');
console.log('===========================');
//1 
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
};

for (const key in numbers) {
    if (numbers[key] >= 3) {
        console.log(numbers[key]);
    }
}

console.log('===========================');
/*Задание 2
Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

const post = {
author: "John", // вывести этот текст
postId: 23,
comments: [
{
userId: 10,
userName: "Alex",
text: "lorem ipsum",
rating: {
likes: 10,
dislikes: 2, // вывести это число
},
},
{
userId: 5, // вывести это число
userName: "Jane",
text: "lorem ipsum 2", // вывести этот текст
rating: {
likes: 3,
dislikes: 1,
},
},
],
}; */

console.log('Задание 2');
console.log('===========================');

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

console.log(`author: ${post.author}`);
console.log(`dislikes: ${post.comments[0].rating.dislikes}`);
console.log(`userId: ${post.comments[1].userId}`);
console.log(`text: ${post.comments[1].text}`);
console.log('===========================');

/*Задание 3
Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

const products = [
{
id: 3,
price: 200,
},
{
id: 4,
price: 900,
},
{
id: 1,
price: 1000,
},
]; */
console.log('Задание 3');
console.log('===========================');


const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

for (const key in products) {
    console.log(`Цена до: ${products[key].price}`);
}

products.forEach((products) => {
    products.price *= 0.85;
});

console.log('-----------------');

for (const key in products) {
    console.log(`Цена после: ${products[key].price}`);
}

console.log('===========================');
/*Задание 4
1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

```
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
]; */

console.log('Задание 4');
console.log('===========================');

const newProducts = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

//1
console.log('------------1------------');

const productsWithPhotos = newProducts.filter((newProducts) => newProducts.photos && newProducts.photos.length > 0);
for (const key in productsWithPhotos) {
    console.log(productsWithPhotos[key]);
}

console.log('------------2------------');

newProducts.sort((a, b) => a.price - b.price);
console.log(newProducts);
for (const key in newProducts) {
    console.log(`Price: ${newProducts[key].price}`);
}

console.log('===========================');
/*Задание 5* 
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
```
Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями. */

console.log('Задание 5*');
console.log('===========================');
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const daysOfWeek = {};

for (let i = 0; i < en.length; i++) {
    let dayEn = en[i];
    let dayRu = ru[i];
    Object.assign(daysOfWeek, { [dayEn]: dayRu });

};

console.log(daysOfWeek);
console.log(daysOfWeek["mon"]);

