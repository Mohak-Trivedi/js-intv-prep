// Event Propagation in JavaScript
// Question - What is Event Propagation?
// For our HTML:
/*
<body>
    <div>
        DIV
        <form action="">
            FORM
            <button>
                BUTTON
            </button>
        </form>
    </div>
    <script src="script.js"></script>
</body>
*/
/*
Now, if we have click event listeners on div, form and button.
And, if we click on the button, all the 3 events will get triggered because the
button is present in the form which is present in the div. 
Hence, the 3 events will get triggered one by one:
By default from innermost to outermost: button to div.
But, we can also manipulate this.
Hence, the event "propagates" and this phenomenon is called as Event Propagation.
*/


// Question - What is Event Bubbling?
// Bubbles always go from bottom to top.
// So, in event bubbling, the events are propagated from bottom (innermost) to
// top (outermost).
// In case of our previous question e.g.:
// The button's click will get triggered first, then form and then div.
// EXCEPTION:
// Any events specific to one element do not bubble: focus, blur, load, unload, change, 
// reset, scroll, most of the DOM events (DOMFocusIn, DOMFocusOut, DOMNodeRemoved, etc), 
// mouseenter, mouseleave, etc
// const div = document.querySelector('div');
// const form = document.querySelector('form');
// const button = document.querySelector('button');

// div.addEventListener('click', () => {
//     alert('div');
// });
// form.addEventListener('click', () => {
//     alert('form');
// });
// button.addEventListener('click', () => {
//     alert('button');
// });

// Question - event.target v/s this.target v/s event.currentTarget
// Answer:
// Events bubble by default. So the difference between the three is:
// target is the element that triggered the event (e.g., the user clicked on)
// currentTarget is the element that the event listener is attached to.
// this is similar to currentTarget
// const div = document.querySelector('div');
// const form = document.querySelector('form');
// const button = document.querySelector('button');

// div.addEventListener('click', func);
// form.addEventListener('click', func);
// button.addEventListener('click', func);

// function func(event) {
//     alert("currentTarget = " + event.currentTarget.tagName + 
//         ", target = " + event.target.tagName + 
//         ", this = " + this.tagName
//     );
// }


// Question - What is Event Capturing / Trickling?
// Answer:
// By default, events get bubbled i.e. propagate from bottom to top.
// With Event Capturing, we can make them propagate from top to bottom.
const div = document.querySelector('div');
const form = document.querySelector('form');
const button = document.querySelector('button');

div.addEventListener('click', function () {
    alert('div');
},
{
    capture: true,
});

form.addEventListener('click', function () {
    alert('form');
},
{
    capture: true,
});

button.addEventListener('click', function () {
    alert('button');
},
{
    capture: true,
});
// Suppose if we remove { capture: true } from the event listeners of form and 
// button, then upon clicking the button, first the event listener of div will
// get called as it has capture: true, but then later on instead of coming top
// to bottom i.e. instead of form then button, we go bottom to top i.e. button to
// form.