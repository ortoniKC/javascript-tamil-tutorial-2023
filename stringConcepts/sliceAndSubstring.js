const str = "welcome to kurimurai"
console.log(str);

const mySlice = str.slice(-2)
console.log(mySlice);
console.log(str.slice(0, 8));

const mySub = str.substring(-2)
console.log(mySub);

console.log(str.charAt(20));

// reverse
const len = str.length;
let reverseStr = "";
for (let i = len - 1; i >= 0; i--) {

    reverseStr = reverseStr + str.charAt(i)
    // reverseStr += str.charAt(i)
}
console.log(reverseStr);