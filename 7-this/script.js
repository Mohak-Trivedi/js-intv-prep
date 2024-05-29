//  'this' keyword in JS (implicit binding)
// Question - Explain 'this' keyword

// In English language, we use 'this' as a pronoun to refer to something.
// E.g. Fruits are kept in this basket.
// It references to the particular basket in which the fruits are stored.
// Similarly, in JS, the 'this' keyword is used to reference something like an 
// object.

// What 'this' refers to depends upon the context we are in.
// e.g. now we are in the global context so 'this' will refer to the global 
// object (the window object).
// this.a = 5; // will create a property 'a' with value 5 in the window object
// console.log(this); // check the properties and notice 'a' being added to window object
// And if we are in a function, then this refers to the object in which the function is defined.
// If not defined in an object, then function is defined in global i.e. window object
// this.a = 5;
// function getParam () {
//     console.log(this.a);
// }
// getParam(); // 5
// And in case, of window object, even arrow function works the same.
// this.a = 5;
// const getParam = () => {
//     console.log(this.a); // 5
// }
// getParam();
// However, when the object is not window, the behaviour is different:
// Non window object and normal function:
// let user = {
//     name: "Mohak",
//     age: 25,
//     getDetails() {
//         console.log(this.name);
//     },
// };

// user.getDetails(); // Mohak

// Nested object and normal function:
// let user = {
//     name: "Mohak",
//     age: 25,
//     childObj: {
//         newName: "Roadside Coder",
//         getDetails() {
//             console.log(this.newName, " and ", this.name);
//         },
//     },
// };

// user.childObj.getDetails(); // Roadside Coder and undefined
// So, this refers to the immediate object in which the method (function) is defined. 

// Non window object and arrow function:
// let user = {
//     name: "Mohak",
//     age: 25,
//     getDetails: () => {
//         console.log(this.name);
//     },
// };
// user.getDetails(); // [BLANK OUTPUT]
// This means this is not referring to the immediate object in which the method
// is defined, rather it refers to the outermost i.e. the Window object, you may 
// verify the same by doing console.log(this) in getDetails().

// Why does this acts differently for normal and arrow functions?
// Basically, the this keyword takes the reference from its parent function which 
// in turn takes the value from the object in which it is defined.
// So, in the 'Non window object and normal function' e.g., this refers from getDetails
// function which in turn takes the reference from the object in which it is defined
// i.e. user object. Hence, this refers to the user object.
// But, in the 'Non window object and arrow function' e.g., there's no normal
// function as parent of this, and hence, it refers to the Window object directly.
// So, if the arrow function would've had a normal function as parent, then the
// this present inside that arrow function would've referred to the object in which
// that normal function was defined. E.g.:
// let user = {
//     name: "Mohak",
//     age: 25,
//     getDetails() {
//         const nestedArrow = () => console.log(this.name);
//         nestedArrow();
//     },
// };
// user.getDetails(); // Mohak

// How will this behave in a class or a constructor?
// class user {
//     constructor (n) {
//         this.name = n;
//     }

//     getName() {
//         console.log(this.name);
//     }
// }

// const User = new user("Mohak");
// User.getName(); // Mohak
// So, in a class, the this keyword refers to the object of the class.


// Question - Predict the output:
// const user = {
//     firstName: "Mohak!",
//     getName() {
//         const firstName = "Mohak Trivedi!";
//         return this.firstName;
//     }
// };
// console.log(user.getName()); 

// o/p: Mohak!

// Explanation:
// this refers to the user object.


// Question - What is the result of accessing its ref and why?
// function makeUser() {
//     return {
//         name: "John",
//         ref: this,
//     };
// }

// let user = makeUser();

// console.log(user.ref.name);

// O/p: [BLANK O/P]

// Explanation:
// user -> the object returned by makeUser()
// user.ref -> this -> Window object (because the normal function in which this 
// is mentioned is a method of Window)
// Since, Window doesn't have 'name' property defined, we get blank o/p


// Question - How can you fix the above code such that we get "John"?
// Since we want this to refer to the object being returned instead of referring
// to the Window object, we must ensure that it must be present in a normal function 
// that is a method of that object. So, make ref a normal function that returns 
// this.
// Now, user.ref() -> this -> the object returned by makeUser()
// So, user.ref().name -> John
// function makeUser() {
//     return {
//         name: "John",
//         ref() {
//             return this;
//         },
//     };
// }

// let user = makeUser();

// console.log(user.ref().name);