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


// What is Event Bubbling?
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