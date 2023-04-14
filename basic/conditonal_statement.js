// loan eligibility

// age min_salary is_working, loan_amount

let age = 12;
let min_salary = 2500000;
let is_working = true;
let loan_amount = 10000000

const applicable_amount = min_salary * 5;

if (age >= 20) {
    console.log("The person is elligible for loan");
    if (is_working && (loan_amount <= applicable_amount)) {
        console.log("Loan will be provided soon");
    } else {
        console.log("Loan applicable only for working persons");
    }
} else {
    console.log("The person is NOT elligible for loan");
}



const is_adult = (age >= 18) ? "is adult" : "teen";
console.log(is_adult);


const browser = "edge";

switch (browser) {
    case "chrome":
        console.log("Test launched on chrome");
        break;
    case "firefox":
        console.log("Test launched on firefox");
        break;
    case "safari":
        console.log("Test launched on safari");
        break;
    default:
        console.log("no browser");
        break;
}


// if (browser == "chrome") {
//     console.log("Test launched on chrome");
// }
// else if (browser == "firefox") {
//     console.log("Test launched on fox");
// } else {
//     console.log("no browser");
// }