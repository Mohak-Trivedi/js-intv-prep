// map, filter and reduce

// What is map()?
// map() method is used to create a new array from an existing one by applying a
// function to each one of the elements of the first array.

// const nums = [1, 2, 3, 4];

// const multiplyThree = nums.map((num, idx, arr) => {
//     return num * 3 + idx;
// });

// console.log(multiplyThree);


/////////////////////////////////////////////////////


// What is filter()?
// filter() method takes each element in an array and applies a conditional statement
// against it. If the conditional returns true the element gets pushed into the 
// new array, else the element is ignored.
// In short filter() returns an array containing only those elements that satisfy the
// mentioned condition.

// const nums = [1, 2, 3, 4];

// const moreThanTwo = nums.filter((num, idx, arr) => {
//     return num > 2;
// });

// console.log(moreThanTwo);


/////////////////////////////////////////////////////


// What is reduce()?
// reduce() method reduces an array of values down to a single value. Just like
// map() and filter(), it applies the callback function to each element of the 
// array.

// It takes in 2 parameters:
// - a callback function
// - an initial value (= 0th element of the array if not specified)

// The callback function, apart from taking in:
// current value, index, array
// also takes in an accumulator i.e. single value accumulated until now 

// const nums = [1, 2, 3, 4];

// const sum = nums.reduce((acc, num, idx, arr) => {
//     return acc + num;
// }, 0);

// console.log(sum);


/////////////////////////////////////////////////////


// Polyfill of map()

// map syntax for reference: 
// Array.map((curr, idx, arr) => {});

// Define Polyfill
// Array.prototype.myMap = function (cb) {
//     let temp = [];

//     // nums.myMap -> nums = this
//     for(let i = 0;i < this.length;i++) {
//         temp.push(cb(this[i], i, this));
//     }

//     return temp;
// };

// Test polyfill:
// const nums = [1, 2, 3, 4];

// const multiplyThree = nums.myMap((num, idx, arr) => {
//     return num * 3 + idx;
// });

// console.log(multiplyThree);


/////////////////////////////////////////////////////


// Polyfill of filter()

// filter syntax for reference:
// Array.filter((curr, idx, arr) => {});

// Define Polyfill
// Array.prototype.myFilter = function (cb) {
//     let temp = [];

//     for(let i = 0;i < this.length;i++) {
//         if(cb(this[i], i, this)) {
//             temp.push(this[i]);
//         }
//     }

//     return temp;
// }

// Test polyfill:
// const nums = [1, 2, 3, 4];

// const moreThanTwo = nums.myFilter((num, idx, arr) => {
//     return num > 2;
// });

// console.log(moreThanTwo);


/////////////////////////////////////////////////////


// Polyfill of reduce()

// reduce syntax for reference:
// Array.reduce((acc, curr, idx, arr) => {}, initialValue);

// Define Polyfill
// Array.prototype.myReduce = function (cb, initialValue) {
//     var accumulator = initialValue;

//     for(let i = 0;i < this.length;i++) {
//         accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
//     }

//     return accumulator;
// };

// Test polyfill:
// const nums = [1, 2, 3, 4];

// const sum = nums.myReduce((acc, num, idx, arr) => {
//     return acc + num;
// }, 0);

// console.log(sum);