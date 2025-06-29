
// Array;
let arr = [1, 2, 3, 4, "Asad", true];
console.log(arr[4]);
arr = [1, 2, 3, 4, "nawaz"];
console.log(arr);

const newarr = new Array(1, 1, 2, 3, 4);
console.log(newarr);

// ARRAY METHOD;
newarr.push(4);
newarr.pop(); //it delete the last value.
newarr.unshift(6); //it add at the first position.
newarr.shift(); //it delete the first position value.

console.log(newarr.includes(7)); //false.
console.log(newarr.indexOf(2));  //2

const otherarr = newarr.join(); //it convert array into string;
console.log(otherarr);

