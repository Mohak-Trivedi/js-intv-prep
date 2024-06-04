// call, bind and apply in JS (explicit binding)

// What is call() ?
// Consider e.g.:
// var obj = { name: "Mohak" };

// function sayHello (age, profession) {
//     return "Hello " + this.name + " age is " + age + " and is a " + profession;
// }

// console.log(sayHello(25, "Software Engineer")); // Hello  age is 25 and is a Software Engineer

// // Unable to get name as it is defined for obj, not Window.
// // How can we bind this to the object we want i.e. to obj instead of Window?
// console.log(sayHello.call(obj, 25, "Software Engineer")); // Hello Mohak age is 25 and is a Software Engineer
// // The call() method is available to all the functions in JS
// // It takes arguments: 
// // — The object to be used as the current object. (in our case, obj)
// // — A list of arguments to be passed to the method (in our case 25 to sayHello())


// // What is apply() ?
// // Same as call(), but takes in arguments in an array, rather than comma-separated
// // list.
// // console.log(sayHello.apply(obj, 25, "Software Engineer")); // TypeError: CreateListFromArrayLike called on non-object
// // So, it basically takes in arguments in an array and converts it into a 
// // comma-separated list of arguments.
// console.log(sayHello.apply(obj, [25, "Software Engineer"])); // Hello Mohak age is 25 and is a Software Engineer


// // What is bind() ?
// // It provides us another function that we can execute later with the required 
// // arguments. This function has its this bound to the object that we have specified
// // in the bind functions.
// const bindFunc = sayHello.bind(obj);
// console.log(bindFunc);
// // o/p:
// // ƒ sayHello (age, profession) {
// //     return "Hello " + this.name + " age is " + age + " and is a " + profession;
// // }
// // The main benefit is that we do binding just once, and then we reuse this 
// // bound function as many times as we want with different set of arguments. 
// console.log(bindFunc(25, "Software Engineer")); // Hello Mohak age is 25 and is a Software Engineer
// console.log(bindFunc(25, "YouTuber")); // Hello Mohak age is 25 and is a YouTuber


// Question - Predict the output based JS question:
// const person = { name: "Mohak" };

// function sayHi(age) {
//     return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 25)); 
// console.log(sayHi.bind(person, 25));

// O/P:
// Mohak is 25
// ƒ sayHi(age) {
//     return `${this.name} is ${age}`;
// }


// Question - Predict the output:
// call() with function inside object
// const age = 10;

// var person = {
//     name: "Mohak",
//     age: 25,
//     getAge () {
//         return this.age;
//     },
// };

// var person2 = { age: 25 };
// console.log(person.getAge.call(person2));
// console.log(person.getAge.apply(person2));
// console.log(person.getAge.bind(person2)());

// o/p:
// 25
// 25
// 25

// Explanation:
// The 'this' in getAge() refers to person2 instead of person object due to call()
// apply() and bind() in the 1st 2nd and 3rd o/p respectively.


// Question - Predict the output:
// var status = "😎";

// setTimeout(() => {
//     const status = "😍";

//     const data = {
//         status: "🥑",
//         getStatus() {
//             return this.status;
//         },
//     };

//     console.log(data.getStatus()); 
//     console.log(data.getStatus.call(this));
// }, 0);

// o/p:
// 🥑
// 😎

// Explanation:
// In 1st call, this -> data object.
// In 2nd call, we are binding getStatus()'s this to Window object. In the Window
// object we have status defined as 😎


// Question - Call printAnimals() such that it prints all animals.
// const animals = [
//     { species: "Lion", name: "King" },
//     { species: "Whale", name: "Queen" },
// ];

// function printAnimals(i) {
//     this.print = function () {
//         console.log("#" + i + " " + this.species + ": " + this.name);
//     };
//     this.print();
// }

// // Answer:
// for(let i = 0;i < animals.length;i++) {
//     printAnimals.call(animals[i], i);
// }


// Question - Append an array to another array by modifying the actual array:
// const array = ["a", "b"];
// const elements = [0, 1, 2];
// Can't use append() as it returns a new array 

// Answer 1: Using a for-loop
// for(let ele of elements) {
//     array.push(ele);
// }

// Answer 2: Using apply()
// If we do array.push(elements) -> ['a', 'b', [0, 1, 2]], so use apply()
// array.push.apply(array, elements);
// console.log(array);
// Since, apply() has 2nd parameter as an array and it passes it as:
// array.push(0, 1, 2), we get the required o/p: ['a', 'b', 0, 1, 2]


// Question - Using apply() to enhance Built-in functions.
// Find min-max number in an array:
// const numbers = [5, 6, 2, 3, 7];
// console.log(Math.max(3, 5, 2, 1)); // 5 i.e. the max value among arguments
// console.log(Math.max(numbers)); // NaN, bcz max() doesn't work on arrays

// Answer 1: Using a loop:
// max = -Infinity, min = +Infinity;

// for (num of numbers) {
//     if(num > max) {
//         max = num;
//     }

//     if(num < min) {
//         min = num;
//     }
// }
// console.log(max);
// console.log(min);

// Answer 2: Using apply():
// console.log(Math.max.apply(null, numbers));
// console.log(Math.min.apply(null, numbers));
// Here, we aren't using apply to bind the this within max() and min() instead
// for passing numbers array's elements as unpacked elements instead of passing
// the array.


// Question - Bound function - Predict the output:
function f() {
    console.log(this);
}

let user = {
    g: f.bind(null),
};

user.g();   

// o/p: Window

// Explanation:
// In non-strict mode, if a function is bound to null i.e. the this within it is
// made to refer to null, then the this within it is actually made to refer to 
// the Window object.