// PROMISE:
const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('hello')
        resolve()
    }, 1000)
})
promise.then(function () {
    console.log('so promise is fulfilled');
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('async 2');
        resolve()
    }, 1000)

}).then(function () {
    console.log('fulfield');
})

const promisethree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('hey done');
        resolve({ name: "asadnawaz", age: 23, email: 'asadnawaz211@gamil.com' })
    }, 1000)
})
promisethree.then(function (user) {
    console.log(user);
})


const promisefour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: 'Asad Nawaz', password: 2345 })
        } else {
            reject('ERROR: SOMETHING WENT WRONG')
        }
    }, 1000)
})

promisefour.then(function (res) {
    console.log(res);
    return res.username

}).catch((err) => {
    console.log(err)
}).finally(() => console.log("the promise is resolved or rejected"))


promisefive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: 'Asad Nawaz', password: 2345 })
        } else {
            reject('ERROR: SOMETHING WENT WRONG')
        }
    }, 1000)
})

async function consumefivepromise() {
    try {
        const response = await promisefive();
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}
consumefivepromise();

// Async await function;
async function getusers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getusers();

// Promise function then and catch method.
fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => console.log(error));

function user(username, logincount, isloggedin) {
    this.username = username;
    this.logincount = logincount;
    this.isloggedin = isloggedin
}

const userone = new user('ASAD', 16, true) //new keyworld give us copy of the object
console.log(userone)
const usertwo = new user('mengal', 23, true)
console.log(usertwo); //if we not use new keyworld then it will overwirte the first userone.
