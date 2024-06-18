// Debouncing and Throttling
// Question - Create a button UI and debounce as follows:
// - Show "Button Pressed <X> Times" every time button is pressed.
// - Increase "Triggered <Y> Times" count after 800ms of debounce.

// Answer:
// const btn = document.querySelector('.increment_btn');
// const btnPress = document.querySelector('.increment_pressed');
// const count = document.querySelector('.increment_count');

// var pressedCount = 0;
// var triggeredCount = 0;

// // Method 1: Using inbuilt Lodash debounce function
// const debouncedCount = _.debounce(() => {
//     count.innerHTML = ++triggeredCount;
// }, 800);

// btn.addEventListener('click', () => {
//     btnPress.innerHTML = ++pressedCount;
//     debouncedCount();
// });


// Question - Create a button UI and throttle as follows:
// - Show "Button Pressed <X> Times" every time button is pressed.
// - Increase "Triggered <Y> Times" count after 800ms of debounce.

// Answer:
// const btn = document.querySelector('.increment_btn');
// const btnPress = document.querySelector('.increment_pressed');
// const count = document.querySelector('.increment_count');

// var pressedCount = 0;
// var triggeredCount = 0;

// // Method 1: Using inbuilt Lodash throttle function
// const throttledCount = _.throttle(() => {
//     count.innerHTML = ++triggeredCount;
// }, 800);

// btn.addEventListener('click', () => {
//     btnPress.innerHTML = ++pressedCount;
//     throttledCount();
// });


