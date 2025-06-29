// OBJECT LITERAL;
const jsUser = {
    name: 'Asad nawaz',
    'sure_name': 'mengal',
    age: 24,
    location: 'sadda',
    email: 'asadnawagmail.com',
    islogin: false,
    lastliginDays: ['monday', 'tuesday']
}

console.log(jsUser.email); // Ist Method
console.log(jsUser['email']); // Second Method
console.log(jsUser['sure_name']) // it is best methods to access values.

let mysum = Symbol("");
console.log(typeof mysum);

const Obj = {
    [mysum]: "key2"
}
console.log(Obj[mysum]);



// OVERWRITE THE VALUES;
jsUser.name = "Asad Nawaz Mengal";

// LOCK THE OBJECT OR VALUES;
Object.freeze(jsUser)
age = 26;
console.log(jsUser)

jsUser.greeting = function () {
    console.log('hello JS user');
}
console.log(jsUser.greeting());

jsUser.greeting2 = function () {
    console.log(`Hello JS USERS, ${this.sure_name}`);
}
console.log(jsUser.greeting2())

// const tinderuser = new Object(); //singal object
const tinderuser = {} //non-singal object

tinderuser.id = "12345";
tinderuser.name = "Umar";
tinderuser.islogin = false;
console.log(tinderuser);

const userchoice = {
    full_name: {
        myname: {
            first_name: "Asad",
            last_name: "Nawaz"
        }
    }
}
console.log(userchoice.full_name.myname.last_name);
console.log(Object.keys(userchoice));
console.log(Object.values(userchoice));
console.log(Object.hasOwnProperty("islogin")); //this prop give us presence or absence of elements.

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "f", 6: "g" };
const obj3 = Object.assign(obj1, obj2,); //assign operator
console.log(obj3);

// const obj4 = {obj1, obj2} //class operator
// console.log(obj4);

const obj5 = { ...obj1, ...obj2 } //so this method is best. //spread opeator.
console.log(obj5);

const user1 = {
    fname: "Asad",
    lName: "Nawaz"
}

const { fName: lname } = user
console.log(user); //so this is D-strucuring.
const user = {
    user_name: "Asad Nawaz",
    price: 200
}

function handleuser(anyobject) {
    console.log(`my name is ${anyobject.user_name}, and my price is ${anyobject.price}`);

}

handleuser(user);

