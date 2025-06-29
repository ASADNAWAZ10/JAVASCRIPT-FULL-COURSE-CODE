setTimeout(function () {
    console.log("coding with mengal");

}, 2000)

const sayAsad = function () {
    console.log('hey');
}
setTimeout(sayAsad, 2000);

let changText = function () {
    document.querySelector('h2').innerHTML = 'JS is best language'
}
let changeMe = setTimeout(changText, 2000);

document.querySelector('#stop').addEventListener('click', function () {
    clearTimeout(changeMe);  //cleartimeout stop the function.
    console.log("STOPPED");

})

setInterval(function () {
    console.log("coding with Mengal", Date.now());

}, 1000);

const sayDate = function () {
    console.log(Date.now());
};
