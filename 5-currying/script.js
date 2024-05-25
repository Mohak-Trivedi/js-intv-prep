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


// Question - 
/* 
evaluate("sum")(4)(2) -> 6
evaluate("multiply")(4)(2) -> 8
evaluate("divide")(4)(2) -> 2
evaluate("subtract")(4)(2) -> 2
 */

// function evaluate (oper) {
//     return function (num1) {
//         return function (num2) {
//             switch (oper) {
//                 case 'sum':
//                     return num1 + num2;
//                 case 'multiply':
//                     return num1 * num2;
//                 case 'divide':
//                     return num1 / num2;
//                 case 'subtract':
//                     return num1 - num2;
//             }
//         }
//     }
// }
// console.log(evaluate("sum")(4)(2));
// console.log(evaluate("multiply")(4)(2));
// console.log(evaluate("divide")(4)(2));
// console.log(evaluate("subtract")(4)(2));


// Question - Infinite Currying -> sum(1)(2)(3)...(n)
// sum(1)(2)(); -> 3
// sum(1)(2)(4)(5)(); -> 12

// function sum (a) {
//     return function (b) {
//         if (b) return sum (a + b);
//         return a;
//     }
// }
// console.log(sum(5)(2)(4)(8)()); // 19


// Question - Currying v/s Partial Application

// For sum of 3 numbers: 
// Currying: sum(a)(b)(c)
// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }
// console.log(sum(2)(4)(7)); // 13

// Partial Application: sum(a)(b, c)
// function sum (a) {
//     return function(b, c) {
//         return a + b + c;
//     }
// }
// console.log(sum(2)(4, 7)); // 13