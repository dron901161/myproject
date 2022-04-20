const title = "Типы данных";
let screens = "Простые, Сложные, Интерактивные";
const screenPrice = 225;
const rollback = 55;
const fullPrice = 55000;
const adaptive = true;

// Вывести в консоль тип данных значений переменных title, fullPrice, adaptive; 
console.log(typeof(title));
console.log(typeof(fullPrice));
console.log(typeof(adaptive));

// Вывести в консоль длину строки из переменной screens 
console.log(screens.length);

// Вывести в консоль “Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани” и
// “Стоимость разработки сайта (fullPrice) рублей/ долларов/гривен/юани” 
console.log('Стоимость верстки экранов:' + ' ' + 'рублей:' + ' ', screenPrice + ';', 'долларов:' + ' ', screenPrice * 0.012973  + ';', 'гривен:' + ' ', + screenPrice * 0.39189 + ';', 'юани:' + ' ', screenPrice *  0.083226 + ';');
console.log('Стоимость верстки экранов:' + ' ' + 'рублей:' + ' ', fullPrice + ';', 'долларов:' + ' ', fullPrice * 0.012973  + ';', 'гривен:' + ' ', + fullPrice * 0.39189 + ';', 'юани:' + ' ', fullPrice *  0.083226 + ';');

// Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
screens = screens.toLowerCase();
screens = screens.split(", ")
console.log(screens);

// Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100)) 
console.log(fullPrice * (rollback/100));