const fruits = [
    "apple", "orange",
    "mango", "pine",
    "grape", "strawberry"
];

const myData = {
    apple: "120Rs",
    orange: "60Rs",
    pine: "45Rs"
}

// console.log(myData.apple);

for (const data in myData) {
    console.log(data, myData[data]);
}

// for (const data of myData) {
//     console.log(data);
// }

// for (const oneFruit of fruits) {
//     console.log(oneFruit, fruits[oneFruit]);
// }


// console.log(fruits);

// fruits[6] = "banana";
// console.log(fruits);


// let myFriends = new Array("kous", "dhi", "dine")
// console.log(myFriends.length);
// console.log(myFriends[0]);
// console.log(fruits.length);

// console.log(fruits[fruits.length - 1]);




// const myName = "koushik";
// console.log(Array.isArray(myName));
// console.log(typeof myName);
// console.log(typeof fruits);
// console.log(Array.isArray(fruits));
