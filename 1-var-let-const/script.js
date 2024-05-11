// var vs let vs const
// Scope

// var has functional scope
// const and let have block scope

// {
// const a = 5;
// }
// console.log(a);

// Scope - Shadowing
// Variable Shadowing occurs when a variable in a lower scope is declared with 
// the same name as a variable in a higher scope.

// function test() {
//     let a = "hello";

//     if(true) {
//         let a = "hi"; // this 'a' is shadowing the above mentioned 'a'

//         console.log(a);
//     }
//     console.log(a);

// }
// test();

// function test() {
//     var a = "hello";
//     let b = "bye";

//     if(true) {
//         let a = "hi";
//         var b = "goodbye"; // illegal shadowing
//         console.log(a);
//         console.log(b);
//     }
// }

// test();

// Note: While shadowing a variable, it should not cross the boundary of scope.
// Thus, shadowing var variable with a let is fine, but, we cannot do the opposite 
// (called as illegal shadowing -> error: identifier has already been defined)

////////////////////////////////////////////////////

// Declaration

 // var - can redeclare, even in same scope
 // let - cannot redeclare in same scope, but can in different scope - shadowing
 // const - same as let, but cannot declare without initialisation - Syntax Error 


////////////////////////////////////////////////////

// Re-initialisation:

// var - can re-initialise
// let - can re-initialise
// const - cannot re-initialise

////////////////////////////////////////////////////

// Hoisting

// All 3 i.e. var, let and const variables are hoisted, but let and const
// are hoisted in TDZ.


// TDZ refers to the period b/w the start of the block scope and the actual 
// declaration of the variable.
// During the TDZ, accessing the variable will result in a ReferenceError. 
// In easy words, TDZ is the state where variables are in the scope but they 
// are not yet declared.
