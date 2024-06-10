// Promises in JS
// Synchronous vs Asynchronous Code

// Sync Code
// console.log('start');
// console.log('Learn JS');
// console.log('finish');
// As we see, the code executes line by line i.e. synchronously.
// o/p:
// start
// Learn JS
// finish

// Async Code
// console.log('start');

// setTimeout(() => {
//     console.log('Learn JS');
// }, 1000);

// console.log('finish');

// o/p :
// start
// finish
// Learn JS

// REMEMBER: JS executes sync code first and then async code.
// Hence, even if we use 0 as 2nd argument of setTimeout(), still, the finish 
// will get executed first and then the callback mentioned in the setTimeout().

// e.g. 2 of Async code:
// console.log('start');

// function importantAction(username) {
//     setTimeout(() => {
//         return `Subscribe to ${username}`
//     }, 1000);
// }

// const message = importantAction('Mohak Trivedi');

// console.log(message);

// console.log('stop');

// o/p:
// start
// undefined
// stop


// Question - Callbacks
// How can we modify the above code such that instead of undefined, we get 
// Subscribe to Mohak ?

// Answer: Use a callback:
// console.log('start');

// function importantAction(username, cb) {
//     setTimeout(() => {
//         cb(`Subscribe to ${username}`);
//     }, 1000);
// }

// const message = importantAction('Mohak Trivedi', function (message) {
//     console.log(message);
// });

// console.log('stop');


// Question - Given the below code, how can we execute the likeTheVideo() after
// the importantAction() is executed?
// console.log('start');

// function importantAction(username, cb) {
//     setTimeout(() => {
//         cb(`Subscribe to ${username}`);
//     }, 0);
// }

// function likeTheVideo(video) {
//     setTimeout(() => {
//         return `Like the ${video} video`;
//     }, 1000);
// }

// const message = importantAction('Mohak Trivedi', function (message) {
//     console.log(message);
// });

// console.log('stop');


// Answer:
// console.log('start');

// function importantAction(username, cb) {
//     setTimeout(() => {
//         cb(`Subscribe to ${username}`);
//     }, 0);
// }

// function likeTheVideo(video, cb) {
//     setTimeout(() => {
//         cb(`Like the ${video} video`);
//     }, 1000);
// }

// const message = importantAction('Mohak Trivedi', function (message) {
//     console.log(message);
//     likeTheVideo("JS interview questions", (action) => {
//         console.log(action);
//     });
// });

// console.log('stop');

// Why not like:
// const message = importantAction('Mohak Trivedi', function (message) {
//     console.log(message);
// });
// likeTheVideo("JS interview questions", (action) => {
//     console.log(action);
// });
// Because, we are not sure whether likeTheVideo() will always be executed after
// the importantAction() has been executed completely or not. In case, the 
// setTimeout time for importantAction() is > that of likeTheVideo(), then, 
// likeTheVideo() will get executed first even though it is invoked after it.
// Hence, call it explicitly after the last line of the callback of the importantAction().


// Question - How can we ensure the execution of shareTheVideo() takes place 
// after the execution of likeTheVideo() ?
// console.log('start');

// function importantAction(username, cb) {
//     setTimeout(() => {
//         cb(`Subscribe to ${username}`);
//     }, 0);
// }

// function likeTheVideo(video, cb) {
//     setTimeout(() => {
//         cb(`Like the ${video} video`);
//     }, 1000);
// }

// function shareTheVideo(video) {
//     setTimeout(() => {
//         return `Share the ${video} video.`;
//     }, 1000);
// }

// const message = importantAction('Mohak Trivedi', function (message) {
//     console.log(message);
//     likeTheVideo("JS interview questions", (action) => {
//         console.log(action);
//     });
// });

// console.log('stop');

// Answer:
// console.log('start');

// function importantAction(username, cb) {
//     setTimeout(() => {
//         cb(`Subscribe to ${username}`);
//     }, 0);
// }

// function likeTheVideo(video, cb) {
//     setTimeout(() => {
//         cb(`Like the ${video} video`);
//     }, 1000);
// }

// function shareTheVideo(video, cb) {
//     setTimeout(() => {
//         cb(`Share the ${video} video`);
//     }, 1000);
// }

// const message = importantAction('Mohak Trivedi', function (message) {
//     console.log(message);
//     likeTheVideo("JS interview questions", (action) => {
//         console.log(action);
//         shareTheVideo("JS interview questions", (action) => {
//             console.log(action);
//         });
//     });
// });

// console.log('stop');

// Again, notice how we have called shareTheVideo() after the last line of 
// callback of the likeTheVideo() and not just after the invocation of likeTheVideo().

// In an actual production-level code, there might be nesting of many more such 
// callbacks, something of the following structure:
// const message = importantAction('Mohak Trivedi', function (message) {
//     console.log(message);
//     likeTheVideo("JS interview questions", (action) => {
//         console.log(action);
//         shareTheVideo("JS interview questions", (action) => {
//             console.log(action);
//             shareTheVideo("JS interview questions", (action) => {
//                 console.log(action);
//                 shareTheVideo("JS interview questions", (action) => {
//                     console.log(action);
//                         shareTheVideo("JS interview questions", (action) => {
//                         console.log(action);
//                     });
//                     // And deeper!!!
//                 });
//             });
//         });
//     });
// });

// This is called as Callback Hell.
// This makes our code less readable and hard to maintain as well, and can
// cause difficulties while debugging as well.
// Hence, we have Promises!

