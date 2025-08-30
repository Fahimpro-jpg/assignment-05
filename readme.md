
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans: The main difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll is getElementId can only access id in a div and getElementsClassName can only access all classes in the div and querySelector can access particular  class or id given and querySelectorAll can access all class and id.


2. How do you **create and insert a new element into the DOM**?
Ans: I can create js file then in a variable i can put document.createElement("div) function
then I have to access the html file with anyVariable.innerHtml = ~ ~ then can i change any element in a DOM

3. What is **Event Bubbling** and how does it work?
Ans:In my understanding event bubbling is a method where i can select a event or a dom then step by step through the child element i can access to parent element of html file. then i can reach to the parent of parents element of a html file. then can i also manipulate the parent element using event bubbling


4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans:In programming to function button we have to use many eventListener to function or button. if we use the method of event bubbling and beside putting eventListener to every child element directly putting the eventListener to parent element it make our works so easy. so its very helpful


5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans: The major difference between preventDefault and stopPRopagation is
preventDefault function stops browsers default action like refreshing the page and others.
stopPropagation function works on method of event buble which by accessing to child to parent element if I use stopPropagation the addEventListener will stop to child element it will not work on the parent element 

