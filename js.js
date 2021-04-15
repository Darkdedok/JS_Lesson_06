//1) Створити масив з 20 чисел та:

//const arr = [2, 10, 3, 4, 5, 23, 6, 7, 45, 34, 61, 67, 54, 34, 65, 8, 65, 87, 34, 67];

// a) відсортувати його від меншого до більшого.
/* let downToUp = arr.sort((a, b) => { return a - b;}); 
console.log(arr);*/

// b) відсортувати його від більшого до меншого.
/* let upToDown = arr.sort((a, b) => { return b - a;}); 
console.log(arr); */

// c) Відфілтрувати числа які є кратними 3.
/* let firstFilter = arr.filter((value) => {return value % 3 === 0;});
console.log(firstFilter); */

//d) Відфілтрувати числа які є більшими за 10.
/* let secondFilter = arr.filter((value) => {return value > 10;});
console.log(secondFilter); */

//e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
/* let forEach = arr.forEach((number) => { document.write(` ${number} `) }); */

//f) За допомогою map збільшити кожен елемент в масиві в три рази.
/* let map = arr.map((number) => {return number*3;});
console.log (map); */

//g) Порахувати загальну суму всіх елментів у масиві (reduce) 
/* let summ = arr.reduce((acum, number) => {return acum+number;});
console.log(summ); */

//2) Створити масив з 20 стрічок та:

//const arr = ['some', 'sence', 'in', 'this', 'text', 'user', 'object', 'array', 'word', 'tax', 'function', 'prototype', 'for', 'in', 'if', 'each', 'all', 'const', 'let', 'var'];

// a) Відсортувати його в алфавітному порядку
/* let sortByAlph = arr.sort((a, b) => {if (a>b) {return 1} return -1;});
console.log(sortByAlph); */

//b) Відсортувати в зворотньому порядку
/* let sortByAlph = arr.sort((a, b) => {if (a<b) {return 1} return -1;});
console.log(sortByAlph); */

//c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
/* let newArr = arr.filter((string) => { if (string.length > 4) {return string;} } );
console.log(newArr); */

//d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*';
/* let secondNewArr = arr.map((value)=> {return (`Sam says ${value}`);});
console.log(secondNewArr); */

//3) Все робити тільки за допомогою методів масивів!
//Дано масив :
/* const users = [{
        name: 'vasya',
        age: 31,
        isMarried: false
    },
    {
        name: 'petya',
        age: 30,
        isMarried: true
    },
    {
        name: 'kolya',
        age: 29,
        isMarried: true
    },
    {
        name: 'olya',
        age: 28,
        isMarried: false
    },
    {
        name: 'max',
        age: 30,
        isMarried: true
    },
    {
        name: 'anya',
        age: 31,
        isMarried: false
    },
    {
        name: 'oleg',
        age: 28,
        isMarried: false
    },
    {
        name: 'andrey',
        age: 29,
        isMarried: true
    },
    {
        name: 'masha',
        age: 30,
        isMarried: true
    },
    {
        name: 'olya',
        age: 31,
        isMarried: false
    },
    {
        name: 'max',
        age: 31,
        isMarried: true
    }
];
 */
//a) відсортувати його за  віком (зростання , а потім окремо спадання)
/* let ageSortDownToUp = users.sort((a, b) => { if (a.age>b.age) {return 1} return -1;});
console.log(ageSortDownToUp);
let ageSortUpToDown = users.sort((a, b) => { if (a.age<b.age) {return 1} return -1;});
console.log(ageSortUpToDown); */

//b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
/* let nameSortDownToUp = users.sort((a, b) => a.name.length - b.name.length);
console.log(nameSortDownToUp);
debugger;
let nameSortUpToDown = users.sort((a, b) => b.name.length - a.name.length);
console.log(nameSortUpToDown);*/

//c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
//d) відсортувати його за індентифікатором
/* let addId = users.map((value, index) =>({  ...value,    id: index + 1   }));
//console.log(addId);
//console.log(users);
addId.sort((a,b) => b.id - a.id);
//console.log(addId);
//console.log(users); */

//e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
/* let newArr = users.reduce((acc, cur) => cur.isMarried ? [...acc, {...cur, hasHouse: true}] : acc, []);
console.log(newArr);
console.log(users); */
/* 
const cars = [
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 4,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 4,power: 180},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:5,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
 ]; */
 
// Відфільтрувати масив за наступними крітеріями :

//- двигун більше 3х літрів
/* let filter = cars.reduce((acc, cur) => cur.volume >= 3 ? [...acc, {cur}] : acc, []);
console.log(filter); */

// - двигун = 2л
/* let filter = cars.reduce((acc, cur) => cur.volume === 2 ? [...acc, {cur}] : acc, []);
 console.log(filter); */

// - виробник мерс
/* let filter = cars.reduce((acc, cur) => cur.producer === 'mercedes' ? [...acc, {cur}] : acc, []);
console.log(filter); */

// - двигун більше 3х літрів + виробник мерседес
 /* let filter  = cars.reduce((acc, cur) => {
    if (cur.producer === 'mercedes' && cur.volume >= 3) {return ([...acc, cur])}
return acc;} , []);
console.log(filter); */

//- двигун більше 3х літрів + виробник субару
/* let filter  = cars.reduce((acc, cur) => {
    if (cur.producer === 'subaru' && cur.volume >= 3) {return ([...acc, cur])}
return acc;} , []);
console.log(filter); */

//- сили більше ніж 300
/* let filter = cars.reduce((acc, cur) => cur.power >= 300 ? [...acc, cur] : acc, []);
console.log(filter);  */

//- сили більше ніж 300 + виробник субару
/* let filter  = cars.reduce((acc, cur) => {
    if (cur.producer === 'subaru' && cur.power >= 300) {return ([...acc, cur])}
return acc;} , []);
console.log(filter);  */

//- мотор серіі ej
/* let filter  = cars.reduce((acc, cur) => cur.engine.startsWith('ej') ? [...acc, cur] : acc, [] );
console.log(filter); */

//- сили більше ніж 300 + виробник субару + мотор серіі ej
/* let filter = cars.filter(value => value.power >= 300 && value.producer === 'subaru' && value.engine.startsWith ('ej'));
console.log(filter); */

//- двигун меньше 3х літрів + виробник мерседес
/* console.log(cars.filter(value => value.producer === 'mercedes' && value.volume < 3)); */

//- двигун більше 2л + сили більше 250
/*  console.log(cars.filter(value => value.power > 250 && value.volume > 2)); */

//- сили більше 250  + виробник бмв
/*  console.log(cars.filter(value => value.power > 250 && value.producer === 'bmw')); */

//- взять слдующий массив
/* const usersWithAddress = [
   {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
   {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
   {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
   {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
   {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
   {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
   {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
   {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
   {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
   {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
   {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
]; */

//-- Відсортувати їх по ID
/* console.log(usersWithAddress.sort((a,b) => a.id - b.id)); */

// -- Відсортувати їх по ID в зворотньому порядку
/* console.log(usersWithAddress.sort((a,b) => b.id - a.id)); */

// -- Відсортувати по віку
/* console.log(usersWithAddress.sort((a, b) => a.age - b.age)); */

// -- Відсортувати по віку в зворотньому порядку
/* console.log(usersWithAddress.sort((a, b) => b.age - a.age)); */

// -- Відсорутвати по імені
/*  console.log(usersWithAddress.sort((a, b) => {
     if (a.name > b.name) {
         return 1;
     }
     return -1;
 })); */

// -- Відсорутвати по назві вулиці
/* console.log(usersWithAddress.sort((a, b) => {
    if (a.address.street > b.address.street) {
        return 1;
    }
    return -1;
}));  */

//-- Відсорутвати по номеру будинку
/* console.log(usersWithAddress.sort((a, b) => a.address.number - b.address.number)); */

//-- Залищити тільки тих, хто молодший ніж 30 (filter)
/* console.log(usersWithAddress.filter(value => value.age < 30)); */

//-- Залишити тільки одружених
/*  console.log(usersWithAddress.filter(value => value.isMarried === true)); */

//-- Залишити тільки одружених, які молодні за 30
/* console.log(usersWithAddress.filter(value => value.isMarried === true && value.age < 30)); */

//-- Залишити лише тих, в кого парні номери будинків.
/* console.log(usersWithAddress.filter(value => value.address.number %2 === 0)); */

//-- Порахувати загальний вік всіх людей. (reduce)
/* let summ = usersWithAddress.reduce((acc, cur) => cur.age + acc, 0);
console.log (summ); */

//-- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
/* let family = usersWithAddress.reduce((acc, cur) => {
    if(cur.age >= 30 && cur.isMarried) 
{
    acc.push({...cur, child: true});
} 
    return acc;
},[]);
console.log (family);

//АБО

let test = usersWithAddress.reduce((acc, cur) => (cur.isMarried && cur.age >= 30 ) ? [...acc, {...cur, child: true}] : acc, []);
console.log (test);
 */