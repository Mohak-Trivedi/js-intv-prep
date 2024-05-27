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

// // To access such properties, we must use [] instead of the .(dot) operator.
// This operator can be used even if the property is not a string.
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


// Question - How to iterate over an object?
// const user = {
//     name: "Mohak Trivedi",
//     age: 25,
//     isTotallyAwesome: true,
// };

// // By using the "in" keyword
// for(key in user) {
//     console.log(user[hey]);
// }


// Question - Predict the output:
// const obj = {
//     a: "one",
//     b: "two",
//     a: "three",
// };

// console.log(obj);

// o/p: {a: 'three', b: 'two'}

// Explanation:
// When two or more properties having the same name are present in a single 
// object, then the one latest defined is considered, and it will take the position
// of the first such property.


// Question - Create a function multiplyByTwo(obj) that multiplies all numeric 
// property values of nums by 2.
// let nums = {
//     a: 100,
//     b: 200,
//     title: "My nums",
// };

// multiplyByTwo(nums);

// function multiplyByTwo (obj) {
//     for(let key in obj) {
//         if(typeof obj[key] === "number") {
//             obj[key] *= 2;
//         }
//     }
// }
// console.log(nums);


// Question (VERY IMPORTANT) - Predict the output:
// const a = {};
// const b = { key: "b" };
// const c = { key: "c"};

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

// o/p: 456
// But why not 123?
// When we execute a[b] = 123;, since the object b cannot be converted to a string
// directly to be used a property name in a, like:
// a["b"] = 123;
// it is instead converted as follows:
// a["[object Object]"] = 123;
// Similarly, a[c] = 456; gets converted as follows:
// a["[object Object]"] = 456;
// Hence, by the time we reach the console log statement, we have a as follows:
// a = { "[object Object]": 456, }
// Hence, console.log(a[b]) -> console.log(a["object Object"]) -> 456


// Question: What is JSON.stringify() and JSON.parse()?
// const user = {
//     name: "Mohak",
//     age: 25,
// };

// const userStr = JSON.stringify(user); // converts user object into a string
// console.log(userStr);
// console.log(userStr.name) // undefined, because it is a string, not an object

// const userObj = JSON.parse(userStr); // converts string object into an object
// console.log(userObj);
// console.log(userObj.name); // Mohak

// // The most common use-case is while storing on localStorage, we use JSON.stringify()
// // as it can't store objects. And, while retrieving data from the localStorage, we use
// // JSON.parse() as in our program we need to access the object, not the string.
// localStorage.setItem("test", userStr);
// // localStorage.setItem("test", user); // using object instead, will store 
// // "[object Object]" instead of the actual object in the string form.
// console.log(localStorage.getItem("test")); // string format
// console.log(JSON.parse(localStorage.getItem("test"))); // object


// Question - Predict the output:
// console.log([ ..."Lydia" ]);

// o/p: ['L', 'y', 'd', 'i', 'a']


// Question - Predict the output:
// const user = { name: "Lydia", age: 21 };
// const admin = { admin: true, ...user };
// console.log(admin);

// o/p: {admin: true, name: 'Lydia', age: 21}


// Question - Predict the output:

// const settings = {
//     username: "Mohak",
//     level: 19,
//     health: 90,
// };

// const data = JSON.stringify(settings, ["level", "health"]);
// console.log(data);

// O/p: {"level":19,"health":90}

// Explanation:
// It stringifies only the "level" and "health" properties as mentioned


// Question: Predict the output:
// const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius  * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());

// o/p:
// 20
// NaN

// Explanation:
// We get 20 for shape.diameter() as this.radius -> radius of shape object, 
// because diameter() is a normal function.
// We get NaN for shape.perimeter() as this.radius -> undefined, because perimeter()
// is an arrow function defined in an object so in it, this -> window object
// instead of the shape object. So, 2 * Math.PI * undefined evaluates to NaN.


// Question: What is destructuring in objects?
// let user = {
//     name: "Mohak",
//     age: 25,
// };

// // Object Destructuring : Extracting specific property(ies) of an object.
// const { name } = user;
// console.log(name); // Mohak


// Question - How to rename the property name in the extracted version 
// while object destructuring, as the below code gives an error?
// let user = {
//     name: "Mohak",
//     age: 25,
// };

// const name = "Mohak Trivedi";

// const { name } = user; // Uncaught SyntaxError: Identifier 'name' has already been declared
// console.log(name); 

// Answer:
// let user = {
//     name: "Mohak",
//     age: 25,
// };

// const name = "Mohak Trivedi";

// const { name: myName } = user;
// console.log(myName); // Mohak


// Question - What is nested destructuring?
// Suppose we have the following object:
// let user = {
//     name: "Mohak",
//     age: 25,
//     fullName: {
//         first: "Mohak",
//         last: "Trivedi",
//     }
// };
// // To extract the non-nested value fullName:
// const { fullName } = user;
// console.log(fullName); // {first: 'Mohak', last: 'Trivedi'}
// // How can you extract the nested value i.e. first name?
// const { fullName:{first} } = user; // Nested Destructuring
// console.log(first); // Mohak


// Question - Predict the output:
// function getItems(fruitList, ...args, favoriteFruit) {
//     return [...fruitList, ...args, favoriteFruit];
// }

// console.log(getItems(["banana", "apple"], "pear", "orange"));

// o/p: Uncaught SyntaxError: Rest parameter must be last formal parameter


// Question - Predict the output:
// function getItems(fruitList, favoriteFruit, ...args) {
//     return [...fruitList, ...args, favoriteFruit];
// }

// console.log(getItems(["banana", "apple"], "pear", "orange"));

// o/p: ['banana', 'apple', 'orange', 'pear']

// Explanation:
// Spread parameter is allowed to be non-last, no errors in return line.
// Function has:-
// fruitList=["banana", "apple"], favoriteFruit="pear", args=["orange"]
// Hence, return: ['banana', 'apple', 'orange', 'pear']


// Question - Predict the output:
// let c = { greeting: "Hey!" };
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);

// o/p: Hello

// Explanation:
// At d = c, we don't provide a copy but a reference to the object.
// Hence, any change made to the object will be reflected at all variables storing
// the reference.


// Question - Predict the output:
// console.log({ a: 1 } == { a: 1});
// console.log({ a: 1 } === { a: 1});

// o/p:
// false
// false

// Explanation:
// In JS, objects are equal only when they have the same reference.
// In both of the cases mentioned in the above question, we see that 
// the objects being compared are different objects even though their property 
// and value are the same.