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

const ArrSupa =  Math.min(...superArr);
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
  + num, 0 );
}

console.log(sum(2, 6, 9, 22, 47));

// Получить узел html

let html = document.documentElement;

console.log(html);