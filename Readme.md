# Answer to the Question number 1 -->
getElementById:
--> It is used for select a single element by its id.
--> it is return a single DOM element.
--> It's only works with id attributes.


getElementsByClassName:
--> It is used for select elements by their class name.
--> It is return an HTMLCollection of element.
--> It's only works with class attributes.


querySelectors / querySelectorAll:
--> Select elements using CSS selectors (id, class, tag, or complex selectors).
-->querySelector return first matching element.
-->querySelectorAll return NodeList of all matching elements.
-->Accepts any valid CSS selector: #id, .class, div > p, etc.

# Answer to the Question number 2 -->

Create a new element:
-->Use document.createElement() to create a new HTML element.
Example:const newDiv = document.createElement("div");

Add content or attributes:
-->set text, HTML, or attributes for the new element.
Example:newDiv.innerText = "This is a new div";

Insert the element into the DOM:
-->Use methods like appendChild, prepend, before, after, or insertBefore.
Example:
const container = document.getElementById("container");
container.appendChild(newDiv);

# Answer to the Question number 3 -->

Event Bubbling:
Event Bubbling is a way how events travel in the DOM.

-->When you click on an element (like a button), the event first happens on the element you clicked.

-->Then, it moves up the DOM tree to its parent, then the grandparent, and so on, all the way to the document or body.

How Event Bubbling Works:
When an event occurs,
-->The target element receives the event first.
-->The event then “bubbles up” to its parent element.
-->The parent’s parent element also receives the event, and this continues up the tree.

# Answer to the question no 4-->
Event Delegation:
Event Delegation is a technique where instead of adding event listeners to many individual child elements, we can add a single event listener to their parent.We can figure out which child element triggered the event by using event.target.

Usefulness:
-->It less the quantity line of code. 
-->It increase our productivity and performance.
-->Fewer event listeners means less memory.

# Answer to the question no 5-->
preventDefault():
-->It stops the default action of an HTML element from happening.
-->It does not stop the event from bubbling. The event still goes up to parent elements.

stopPropagation():
-->It stop the event from bubbling up the DOM tree to parent elements.
-->Event won’t reach parent elements.