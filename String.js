let fullName = "Asad Nawaz";
age = 23;
console.log(`my name is ${fullName} and my age is ${age}`);

const username = ("asad nawaz");
console.log(username.toUpperCase());
console.log(username.charAt(1));
console.log(username.indexOf('d'));

const newstring1 = username.substring(0, 4); // cannot use neg values
console.log(newstring1);

const newstr2 = username.slice(-8, 4); //here we also use neg values
console.log(newstr2);

const newstring = "  Asad Nawaz  ";
console.log(newstring);
console.log(newstring.trim());

const url = 'https://asadnawazcom/asad%20nawaz';
console.log(url.replace('%20', '-'));
console.log(url.includes('asadnawaz')); //true.
console.log(url.includes('mengal')); //false.

let name = 'ASAD NAWAZ MENGAL';
console.log(name.split()); //convert into array;



