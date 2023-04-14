// what is split function

const welcomeMsg = "Hi welcome to kurimurai";

// const values = welcomeMsg.split(" ");
// console.log(values);
// console.log(values.length);

// Program demo
const values = welcomeMsg.split(" ");
let revStr = "";
for (let i = values.length - 1; i >= 0; i--) {
    revStr = revStr + values[i] + " ";
}
console.log(revStr);