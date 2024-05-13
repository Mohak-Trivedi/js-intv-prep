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


