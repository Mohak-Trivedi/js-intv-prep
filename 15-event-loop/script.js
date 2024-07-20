// Event Loop

// sync code:
// console.log("1");
// console.log("2");
// console.log("3");

// o/p:
// 1
// 2
// 3


// async code:
// console.log("1");
// setTimeout(() => {
//     console.log("2");
// }, 1000);
// console.log("3");

// o/p:
// 1
// 3
// 2 (appears after 1 sec)


// Even if we mention the timeout to be 0ms:
// console.log("1");
// setTimeout(() => {
//     console.log("2");
// }, 1000);
// console.log("3");

// o/p:
// 1
// 3
// 2

// reason is : Involvement of Task Queue in Event Loop
// Run on : https://www.jsv9000.app/

// Example 2: Involvement of Microtask Queue
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => res.json())
//     .then(function a(response) {
//         console.log("Fetch completed: ", response[0]);
//     })
//     .catch((err) => {
//         console.error("Fetch error: ", error);
//     });

// Promise.resolve().then(function b() {
//     console.log('Promise resolved');
// });

// Promise.reject().catch(function c() {
//     console.log("Promise rejected");
// });

//o/p:
// Promise resolved
// Promise rejected
// Fetch completed: Object { "body": "quia et suscipit suscipit recusandae 
// consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum 
// rerum est autem sunt rem eveniet architecto", "id": 1, "title": "sunt aut facere 
// repellat provident occaecati excepturi optio reprehenderit", "userId": 1, }


// Example 3: Involvement of both Task Queue and Microtask Queue
// Note: microtask queue has higher priority than Macrotask/task queue.
// console.log("Start");

// setTimeout(() => {
//     console.log("Inside setTimeout (macro - task)")
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Inside Promise (micro - task)");
// });

// console.log("End");

// o/p:
// Start
// End
// Inside Promise (micro - task)
// Inside setTimeout (macro - task)

///////////////////////////////////////////////////////////////////
