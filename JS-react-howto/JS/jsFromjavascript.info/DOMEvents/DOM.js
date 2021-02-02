DOM tree is generated from an HTML document, which we can then interact with.
DOM is a very  complex API that contains lots of methods and properties to interact with the DOM tree;

the HTML button element for example, is also an element and also a node.
DOM API is broken up into different types of nodes.
======================================================
    Document is just another type of node
EventTarget which is a parent of both the node type
and also the window node type.

------------------------------------------------------------------------------
document.documentElement.clientHeight
window.scrollTo();
window.scrollTo(+ window.pageXOffset,250 + window.pageYOffset); //current postion plus current scroll

window.scrollTo({
    left:
    top:
    behavior: 'smooth'
})

Or more modern way
section.scrollIntoView({})