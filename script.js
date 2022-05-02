const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?", "пример: Простые, Сложные, Интерактивные");
const screenPrice = +prompt("Сколько будет стоить данная работа?", "пример: 12000");
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");
const fullPrice = screenPrice + servicePrice1 + servicePrice2;
const rollback = 15; // Откат посреднику
const servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));

let allServicePrices;

// Объявить функцию getAllServicePrices. Функция возвращает сумму всех дополнительных услуг.
// Результат сохраняем в переменную allServicePrices. Тип - function expression
const getAllServicePrices = function () {  
  allServicePrices = servicePrice1 + servicePrice2;
  return allServicePrices;
};

// Объявить функцию getFullPrice. Функция возвращает сумму стоимости верстки и стоимости дополнительных услуг 
// (screenPrice + allServicePrices). Результат сохраняем в переменную fullPrice. Тип - function declaration
function getFullPrice() {
  fullPrice = screenPrice + allServicePrices;
  return fullPrice;
};

// Объявить функцию getTitle. Функция возвращает title меняя его таким образом: первый символ с большой буквы, 
// остальные с маленькой". Учесть вариант что строка может начинаться с пустых символов. " КаЛьКулятор Верстки"
function getTitle() {
  return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
};

// Объявить функцию getServicePercentPrices. Функция возвращает итоговую стоимость за вычетом процента отката. 
// Результат сохраняем в переменную servicePercentPrice (итоговая стоимость минус сумма отката)
function getServicePercentPrices() {
  return servicePercentPrice;
};

// Почистить консоль логи и добавить недостающие, должны остаться:
// - вызовы функции showTypeOf
// - вывод строки с типами экранов для разработки screens
// - сообщение о скидке пользователю (вызовы функции getRollbackMessage)
// - стоимость за вычетом процента отката посреднику (вызовы функции getServicePercentPrices)

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price <= 30000) {
    return "Даем скидку в 5%";
  } else if (price < 15000 && price >= 0) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  };
};

let showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

showTypeOf(screens);

console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrices());