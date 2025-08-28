1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer-1:

getElementById: Selects single element by unique id.

getElementsByClassName: Selects all elements with mentioned class name.

querySelector: Selects first element from ('___') like: #id / .class / tag

querySelectorAll: Selects all from ('___') like: #id / .class / tag .It can be iterated with loops.



 <!--  -->



2.How do you create and insert a new element into the DOM?

Answer-2:

Step-1:Create new element
Step-2:Add content to this createELement
Step-3:Insert into in DOM

Example:
const createElement = document.createElement("div");


createElement.innerText = "Hi This is Reshat!";


document.getElementById('div-container').appendChild(createElement);



<!--  -->


3.What is Event Bubbling and how does it work?

Answer-3:

Event Bubble: Event bubbling is a DOM event propagation mechanism where an event starts at the target element and bubbles up to the root of the document.

How does it work: Parent --> GrandParent --> Document --> Window. 
Clicking the child triggers the event to propagate upward, activating listeners on the parent and grandparent. 



<!--  -->


4.What is Event Delegation in JavaScript? Why is it useful?

Answer-4:

Event Delegation: Event delegation is a technique in JavaScript where a single event listener is attached to a parent element instead of attaching event listeners to multiple child elements.

Why useful: Improve working performance and its a useful pattern that allows you to write cleaner code, and create fewer event listeners with similar logic. 



<!--  -->


5.What is the difference between preventDefault() and stopPropagation() methods?

Answer-5:

preventDefault(): is used to prevent the default action that belongs to the event, such as preventing a form from submitting. event. 

stopPropagation(): is used to stop the event from bubbling up to parent elements, preventing any parent event handlers from being executed.

