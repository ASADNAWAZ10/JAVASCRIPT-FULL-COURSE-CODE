// Function;
function addNumber(num1, num2) {
    console.log(num1 + num2);

}

addNumber(2, 4);

// Functions;
function addNumber(num1, num2) {
    let result = num1 + num2;
    return result;

}

let result = addNumber(2, 4);
console.log("result", result);

function calcucard(...num1) {   //...num1 print all vaalues. it is rest or spread operator
    return num1
}

console.log(calcucard(2300, 2400, 1200));

function calcucard(val1, val2, ...num1) {   //so here print 1200,
    return num1
}

console.log(calcucard(2300, 2400, 1200));

const user0 = {
    user_name: "Asad Nawaz",
    price: 200
}

function handleuser(anyobject) {
    console.log(`my name is ${anyobject.user_name}, and my price is ${anyobject.price}`);

}

handleuser(user0);

// Array;
const newarr = [100, 200, 300, 400, 500, 600]

function secarray(getarray) {
    return getarray[3]
}

console.log(secarray(newarr)); //ist method 
console.log(secarray([100, 200, 300, 400, 500])); //sec method 

function one() {
    let username = "Asad"

    function two() {
        let website = 'YOUTUBE'
        console.log(username); //we can access the parent in child.

    }
    // console.log(website) // we cannot access the child in parent.

    two();
}

one();

console.log(numbers(4));
function numbers(num) {   //in here we use call back above the function. and below the function
    return num + 4
};


let Funtwo = function (num2) {  // here only below the function
    return num2 + 5;

}
console.log(Funtwo(4));

const user = {
    username: 'imran khan',
    age: 71,

    Welcomemessage: function () {
        console.log(`${this.username}, welcome to website`);

    }
}
user.Welcomemessage()
user.username = "Asad Nawaz"
user.Welcomemessage()

// Arrow function; concise syntax to writing function expression.
const arrowfun = (num1, num2) => {
    return num1 + num2  //so, this is explcit method bcz we use return.
}

console.log(arrowfun(3, 2));

// IMPLICIT return;
const number = (num1, num2) => num1 + num2  //here no need to write return.
const num = (num1, num2) => (num1 + num2)  // so, both are right.
const nums = (num1, num2) => ({ username: "Asad Nawaz" })
console.log(one(3, 2));

