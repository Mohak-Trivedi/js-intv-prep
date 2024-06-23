// Question - Compose:
// Given the below code:
const addFive = (num) => {
    return num + 5;
};

const subtractTwo = (num) => {
    return num - 2;
};

const multiplyFour = (num) => {
    return num * 4;
};

const evaluate = compose(addFive, subtractTwo, multiplyFour);
console.log(evaluate(5));
// Implement compose such that we get 23 logged on the console.
// i.e. the argument passed to evaluate must get passed to the rightmost function
// passed as argument to compose, then the value returned by it must be passed to
// the adjacent left function passed as argument to compose, and the value returned
// by it must then be passed to the adjacent left function passed as argument to 
// compose, and so on until the leftmost function passed as argument to compose
// is executed and the value.
// In our case:
// mulitplyFour(5)
// subtractTwo(20)
// addFive(18)
// must get executed in the above sequence and finally we get 23. 

// Answer:
// Requirements:
// - compose is a function
// - It takes in any number of functions as arguments.
// - It returns a function that takes in a single value and returns the value 
// returned by the leftmost function.
// - The argument passed to this returned function must be passed to the function
// passed as rightmost argument to compose.
// - All the functions passed as arguments to compose from rightmost to leftmost are
// executed such that the value returned by one is passed as argument to its left
// adjacent one.

function compose (...funcs) {
    return function (init) {
        let result = init;
        for (let i = funcs.length - 1; i >= 0 ;i--) {
            result = funcs[i](result);
        }
        return result;
    }
}
