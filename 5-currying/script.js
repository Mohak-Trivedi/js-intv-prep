// Currying in JS
// Example f(a, b) into f(a)(b)
// function f(a, b) {
//     return `${a} ${b}`;
// }

// function f(a) {
//     return function (b) {
//         return `${a} ${b}`;
//     };
// }
// console.log(f(5)(6));   


// Question - sum(2)(6)(1)
// After writing the code, can explain by running sum(2) first then sum(2)(6)
// and finally sum(2)(6)(1) 
// function sum (a) {
//     return function (b) {
//         return function (c) {
//             return (a + b + c);
//         }
//     }
// }
// console.log(sum(2)(6)(1));
