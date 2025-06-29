let myName = 'asad     ';
console.log(myName.length);
console.log(myName.truelength);

let myArr = ['thor', 'spiderman'];

let heropower = {
    thor: 'hammar',
    spiderman: 'sling',

    getspidermanpower: function () {
        console.log(`spiderman power is ${this.spiderman}`)
    }
}

Object.prototype.Asad = function () {
    console.log(`Asad is in all objects`)
}
heropower.Asad()
myArr.Asad();

// INHERITANCE;
let user1 = {
    username: "Mengal",
    email: "mengal12@gamil.com"
}

const Teacher = {
    makevideo: "true"
}

const student = {
    makeAssigment: true
}

const Teaching = {
    isAvailable: false,
    __proto__: Teacher
}

student.__proto__ = user1

//MODERN SYNTAX;
Object.setPrototypeOf(Teaching, Teacher)


// CALLING IN JS;
function setuser(username) {
    this.username = username;
    console.log('called');
}

function createuser(username, email, password) {
    setuser.call(this, username)
    this.email = email;
    this.password = password
}

const newvar = new createuser('ahmad', 'ahmad34@gamil.com', '2345');
console.log(newvar)


// CLASS;
class user {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptpass() {
        return `${this.password}asadnawaz`
    }

    changeusername() {
        return `${this.username.toUpperCase()}`
    }
}

const mengal = new user('mengal', 'mengal@gamil.com', '342');

console.log(mengal.encryptpass());
console.log(mengal.changeusername());

// BY USING FUNCTION;
function user2(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

user2.prototype.encryptpass = function () {
    return `${this.password}asadnawaz`
}

user2.prototype.changeusername = function () {
    return `${this.username.toUpperCase()}`
}

const mengal1 = new user2('mengal', 'mengal@gamil.com', '342');

console.log(mengal.encryptpass());
console.log(mengal.changeusername());

class user0 {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`USERNAME IS ${this.username}`);
    }
}

class teacher extends user0 {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addsome() {
        return (`addsomething by asadnawaz ${this.username}`);
        // return or console both works;
    }
};

const part1 = new teacher('mengal', 'mengalgamil.com', '2345');
console.log(part1);
