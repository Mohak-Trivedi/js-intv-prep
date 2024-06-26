// What is Prototype in JS?
// Object
// let obj = {
//     name: "Mohak Trivedi",
//     age: 25,
// };
// In console, type out - obj
// Apart from name and age, you'll notice: [[Prototype]]: Object
// You'll also notice the same when you type - Object.prototype
// You'll also notice the same when you type - obj.__proto__
// This means, each object that we create in JS, gets __proto__ property which
// is provided by the Object in JS.
// This [[Prototype]]: Object, added as additional property in each object we define 
// is called as prototype.
// It provides many methods and properties that enable us to deal with objects
// conveniently.

// Number
// let num = 10;
// In console, type out - num, you'll get just 10.
// But next, type out - num.__proto__, you'll notice a Number object which contains
// some predefined methods to be used for manipulating numbers.
// But, in it, you'll also notice: [[Prototype]]: Object
// which is exactly the same thing that you saw for the object that we defined.

// String
// let name = "RoadsideCoder";
// Similarly, for string you'll get notice [[Prototype]]: Object in String object
// if you type name.__proto__

// Boolean
// let bool = true;
// Similarly, for string you'll get notice [[Prototype]]: Object in Boolean object
// if you type bool.__proto__

// Hence proved, even a number, string and boolean is an object in JS.

// Function
// function add(a, b) {
//     return a + b;
// }
// console.log(add(1, 2));
// In console, type out add.__proto__.__proto__
// we get the same prototype object.
// Hence, even a function is an object in JS.
// We can even add a property to it.
// Try, add.name = "Mohak";
// And then, check add, you'll notice the property name being added with the value 
// as "Mohak".


// Prototype Chaining
let person = {
    name: "Mohak Trivedi",
    age: 25,
};

// console.log(person.alias()); // TypeError: person.alias is not a function
// console.log(person.toString()); // [object Object]
// toString() is not defined in person, but still we get o/p for it, because JS
// further looks for toString() in the [[Prototype]]: Object of person. If we 
// would've defined toString() in person, then that would've got executed instead.

// We get an error for alias() because it is neither defined in the person object
// nor in the [[Prototype]]: Object of the person.

let additional = {
    name: "Mohak",
    username: "Mohkya",
    alias: function() {
        console.log(`${this.name} is also known as ${this.username}`); 
    }
};

person.__proto__ = additional; // replacing the prototype of person with our 
// own defined object additional. NOT RECOMMENDED IN REAL WQRLD, JUST A DEMO.
// So, the this in additional will refer to person, not additional.

console.log(person.alias()); // Mohak Trivedi is also known as Mohkya
// JS looks for alias() in person, but didn't find it so searched in its prototype,
// i.e. additional. Found it in additional and executed it.
// In alias(), for this.name, looked for name in person and found it as "Mohak Trivedi"
// and for this.username, couldn't find in person, so looked in prototype i.e. 
// additional and found it as "Mohkya", so used these values in the console log.
// This is called as Prototype Chaining.