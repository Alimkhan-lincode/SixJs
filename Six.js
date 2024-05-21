/* Даны массив arr_1= [101, 202, 303, 404, 505] 
и arr_2 = [606, 707, 808, 909] - 
создайте третий массив superArr который будет 
результатом "слияния" предыдущих двух. 
Результатом должен быть массив 
superArr = [101, 202, 303, 404, 505, 606, 707, 808, 909] */

const arr_1 = [101, 202, 303, 404, 505];
const arr_2 = [606, 707, 808, 909];

const superArr = [...arr_1, ...arr_2];

console.log(superArr);

/*
Метод `Math.min()` может принимать в параметры неограниченное кол-во чисел и возвращает наименьшее из них. Например:
Math.min(102, 1231, 29922, 1);      // вернет 1
Передайте в этот метод элементы массива superArr (не сам массив, а его элементы)
Для этого вам надо раскрыть массив. */

const ArrSupa = Math.min(...superArr);
console.log(ArrSupa);

/*Дан объект obj со свойствами width: 300 и heigth: 550. 
Создайте новый объект, который будет копией obj, 
но будет иметь еще и метод area(), 
который должен вернуть произведение свойств width и height; */

const obj = {
  width: 300,
  heigth: 550
};

const copyObj = {
  ...obj,
  area() {
    return this.width * this.heigth;
  }
};

console.log(copyObj.area());

// Создайте функцию которая принимает произвольное количество параметров и возвращает их сумму.

function sum(...args) {
  return args.reduce((total, num) => total
    + num, 0);
}

console.log(sum(2, 6, 9, 22, 47));

// Получить узел html

let html = document.documentElement;
console.log(html);

// Поменять фоновый цвет всего документа на синий

document.getElementById("body").style.backgroundColor = "blue";

// Пользуясь узлом document.body получить узлы <b> и <i>.

const body = document.body
let tagBold = body.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling
let tagI = tagBold.parentNode.nextSibling.nextSibling.firstChild.nextSibling

console.log(tagBold);
console.log(tagI);

// Поменять текст в обоих узлах

document.getElementsByTagName("b")[0].textContent = "Поменял текст у тэга bold"
document.getElementsByTagName("i")[0].textContent = "Поменял текст у тэга I"

// Задайте тегу <b> класс bold, а тегу <i> класс cursive

document.getElementsByTagName("b")[0].className = "bold"
document.getElementsByTagName("i")[0].className = "cursive"

// Получить текстовый узел Линкод находящийся внутри тега <title>, и поменять его на 'Lincode’.

const head = document.head.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.textContent = "Lincode"
console.log(head);

// Удалить узел <b>**

document.getElementsByTagName("b")[0].remove()

// Создайте промис, который возвращает случайное число от 1 до 10. Затем обработайте этот промис, чтобы вывести результат в консоль.

function promise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const random = Math.floor(Math.random() * 10) + 1;
      resolve(random);
    });
  });
}

promise()
  .then((random) => {
    console.log("Случайное число:", random);
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  });

// Создайте функцию, которая принимает на вход число и возвращает промис. Если число меньше 10, то промис должен быть выполнен успешно, иначе — с ошибкой. В случае успешного выполнения промиса выведите сообщение «Успех!», в противном случае — «Ошибка!».

const dabblePromis = new Promise((resolve, rejected) => {
  let a = 10;
  let b = 5;
  let c = b < a
  if (c) {
    resolve(console.log("Успех!"))
  } else {
    rejected(console.log("Ошибка!"))
  }
})

dabblePromis.then((result) => {
  return result;
}).catch((error) => {
  console.log(error);
})

// Создайте новый Promise, который сразу же переходит в состояние "resolved".
// Выведите в консоль результат обработки этого Promise с помощью метода `then()`.

const resolvePromise = Promise.resolve("Успешно!");

resolvePromise.then((result) => {
  return console.log(result);
});


// 1. Создайте Promise, который использует функцию `setTimeout` для имитации асинхронной операции.
// 2. Задайте таймер на 2 секунды.
// 3. Выведите в консоль результат обработки этого Promise с помощью метода `then()`.

const setTimePromimese = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ассинхронность в две секунды!");
    }, 2000);
  });
}

setTimePromimese().then((result) => {
  console.log(result);
});


// 1. Создайте два Promise, которые используют функцию `setTimeout`.
// 2. Задайте таймер на 1 и 3 секунды соответственно.
// 3. Используйте Promise.all, чтобы выполнить оба Promise одновременно.
// 4. Выведите в консоль результаты выполнения обоих Promise.

const onePromiseAll = new Promise(
  resolve => setTimeout(() =>
  resolve("Одновременно"),
  3000))

const twoPromiseAll = new Promise(
  resolve => setTimeout(() =>
  resolve("С первым промисом"),
  5000))

  Promise.all([onePromiseAll, twoPromiseAll])
  .then(([response, value]) => {
    console.log(response);
    // onePromiseAll
    console.log(value);
    // twoPromiseAll
  })

// 1. Создайте два Promise, которые используют функцию `setTimeout`.
// 2. Задайте таймер на 1 и 3 секунды соответственно.
// 3. Используйте Promise.race, чтобы выполнить оба Promise и получить результат выполнения самого первого завершенного Promise.
// 4. Выведите в консоль результат.

const oneRacePromis = new Promise(resolve =>
  setTimeout(() =>
  resolve("Выведит первым"),
1000))

const twoRacePromis = new Promise(resolve =>
  setTimeout(() =>
  resolve("Проигнорирует"),
3000))

Promise.race([oneRacePromis, twoRacePromis])
.then((value) => {
  console.log(value);
})

