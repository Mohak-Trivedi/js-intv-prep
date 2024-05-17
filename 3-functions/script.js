// Functions in JavaScript

// What is function declaration/function definition/function statement?
// Defines what a function can accept and define what the function is supposed to do.
// e.g.:
// function square(num) {
//     return num * num;
// }


// What is function expression?
// Function statement assigned to a variable, hence, forming an expression.
// e.g.:
// const square = function (num) { //can be named as well
//     return num * num;
// }

// console.log(square(5));


// What is an anonymous function?
// RHS of above e.g.
// A function that has no name

// What do we mean by "First Class Functions"?
// A language where functions can be treated as variables, there the functions are
// called as "First Class Functions" or "Functions as First Class Citizens".
//e.g.:
// function square(num) {
//     return num * num;
// }

// function displaySquare(fn) {
//     console.log("Square is: " + fn(5));
// }

// displaySquare(square); // function square passed as argument to function displaySquare


// What is IIFE?
// IIFE : Immediately Invoked Function Expressions
// e.g.:
// (function square(num) {
//     console.log(num * num);
// })(5);


// IIFE-based predict the output question:
// (function (x) {
//     return (function (y) {
//         console.log(x);
//     })(2);
// })(1);
// Output will be 1.
// The inner function is able to access x even though it is not defined in it due
// to closure.


