// for loop;
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
}

for (let asad = 0; asad <= 10; asad++) {
    const element = asad;
    console.log(`outer loop value: ${asad}`);
    for (let nawaz = 0; nawaz <= 10; nawaz++) {
        const element = nawaz;
        //console.log(`inner loop value: ${nawaz} and outer ${asad}`)
        console.log(asad + "*" + nawaz + "=" + asad * nawaz);
    }

}

// loop on array;
let myArr1 = ["superman", "spiderman", "batman"];
console.log(myArr1);
for (let index = 0; index < myArr1.length; index++) {
    const element = myArr1[index];
    console.log(element);
}

// break and continue;
for (let index = 1; index <= 30; index++) {
    if (index == 5) {
        console.log('Detected 5');
        break
    }
    console.log(`value of index is: ${index}`);

}


for (let index = 1; index <= 30; index++) {
    if (index == 5) {
        console.log('Detected 5');
        continue
    }
    console.log(`value of index is: ${index}`);

}

// while loop;
let index = 0;
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index + 2
}

let myArr = ["superman", "spiderman", "batman"];
let arr = 0;
while (arr < myArr.length) {
    console.log(`value is ${myArr[arr]}`);
    arr = arr + 1
}

// do while loop;
let score = 1;
do {
    console.log(`score is ${score}`)
    score++
} while (score <= 10);

let score1 = 11;
do {
    console.log(`score is ${score}`) //here print 11 so first print and then apply condition
    score++
} while (score <= 10);

// for of loop;
const array = [1, 2, 3, 4, 5];
for (const num of array) {
    console.log(num);
}

const string = "hello world";
for (const str of string) {
    console.log(str)
}

//Map;
const map = new Map();
map.set("IN", "india")
map.set("USA", "united state of america")
map.set("ft", "france")
console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value)
}

// for in loop;
const myobj = {
    JS: "javascript",
    CPP: "c++",
    RB: "ruby",
    swift: "swift by apple"
}

for (const val in myobj) {
    console.log(`${val}, shortcut is for ${myobj[val]}`);
};