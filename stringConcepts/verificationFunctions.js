let welcomeMsg = " Hi welcome to kurimurai ";
console.log(welcomeMsg.includes("Kurimurai"));


welcomeMsg = welcomeMsg.trim()
console.log(welcomeMsg);
console.log(welcomeMsg.trim().length);

console.log(welcomeMsg.length);

const isStarts = welcomeMsg.startsWith("Hi");
console.log(isStarts);


const isEnds = welcomeMsg.endsWith("kurimurai");
console.log(isEnds);
