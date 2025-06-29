class user {
    constructor(username) {
        this.username = username;
    }  //we use  constructor for initialize the the object

    logMe() {
        return ` USERNAME: ${this.username}`
    }

    static createId() {
        return `1233`
    } //we use static for not accessing.
};

const Asad = new user('Asad Nawaz Mengal');
console.log(Asad.logMe());
console.log(Asad.createId()); //it will not access.

MATH.PI;
console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI); //PI value is constant it cannot change.

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor); //it show us that it is not changing.

const personalDetial = {
    name: "Asad Nawaz",
    email: "asadnawaz@gmail.com"
}
console.log(Object.getOwnPropertyDescriptor(personalDetial, "name"));

Object.defineProperty(personalDetial, "name", {
    writable: false,
    enumerable: false
});

console.log(Object.getOwnPropertyDescriptor(personalDetial, "name"));

// GETER AND SETER MEHTODS;
class user {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    getemail() {
        return this._email.toUpperCase()
    }

    setemail(value) {
        this._email = value
    }
    get password() {
        return this._password.toUpperCase()
    }

    set password(vlaue) {
        this._password = vlaue.toUpperCase()
    }
}
const Asad2 = new user('asadgamil.com', 'dsldkjf')
console.log(Asad2.password);
console.log(Asad2.email)
