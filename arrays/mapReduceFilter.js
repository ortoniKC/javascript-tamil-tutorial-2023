const numbers = [5, 15, 87, 45, 22, 14, 11, 69, 65, 23, 84];

console.log(numbers.length);
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);

const multipleOfTwos = numbers.map((numb, i) => {
    return numb * 2;
});
console.log(multipleOfTwos);
// const evenNumberOnly = numbers.filter((numb, i) => { 
//     return numb % 2 == 0;
// })
const oddNumberOnly = numbers.filter(numb => numb % 2 != 0)
console.log(oddNumberOnly);

const sumOfOdd = oddNumberOnly.reduce((prev, current) => {
    return prev + current;
}, 0)
console.log(sumOfOdd);