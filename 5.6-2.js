// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, 
// что массив может содержать не только числа, но и, например, знаки, null и так далее.

let chetnie = 0;
let nechetnie = 0;
let nulevie = 0;
let str = 0;
let nulls = 0;
let NaNs = 0;
let x;
let arr = ["hello", "R", "", null, x, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for(let i = 0; i < arr.length; i++){
    if(typeof (arr[i]) === "number" && arr[i] % 2 === 0 && arr[i] !== 0 && !isNaN(arr[i])){
        chetnie += 1;
    }else if(typeof (arr[i]) === "number" && arr[i] % 2 === 1 && arr[i] !== 0 && !isNaN(arr[i])){
        nechetnie += 1;
    }else if(typeof (arr[i]) === "number" && arr[i] === 0){
        nulevie += 1;
    }else if(typeof (arr[i]) === "string"){
        str += 1;
    }else if(arr[i] === null){
        nulls += 1;
    }else if(isNaN(arr[i])){
        NaNs += 1;
    }
}
console.log("четных - " + chetnie );
console.log("нечетных - " + nechetnie);
console.log("нулевых - " + nulevie);
console.log("строк - " + str);
console.log("nulls - " + nulls);
console.log("NaN - " + NaNs);
