// Objects

// var user = {
//     name: "Ian",
//     age: 52,
//     hobby: "Photography",
//     isMarried: true,
// }

// console.log(user)

// Ternary Operator

// function isUserValid(bool) {
//     return bool;
// }

// var answer = isUserValid(false) ? "You may enter" : "You may not enter";

// console.log(answer);

// let and const

const player = "Bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    wizardLevel = true; // If you use let here it creates a scope inside the if statement, but without let it uses the wizardLevel from the main script
}

console.log(wizardLevel)