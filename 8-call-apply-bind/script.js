// call, bind and apply in JS (explicit binding)

// What is call() ?
// Consider e.g.:
var obj = { name: "Mohak" };

function sayHello (age, profession) {
    return "Hello " + this.name + " age is " + age + " and is a " + profession;
}

console.log(sayHello(25, "Software Engineer")); // Hello  age is 25 and is a Software Engineer

// Unable to get name as Window.name as name is defined for obj, not Window.
// How can we bind this to the object we want i.e. to obj instead of Window?
console.log(sayHello.call(obj, 25, "Software Engineer")); // Hello Mohak age is 25 and is a Software Engineer
// The call() method is available to all the functions in JS
// It takes arguments: 
// — The object to be used as the current object. (in our case, obj)
// — A list of arguments to be passed to the method (in our case 25 to sayHello())


// What is apply() ?
// Same as call(), but takes in arguments in an array, rather than comma-separated
// list.
// console.log(sayHello.apply(obj, 25, "Software Engineer")); // TypeError: CreateListFromArrayLike called on non-object
// So, it basically takes in arguments in an array and converts it into a 
// comma-separated list of arguments.
console.log(sayHello.apply(obj, [25, "Software Engineer"])); // Hello Mohak age is 25 and is a Software Engineer


// What is bind() ?
// It provides us another function that we can execute later with the required 
// arguments. This function has its this bound the object that we have specified
// in the bind functions.
const bindFunc = sayHello.bind(obj);
console.log(bindFunc);
// o/p:
// ƒ sayHello (age, profession) {
//     return "Hello " + this.name + " age is " + age + " and is a " + profession;
// }
// The main benefit is that we do binding just once, and then we reuse this 
// bound function as many times as we want with different set of arguments. 
console.log(bindFunc(25, "Software Engineer")); // Hello Mohak age is 25 and is a Software Engineer
console.log(bindFunc(25, "YouTuber")); // Hello Mohak age is 25 and is a YouTuber