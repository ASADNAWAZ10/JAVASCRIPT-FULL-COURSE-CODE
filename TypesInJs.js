// primitive;
// 7types: string, Number, Boolean, Null, undefined, symbol, bigint

// Non-primitve; Array,  object, function;

// Symbol;
const id = Symbol('232');
const anotherId = Symbol('232');

console.log(id == anotherId);

// BigInt;
const bigintNumber = 23544667788907n
console.log(typeof bigintNumber);

Array;
arr = ["superman", "batman", "spiderman"];
console.log(arr);
console.warn(typeof arr);

Object;
let myObj = {
    name: "Asad Nawaz Mengal",
    age: 23,
    skills: ["html", "css", "javascript"]
};

console.log(myObj);

// Function;
const myFunction = function () {
    console.log("coding with Asad");
}
myFunction();

// stuck(primitve), heap(non-primitive or reference);

let userone = "hey i am here for learning javascipt";
let usertwo = userone;
usertwo = "i am here for coding";

console.log(userone);
console.log(usertwo); //so it give us copy not original. stuck always change in copy.

let userone2 = {
    fname: "Asad Nawaz",
    age: 23,
}

let usertwo2 = userone2;
usertwo2.fname = "Asad Nawaz Mengal";
console.log(usertwo2); //so heap change in origanal values, not in copy.


