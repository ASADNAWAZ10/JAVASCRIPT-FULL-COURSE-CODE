Date;
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toJSON());
console.log(myDate.toUTCString());
console.log(typeof myDate);

 const newstr1 = new Date(2025, 0, 23);
 console.log(newstr1.toDateString());

 const newstr2 = new Date(2025, 0, 23, 5, 3);
 console.log(newstr2.toLocaleString());

 let createDate = new Date("01, 14, 2025"); //mm,dd,yy;
 console.log(createDate);

 let time = Date.now();
 console.log(Math.floor(time/1000)); // it convert into second;
