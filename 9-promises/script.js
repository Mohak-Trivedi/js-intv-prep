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

// This is called as Callback Hell/Pyramid of Doom.
// This makes our code less readable and hard to maintain as well, and can
// cause difficulties while debugging as well.
// Hence, we have Promises!


// Promises:
// A Promise in JS represents the upcoming completion or failure of an asynchronous
// event, and its resulting value.
// e.g. A child promises his mother to complete his HW. If he fulfils his promise
// he will get to play, if he rejects his promise then he won't get to play.
// e.g.:
// console.log('start');

// const sub = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const result = true; // toggle to false and check o/p again
//         if(result) {
//             resolve("Subscribe to Mohak Trivedi");
//         } else {
//             reject(new Error("Why haven't you subscribed to Mohak Trivedi?"));
//         }
//     }, 2000);
// });

// console.log(sub); 
// Notice how PromiseState changes from "pending" to "fulfilled" in console 
// after 2 secs when the result is true, and "rejected" when result is false

// sub.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// console.log('stop');

// o/p:
// start
// Promise {<pending>} (PromiseState becomes "fulfilled" after 2s, is "pending" before)
// stop
// Subscribe to Mohak Trivedi (this comes after 2s)


// We can even resolve a Promise directly.
// console.log('Start');

// const sub = Promise.resolve("Subscribed to Mohak Trivedi");
// console.log(sub);
// sub.then((res) => console.log(res)).catch((err) => console.log(err));

// console.log('End');

// o/p:
// Start
// Promise {<fulfilled>: 'Subscribed to Mohak Trivedi'}
// End
// Subscribed to Mohak Trivedi

// Notice we got fulfilled directly instead of Pending first and then fulfilled

// Similarly, we can reject a Promise directly.
// console.log('Start');

// const sub = Promise.reject("Why haven't you subscribed to Mohak Trivedi");
// console.log(sub);
// sub.then((res) => console.log(res)).catch((err) => console.log(err));

// console.log('End');

// o/p:
// Start
// Promise {<rejected>: "Why haven't you subscribed to Mohak Trivedi"}
// End
// Why haven't you subscribed to Mohak Trivedi

// Notice we got rejected directly instead of Pending first and then rejected


// Question - How can Promise be used to make our previous code more readable?
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

// Answer:
console.log('start');

function importantAction(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Subscribe to ${username}`);
        }, 1000);
    });
}

function likeTheVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Like the ${video} video`);
        }, 1000);
    });
}

function shareTheVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Share the ${video} video`);
        }, 1000);
    });
}

// importantAction('Mohak Trivedi').then((res) => {
//     console.log(res);
//     likeTheVideo("JS interview questions").then((res) => {
//         console.log(res);
//         shareTheVideo("JS interview questions").then((res) => {
//             console.log(res);
//         });
//     });
// }).catch((err) => {
//     console.error(err);
// });

// console.log('stop');


// Question - Promise Chaining:
// But, even with Promises in the above e.g. 
// we're getting a structure similar to callback hell, just that
// instead of the callbacks we now have Promises i.e. instead of callback inside
// callback, we are now using .then() inside .then()
// To solve this issue, we will use Promise chaining.
// importantAction('Mohak Trivedi').then((res) => {
//     console.log(res);
//     return likeTheVideo("JS interview questions");
// }).then((res) => {
//     console.log(res);
//     return shareTheVideo("JS interview questions");
// }).then((res) => {
//     console.log(res);
// }
// ).catch((err) => {
//     console.error(err);
// });

// console.log('stop');
// As we see, now even though we use all the 3 promises, we are still not needing
// to nest one .then() inside another because we are using Promise Chaining now.


// Question - Promise Combinator
// But, even in the above code, we see that even though it is not having a 
// callback hell like structure, it is still very lengthy.

// Promise Combinators help us to execute more than one Promise at a time.
// There are mainly 4 types of Promise Combinators

// 1. Promise.all():
// Runs all the Promises provided to it parallely and returns an array of all the
// fulfilled Promises, but it fails (runs the catch() code) even if a single Promise gets failed.
// Run once by replacing 'resolve' in likeTheVideos() with 'reject'

// Promise.all([
//     importantAction('Mohak Trivedi'),
//     likeTheVideo("JS interview questions"),
//     shareTheVideo("JS interview questions")
// ]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.error("Error: Promises Failed.", err);
// });

// console.log('stop');

// 2. Promise.race():
// Similar to Promise.all() but it returns the first Promise resolved or rejected.
// Set the timeout for shareTheVideos() to 500 i.e. lowest among the three, and
// you'll notice that the value resolved by that Promise gets logged even though
// it is the last mentioned Promise.
// Also, next set the timeout for likeTheVideos() to 100 and replace its 
// 'resolve' with 'reject', you'll now see its error message as race() returns
// the first Promise resolved or rejected.

// Promise.race([
//     importantAction('Mohak Trivedi'),
//     likeTheVideo("JS interview questions"),
//     shareTheVideo("JS interview questions")
// ]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.error("Error: Promises Failed.", err);
// });

// console.log('stop');

// 3. Promise.allSettled()
// Same as Promise.all() but Promise rejection doesn't cause any failure here, it
// returns all promises regardless of their results.
// Promise.allSettled([
//     importantAction('Mohak Trivedi'),
//     likeTheVideo("JS interview questions"),
//     shareTheVideo("JS interview questions")
// ]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.error("Error: Promises Failed.", err);
// });

// console.log('stop');

// 4. Promise.any()
// Same as Promise.race() but returns only the first resolved Promise result, and
// ignores the rejected ones even if it is the first completed one.
// In case, none of the Promises are resolved, it gives an error:
// AggregateError: All promises were rejected
// Promise.any([
//     importantAction("Mohak Trivedi"),
//     likeTheVideo("JS interview questions"),
//     shareTheVideo("JS interview questions")
// ]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.error("Error: Promises Failed", err);
// });

// console.log('stop');


// async await
// Modern and more compact approach to execute asynchronous code.
// Write the below code with async await:
// importantAction('Mohak Trivedi').then((res) => {
//     console.log(res);
//     return likeTheVideo("JS interview questions");
// }).then((res) => {
//     console.log(res);
//     return shareTheVideo("JS interview questions");
// }).then((res) => {
//     console.log(res);
// }
// ).catch((err) => {
//     console.error("Error: Promises Failed", err);
// });

// Answer:
// const message1 = importantAction("Roadside Coder");
// The above line will store the promise object in message1, but we want the
// fulfilled value sent by the promise to be stored in message1, so we use:
// const message1 = await importantAction("Roadside Coder");
// i.e. we include the 'await' keyword. This will execute the Promise and WAIT
// while it is executing instead of proceeding with the next lines of code.
// Only once the promise is fulfilled and its value is stored in message1, then
// it will execute the next line of code. 
// You can't use the await keyword directly, you need to have an 'async' function
// for it.
// Since, we are not using then() and catch(), so, to handle errors, we must use
// try-catch blocks. If any promise is rejected we move to the catch block and hence
// the remaining portion of the try block remains unexecuted.
const result = async () => {
    try {
        const message1 = await importantAction("Roadside Coder");
        console.log(message1);
        const message2 = await likeTheVideo("JS interview questions");
        console.log(message2);
        const message3 = await shareTheVideo("JS interview questions");
        console.log(message3);
    } catch(err) {
        console.error("Error: Promises Failed", err);
    }
};
result();

console.log('stop');