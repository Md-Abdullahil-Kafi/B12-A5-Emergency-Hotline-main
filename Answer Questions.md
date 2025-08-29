### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?


1. Ans: There have some key difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll.
    i) getElementById: to access an html element by using Id. It always return a single Element.    
    ii) getElementsByClassName: to access all html elements that have matches by className. its gives an HTML Collections that update automaticly whene DOM Change.
    iii) querySelector: To access the first Math element by html-class. can also use id, attriutes, pseudo-classes etc.
    iv) querySelectorAll: Selects all elements that match a CSS selector. its gives a static NodeList that dosenot change automaticly.

2. Ans: Create the element: Use document.createElement("tagName").You can set innerText, innerHTML, or add classes/ids. Insert it into the DOM like appendChild() to place it where you want.

3. Ans: Event bubbling is a process in the DOM where an event starts from the target element (the element that was actually clicked or interacted with) and then travels upwards through its parent elements, one by one, until it reaches the document root.

4. Ans: Event Delegation means adding one event listener to a parent element instead of adding many listeners to each child element.
When a child element is clicked (or any event happens), the event goes up to the parent (this is called bubbling). From the parent, we can check which child was clicked using event.target.


5. Ans: preventDefault(): Stops the browser’s default behavior.
stopPropagation(): Stops the event from moving to parent elements.