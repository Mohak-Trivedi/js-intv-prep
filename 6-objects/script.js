// Objects in JS

// const user = {
//     name: "Mohak Trivedi",
//     age: 25,
// };

// console.log(user.name); // accessing a property

// user.name = "Mohak A Trivedi"; // updating a property

// delete user.age; // deleting a property

// console.log(user);


// Question - Predict the output:
// const func = (function (a) {
//     delete a;
//     return a;
// })(5); 
// console.log(func);

// o/p: 5

// Explanation:
// a is a local variable
// delete is used to delete a property of an object, whereas a isn't a property of an object
// so delete won't have any effect on a
// hence, 5 will be returned and logged to the console.


// Question - How to add a property whose name has space(s) in between?
// Add a property - like this video - to the object, with value as true:
// const user = {
//     name: "Mohak Trivedi",
//     age: 25,
// };
// and how do you access that property?

// Define it as a string:
// const user = {
//     name: "Mohak Trivedi",
//     age: 25,
//     "like this video": true,
// }
// // if we use it directly w/o a string, we get
// // SyntaxError: Unexpected identifier 'video'

// // To access such properties, we must use [] instead of the .(dot) operator
// console.log(user["like this video"]);

// // delete also happens in similar way:
// delete user["like this video"];
// console.log(user);


// Question - How to add property-value pairs dynamically to an object?
// const property = "firstName";
// const name = "Mohak";
// // Add property-name as property-value pair in an object user

// // const user = {
// //     property: name,
// // };
// // console.log(user); // { property: "Mohak" }
// // It creates a property named property, instead of taking the value of the variable property.
// // Hence, use:
// const user = {
//     [property]: name,
// };
// console.log(user); // { firstName: "Mohak" }
