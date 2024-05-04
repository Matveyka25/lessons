let a = 10;
const array = [];
const array1 = [1, 2, 3];
const strArray = ['str1', 'str2', 'str3'];

const str = "Строка";

array[0] = 2;
String(array[0]);
console.log(array[0]);

console.log(str[0]);

for(let i= 0; i <array1.length; i++) {
    console.log(array1[i]);
}

console.log(array1.length);
console.log(str.length);

const str1 = 'Строка1';
console.log(str.toUpperCase());
console.log(str1.toLowerCase());

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

const world = "Hello word";
console.log(world.slice(6, 10));
console.log(world.substring(6, 11));

console.log(world.split(" ").reverse().join(" "));

const num = 12.5;
const numToStr = String(num);
const numToNumber = Number(numToStr[0]);
const numToNUmber1 = parseInt(num);

console.log(Math.round(num));
console.log(Math.floor(num));

