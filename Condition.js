// Condition;
const x = 10;
if (x === 10) {
    console.log('x is equal to 10');

} else {
    console.log('not equal');
}

const y = "learning JS";
if (y != "learning JS") {
    console.log('true');

} else {
    console.log('false');
}

const userlogIn = true;
const passwordlogIn = true;
if (userloginIn && passwordloginIn) {
    console.log('every thing is okay');

} else {
    console.log('not okay');
}


const userlogIn1 = true;
const passwordlogIn1 = false;
if (userloginIn1 || passwordloginIn1) {
    console.log('every thing is okay');

} else {
    console.log('not okay');
}

let number = 1000;
if (number <= 840) {
    console.log('greator then number');

} else if (number <= 900) {
    console.log('number is greator then 900')
} else {
    console.log('number === 1000');
}

// Nulish coalescing operator (??);
let val1 = 4 ?? 5
console.log(val1); //4

let val2 = null ?? 2
console.log(val2); //2

let val3 = null ?? undefined
console.log(val3); //undefined

let val4 = undefined ?? 5
console.log(val4); //5

let val5 = null ?? 10 ?? 20
console.log(val5);

// Terinary operator;
condition ? ture : false

const teaprice = 100;
teaprice >= 80 ? console.log('less then 80') : console.log('more then 80');

//switch;
const month = "march";
switch (month) {
    case "jan":
        console.log("january");
        break

    case "feb":
        console.log("feb");
        break

    case "march":
        console.log("march");
        break

    case "april":
        console.log("april");
        break

    default:
        console.log("default case match")
        break;


}

const month4 = 4;
switch (month) {
    case 1:
        console.log("january");
        break

    case 2:
        console.log("feb");
        break

    case 3:
        console.log("march");
        break

    case 4:
        console.log("april");
        break

    default:
        console.log("default case match")
        break;
}

// falsy values;
// false, 0, -0, bigint, 0n, null, undefined, NaN.

// truthy values;
// '0', 'false', "", [], {}, function(){}

// for checking obj is empty or not: 
const emptyobj = {}
if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
}

