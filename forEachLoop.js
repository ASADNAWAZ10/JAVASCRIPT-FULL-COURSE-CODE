// for Each loop;
const languages = ["js", "java", "python"];
languages.forEach(function (val) {
    console.log(val)      //ist method
})

languages.forEach((item) => {
    console.log(item)  //second method
});

const coding = ["js", "java", "python"];

function printme(val) {
    console.log(val);  //so, we also use function like this.

}
coding.forEach(printme)
coding.forEach((item, index, arr) => {
    console.log(item, index, arr)  //it also pass three parameters for index, arraylist
});

mycoding = [
    {
        file_name: "js",
        language: "javascript"
    },
    {
        file_name: "py",
        language: "python"
    },
    {
        file_name: "TS",
        language: "Typescript"
    }
]
mycoding.forEach((item) => {
    console.log(item.file_name); // it not return.
    console.log(item.language);

});

// REDUCE;
const mynums4 = [1, 2, 3]
const mytotal4 = mynums4.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval ${currval}`)
    return acc + currval;
}, 0) //starting acc val from 0,

console.log(mytotal4);

const mynums = [1, 2, 3]
const mytotal = mynums.reduce((acc, curval) => acc + curval, 0)
console.log(mytotal);

const mycourses = [
    {
        itemName: "JS course",
        price: 4000
    },

    {
        itemName: "PYTHON course",
        price: 3000
    },

    {
        itemName: "C++ course",
        price: 2300
    },
];

const totalpyment = mycourses.reduce((acc, item) => acc + item.price, 0)
console.log(totalpyment)
