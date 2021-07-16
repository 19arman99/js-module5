// Создайте произвольный массив Map. 
// Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.

let phone = new Map([
    ["Samsung", "S10"],
    ["Iphone", "11 pro"],
    ["Huawey", "p40"]
]);
phone.forEach(function (key, value){
    console.log("Ключ - " + value + ", значение - " + key);
});