// filter;
const newnum1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const mufil1 = newnum1.filter((num) => num > 4)  //it return
console.log(mufil1);


const newnum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const mufil2 = newnum2.filter((num) => {
    return num > 4;
})
console.log(mufil2);

const othernum = []
newnum2.forEach((num) => {
    if (num > 4) {
        othernum.push(num)
    }
})
console.log(othernum);


//chaning;
const mynum2 = [1.2, 3, 4, 5, 6, 7, 8]
const mynew = mynum2.map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 14)
console.log(mynew);


const books = [
    { title: "book-one", genre: "history", publish: 2007 },
    { titile: "book-two", genre: "fiction", publish: 2002 },
    { titile: "book-two", genre: "history", publish: 2024 },
    { titile: "book-two", genre: "fiction", publish: 2023 },
    { titile: "book-two", genre: "fiction", publish: 2025 }
]

const userbooks1 = books.filter((bk) => bk.genre === "fiction")
console.log(userbooks1);

const userbooks2 = books.filter((bk) => { return bk.publish >= 2023 })
console.log(userbooks2)

const mynum = [1.2, 3, 4, 5, 6, 7, 8]
const newnum = mynum.map((num) => num + 10)
console.log(newnum);