// console.log("loop started");
// for (let i = 1; i < 5; i++) {

//     if (i == 2) continue;

//     console.log("i: " + i);

// }
// console.log("loop over");
console.log("loop started");

outer: for (let i = 1; i < 5; i++) {
    console.log("i: " + i);
    inner: for (let j = 1; j < 5; j++) {
        if (j == 3) continue outer;
        console.log("j: " + j);
    }

}
console.log("loop over");


