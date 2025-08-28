1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? :
**Answer :**
getElementById selects one element by its id and returns a single value or element.
getElementsByClassName selects all elements with a class and returns a live htmlcollection.
querySelector selects the first element matching any CSS selector and returns a single element.
querySelectorAll selects all elements matching by any CSS selector returns a static nodelist.

2. How do you create and insert a new element into the DOM? :
**Answer :**
1. create a new div : const div = document.createElement("div")
2. create innerHTML : const callTransactionContainer = document.getElementById("call-history-container")
div.innerHTML = `<div> <h6>Arman</h6> <p>Computer Technology</p></div>`
3. append the child : callTransactionContainer.appendChild(div)

3. What is Event Bubbling and how does it work? :
**Answer :**
Event Bubbling is a mechanism in the DOM (Document Object Model) where, when an event is triggered on an element, it bubbles up through the DOM tree from the child element to its parent elements. In other words, if you click on a child element, the event will also be triggered on its parent elements.

functionality :
You click (or trigger an event) on a nested element (child).
The event first runs on the target element.
Then it bubbles up to its parent, then grandparent, all the way up to <html> (document).

4. What is Event Delegation in JavaScript? Why is it useful?
**Answer :**
Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of adding separate listeners to multiple child elements. The parent “delegates” the event handling to the target child that triggered the event.

why is it useful :
- performance
- short time
- speed
- cleaner code

5. What is the difference between preventDefault() and stopPropagation() methods? :
**Answer :**
preventDefault() stop the default task of browser.
stopPropagation() stop the event to capturing in DOM
