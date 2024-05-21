// Closures in JS


// Lexical Scope
// e.g. 1:
// var username = "Mohak Trivedi";
// global scope
// function local() {
//     // local scope
//     console.log(username); // In local scope able to access variable of global scope
//     // this is called as lexical scope.
// }
// local();

// e.g. 2
// global scope
// function local() {
//     // local scope
//     var username = "Mohak Trivedi";
// }
// console.log(username); // ReferenceError when trying to access variable of local scope
// // in global scope. 
// local();


// What is a Closure?
// - A closure is the combination of a function bundled together (enclosed) with references 
// to its surrounding state (the lexical environment). In other words, a closure gives 
// you access to an outer function's scope from an inner function. 
// - In JavaScript, closures are created every time a function is created, at 
// function creation time.
// - Use: 
// -- To enable creating private variables for functions. 
// -- To control what is and what isn't in the scope of a function along with 
// which variables are shared between sibling functions in the same containing scope.
// -- To keep a value passed to a function even after the inner function is returned. 
// - e.g. 1: Here displayName() is a closure
// global scope
// function subscribe() {
//     var name = "Mohak Trivedi";
//     // inner scope 2
//     function displayName() {
//         // inner scope
//         alert(name); // from inner scope able to access name defined in inner scope 2
//     }
//     displayName();
// }
// subscribe();

// - e.g. 2: 
// function makeFunc() {
//     var name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }
// var myFunc = makeFunc();
// myFunc();


// Closure Scope Chain
// - Every closure has three scopes:
// -- Local scope (Own scope)
// -- Enclosing scope (can be block, function, or module scope)
// -- Global scope
// - A common mistake is not realizing that in the case where the outer function is 
// itself a nested function, access to the outer function's scope includes the 
// enclosing scope of the outer function—effectively creating a chain of function 
// scopes. To demonstrate, consider the following example code.
// - e.g.:
// global scope
// const e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       // outer functions scope
//       return function (d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4)); // 20


// Predict the output:
// let count = 0;
// (function printCount() {
//     if(count === 0) {
//         let count = 1;
//         console.log(count);
//     }
//     console.log(count);
// })();

// o/p:
// 1 (let count=1 shadows let count=0)
// 0 (won't get count=1 because it has block scope, so we get count=0 from lexical scope)


// Write a function that would allow you to do this:

// Answer:
// function createBase(num) {
//     return function (innerNum) {
//         console.log(num + innerNum); // num accessible due to closure as it falls in lexical scope
//     }
// }

// Below code given in question:
// var addSix = createBase(6);
// addSix(10); // must log 16
// addSix(21); // must log 27 


// Time Optimization: How can we use closures to optimize the time of our code?
// function find(index) {
//     let a = [];
//     for (let i = 0; i < 1000000; i++) {
//         a[i] = i * i;
//     }

//     console.log(a[index]);
// }

// console.time("6");
// find(6); // 36
// console.timeEnd("6");  // 57ms (changes each time we run, but, is a high number)
// console.time("12");
// find(12); // 144
// console.timeEnd("12"); // 58ms (changes each time we run, but, is a high number)

// answer:
// No matter what index argument we pass, the following lines of code will give 
// the same o/p:
// let a = [];
// for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
// }
// So, return a function from find(). This function will accept the index and 
// console log the pre-calculated square. So, find() will be called only once i.e.
// to return the closure (inner function that has the access to a[] as well) 
// and then invoke this closure with required index multiple times. 

// function find() {
//     let a = [];
//     for (let i = 0; i < 1000000; i++) {
//         a[i] = i * i;
//     }

//     return function (index) {
//         console.log(a[index]);
//     }
// }

// const closure = find();
// console.time("6");
// closure(6); // 36
// console.timeEnd("6");  // 0.4ms (changes each time we run, but, is a lower number)
// console.time("12");
// closure(12); // 144
// console.timeEnd("12"); // 0.24ms (changes each time we run, but, is a lower number)


// Block scope and setTimeout, with closures (very frequently asked):
// Predict the output:
// function a() {
//     for(var i = 0;i < 3;i++) {
//         setTimeout(function log() {
//             console.log(i);
//         }, i * 1000)
//     }
// }
// a();

// o/p:
// 3
// 3
// 3
// each prints after a gap of 1 second.

// Explanation:
// Because of the asynchronous nature of setTimeout, the loop will finish 
// executing before any of the setTimeout callbacks are invoked. So, by the time 
// each callback runs, the value of i will be equal to the final value of i after 
// the loop has finished, which is 5. Each iteration will refer to the same
// i and won't have their own block's i, because i is a var variable and hence has
// function scope, not block scope.


// How can we get 0 1 2 as o/p instead of 3 3 3 ?
// Answer:
// Use let instead of var:
// Predict the output:
// function a() {
//     for(let i = 0;i < 3;i++) {
//         setTimeout(function log() {
//             console.log(i);
//         }, i * 1000)
//     }
// }
// a();

// o/p:
// 0
// 1
// 2
// each prints after a gap of 1 second.

// Explanation:
// In this modified code, let is used instead of var to declare the variable i. 
// Unlike var, let has block scope, which means it creates a new binding of i 
// for each iteration of the loop. Consequently, each iteration of the loop 
// will have its own scoped i variable.Therefore, when the setTimeout function 
// inside the loop runs, it captures the value of i at the time it was declared 
// in each iteration, resulting in the above output.


// How can you do it without using let?
// Answer:
// Use closure:
// function a() {
//     for(let i = 0;i < 3;i++) {
//         function inner(i) {
//             setTimeout(function log() {
//                 console.log(i);
//             }, i * 1000);
//         }
        
//         inner(i);
//     }
// }
// a();

// o/p:
// 0
// 1
// 2
// each prints after a gap of 1 second.

// Explanation:
// Because of the asynchronous nature of setTimeout, the loop will finish 
// executing before any of the setTimeout callbacks are invoked.
// After the for loop completes:
// The console immediately logs 0.
// After 1 second, the console logs 1.
// After 2 seconds, the console logs 2.
// This demonstrates how closures work in JavaScript: the function inner creates a 
// closure for each setTimeout call, capturing and preserving the current value of 
// i for each timeout callback. This is why even though the for loop completes 
// almost instantly, the setTimeout functions are able to access the correct value 
// of i at the time they were created.


// How would you use a Closure to create a private counter?
// Private counter means we must not directly manipulate the value of counter
// we must do it via functions.
function counter () {
    var _counter = 0; // _variableName is naming convention for private variables

    function add(increment) {
        _counter += increment;
    }

    function retrieve() {
        return "Counter = " + _counter;
    }

    return {
        add,
        retrieve
    };
}

const c = counter();
c.add(5);
c.add(10);
console.log(c.retrieve());