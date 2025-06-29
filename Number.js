// Number;
let score = 65;
console.log(score);
let num = new Number(23);
console.log(num.toString().length); //convert into string;
console.log(num.toString().fixed(2)); //two values after decimal.

let ontherval = 232.824;
console.log(ontherval.toPrecision(3)); //232

let val2 = 100000;
console.log(val2.toLocaleString());

Math;
console.log(Math.abs(-3)); //abs only  convert neg into pos.
console.log(Math.round(2.7)); //it roundup the values.
console.log(Math.ceil(4.3)); //it will take biger values.
console.log(Math.floor(2.6)); //it will take small values.
console.log(Math.min(4.3, 7));
console.log(Math.max(4.3, 9));

console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
