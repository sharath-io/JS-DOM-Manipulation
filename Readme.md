Learning resource : freecodecamp & mdn docs

# DOM - Document Object Model
* DOM is the data representation of the objects that comprise the structure and content of a document on the web. 
* DOM is a programming interface for web documents.
* It represents the page so that programs can change the document structure, style, and content. 
* The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

The DOM is not a programming language, but without it, the JavaScript language wouldn't have any model or notion of web pages, HTML documents, SVG documents, and their component parts. The document as a whole, the head, tables within the document, table headers, text within the table cells, and all other elements in a document are parts of the document object model for that document. They can all be accessed and manipulated using the DOM and a scripting language like JavaScript.


The DOM is not part of the JavaScript language, but is instead a Web API used to build websites. JavaScript can also be used in other contexts. For example, Node.js runs JavaScript programs on a computer, but provides a different set of APIs, and the DOM API is not a core part of the Node.js runtime.

The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API. 

```html
<body>
    <div class="container">
        <h1 id="main-heading">Favourite Movie Franchise</h1>
        <ul>
            <li class="list-item">The Matrix</li>
            <li class="list-item">Star Wars</li>
            <li class="list-item">Harry Potter</li>
            <li class="list-item">Lord of the Rings</li>
            <li class="list-item">Marvel</li>
        </ul>

    </div>

    <div class="container">
        <h1 id="main-heading">Favourite Sports Franchise</h1>
        <ul>
            <li class="list-item">The Matrix</li>
            <li class="list-item">Star Wars</li>
            <li class="list-item">Harry Potter</li>
            <li class="list-item">Lord of the Rings</li>
            <li class="list-item">Marvel</li>
        </ul>
    </div>

    <script src="script.js"></script>
</body>
```




#  DOM Manipulation - 5 diff ways
``` javascript
// getElementById
const title = document.getElementById('main-heading');
console.log(title);


// getElementByClassName => includes every elemennt which has that class
const listItems = document.getElementsByClassName('list-item')
console.log(listItems)

// getElementByTagName => include every element which has that tag
const listItem = document.getElementsByTagName('div')
console.log(listItem)


// querySelector => includes only first selection of that selector
const container = document.querySelector('div')
console.log(container)

// querySelectorAll => includes all element of that query selection
const containers = document.querySelectorAll('div')
console.log(containers)
```






# Styling an Element
- syntax: element.style.styleAttribute="styleValue"
[title.style.color="red"]
- use camelCase format for style Attribute
``` javascript
const title = document.querySelector('#main-heading');

title.style.color = 'red';

console.log(title)
// ----------------------------------------------------------------

const listItems = document.querySelectorAll('.list-item')

// listItems.style.color = 'green'
// Uncaught TypeError: Cannot set properties of undefined (setting 'color')

for(let i=0;i<listItems.length;i++){
     listItems[i].style.fontSize = '2rem'
     listItems[i].style.backgroundColor="red"
}
console.log(listItems)
```


# Create - add - modify-elements
## modifying elements attributes and classes
```javascript
// Creating an elment
const ul = document.querySelector('ul');
const li = document.createElement('li');


// Modifying the text
const firstElementItem = document.querySelector('.list-item');

console.log(firstElementItem.innerText);
console.log(firstElementItem.textContent);
console.log(firstElementItem.innerHTML);

o/p:
Neo The Matrix

                Neo
                The Matrix

                <span>Neo</span>
                The Matrix


//Adding ane element
ul.append(li);
li.innerText = 'X- men'



// Modifying Attributes & classes
li.setAttribute('id', 'main-heading'); => syntax elem,enmt.setAttribute(attribute, name-of-attrribute)
li.removeAttribute('id')

//modifying classes
li.classList.add('list-item')
console.log(li.classList.contains('list-item')) // => true
li.classList.remove('list-item')
console.log(li.classList.contains('list-item')) // => false


// Removing an element
li.remove();
```



# DOM tree
![Screenshot 2025-01-13 at 12 10 45 PM](https://github.com/user-attachments/assets/5c37d463-1442-4367-9d97-9e321fa78112)
- everything you see in this diagram is in top of the node
    - that includes elements, attributes, textContent, and even line breaks and comments are considered as nodes ⇒ all this together make the DOM tree
- DOM object itself is the property of window object
(window ⇒ is the global top level object representing the tab in the browser)
(window object has access to tool bar, height and width of window, prompts and alerts)
- Document is root node of DOM tree
    - <html> is parent for head and body elements
    - body and head are siblings
    - body is parent to p and h1
    - text contents inside h1 and p are child nodes
    myHeader, myParagraph are nodes
    - classes, id are also called nodes 
    (they don’t participate in parent-child relation)
    just act as properties only






# Traversing in the DOM
```html
<body>
    <div class="container">
        <h1 id="main-heading">Favourite Movie Franchise</h1>
        <ul>
            <li class="list-item">
                <span>Neo</span>
                The Matrix</li>
            <li class="list-item">Star Wars</li>
            <li class="list-item">Harry Potter</li>
            <li class="list-item">Lord of the Rings</li>
            <li class="list-item">Marvel</li>
        </ul>

    </div>
</body>
```

* Node Traversal
* Element Node Traversal
## Parent Node Traversal
* parentNode is generally used to traverse the DOM

```javascript
let ul = document.querySelector('ul');

console.log(ul);                // <ul>...</ul>
console.log(ul.parentNode)      //<div class="container">...</div>
console.log(ul.parentElement)   //<div class="container">...</div>
console.log(ul.parentNode.parentNode)  //<body>...</body>
console.log(ul.parentElement.parentElement)    //<body>...</body>

//Example 2: 
const html= document.documentElement;

console.log(html);               // <html>....</html>
console.log(html.parentNode)     // #document
console.log(html.parentElement)  // null
```

## Child node traversal
* Indentation is counted as text node
* check childNodes and then apply style to that particular child

```javascript
// Child Node Traversal
let ul = document.querySelector('ul');

console.log(ul.childNodes); 
// NodeList(11) [text, li.list-item, text, li.list-item, text, li.list-item, text, li.list-item, text, li.list-item, text]
console.log(ul.firstChild);
// #text
console.log(ul.lastChild)
// #text

 ul.firstChild.style.backgroundColor = 'blue';
// Uncaught TypeError: Cannot set properties of undefined (setting 'backgroundColor')
// Here firstChild is a text

// Whenever you are applying styles like this :
// check childNodes
ul.childNodes[1].style.backgroundColor = 'blue';
```

## Sibling Node Traversal
* sibling node
* sibling element node
```js
// Sibling Node Traversal
let ul = document.querySelector('ul');
const div = document.querySelector('div')


console.log(div.childNodes);

console.log(ul.previousSibling);
console.log(ul.nextSibling)

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling) // null => no element nodes after the ul
```






# Event Listeners
* this is onclick event directly added to button element
``` javascript
 <button class="btn-1" onclick="alert('I love JavaScript')">Enter</button>


// Adding event Listener
// syntax : element.addEventListeners("click", function(){});

const btnEl = document.querySelector('.btn-2')

btnEl.addEventListener('click', function(){
   alert(' I Love React JS')
})



// Mouse Over Event

const boxThree = document.querySelector('.box3');

function mouseOverFn(event){
    event.target.style.backgroundColor = 'red'
}

function mouseOutFn(event){
    event.target.style.backgroundColor = 'green'
}


boxThree.addEventListener("mouseover", mouseOverFn);
boxThree.addEventListener("mouseout", mouseOutFn)

 ```


## EventListeners Example 2 :
 - used for toggle some content 
 - menu toggle etc
 ```javascript
 const btnEl = document.querySelector('.reveal-btn')
const hiddenEl = document.querySelector('.hidden-content');

function toggleFn(){
    if(hiddenEl.classList.contains('reveal-btn')){
        hiddenEl.classList.remove('reveal-btn')
    } else{
        hiddenEl.classList.add('reveal-btn')
    }
}


btnEl.addEventListener('click', toggleFn)
```




# Event Propogation
![Screenshot 2025-01-14 at 9 17 36 PM](https://github.com/user-attachments/assets/fa7e6b87-9cc4-46fa-8ab6-2c18ba11b08f)

Example : 
```html
<body>
        <div class="div2">2
            <div class="div1">1
                <button>Click</button>
            </div>
        </div>

        <script src="./script.js"></script>
</body>
```

- Event propagation refers to how an event travels through the [Document Object Model](https://www.notion.so/c3358aa95f70458ab07d616c4ea4b15e?pvs=21) (DOM) tree, and it can be thought of as electricity running through a wire until it reaches its destination
- The DOM is full of nodes, and when referring to event propagation and events, the event needs to pass through every node on the DOM until it reaches the end or is forcibly stopped
- Event propagation is also the umbrella term that covers three phases when dealing with event listeners:
1. **Event Capturing**
2. **Target**
3. **Event Bubbling**
- The capturing phase starts from the root and travels all the way to the target,
- then it goes into the bubbling phase, which travels back up from the target to the root
- The target phase is a DOM node in which we click, and in the given example, the button at the bottom has a click event attached to it, making it the target phase
- The bubbling phase is essentially the opposite of the capture phase, traveling back up the DOM and notifying every element
- In the provided code example, there are several elements nesting inside of each other, with event listeners on pretty much everything in the [DOM](https://www.notion.so/c3358aa95f70458ab07d616c4ea4b15e?pvs=21) tree
- The event listener function includes a parameter 'e' which represents the event object, containing information about the event that occurred on the target element
- The third parameter in the event listener function is a boolean value that dictates whether to use event capture or event bubbling, with 'true' indicating event capture

```jsx
// Event Propogation 
// Event caputing => top to bottom => true 

window.addEventListener('click', function(){
    console.log('window')
},true);

document.addEventListener('click', function(){
    console.log('document');
},true);

document.querySelector('.div2').addEventListener('click', function(){
    console.log('DIV 2');
},true);

document.querySelector('.div1').addEventListener('click', function(){
    console.log('DIV 1');
},true);

document.querySelector('button').addEventListener('click', function(e){
    console.log(e)
},true);


* o/p: when button is clicked
window
document
DIV 2
DIV 1
PointerEvent {isTrusted: true, pointerId: 3, width: 1, height: 1, pr}

* o/p: when div 1 is clicked
window
document
DIV 2
DIV 1

* o/p: when div 2 is clicked
window
document
DIV 2
```

* True ⇒ event capturing (top to down until target)***

* False (by default)⇒ event bubbling (target to top (window))

- Event capture starts from the window and goes down to the target element, notifying all elements it comes across, while event bubbling starts from the target element and goes up to the window
- The event object 'e' contains various properties and information about the event, including the event type, location on the screen, and whether the shift key was pressed
- The 'target' property of the event object represents the element that the event is actually on, which is the button in this case
- Using the 'target' property, the event can be manipulated to change the text of the button when clicked, by accessing the button element and changing its inner text
- To initiate the bubbling phase, the boolean value in the event listener function needs to be set to 'false', which will start the event from the target element and go up to the window
- Event bubbling occurs when an event starts from the target element and propagates upwards to the highest position in the [DOM](https://www.notion.so/c3358aa95f70458ab07d616c4ea4b15e?pvs=21) tree, and this can be stopped using the stopPropagation method
- To stop event propagation at a specific element, the stopPropagation method can be used within the event listener function of that element


```jsx
// e.stopPropogation():
// if we want to stop event capturing or evbent bubbling
// suppose at div 2
document.querySelector('.div2').addEventListener('click', function(e){
   e.stopPropagation();
    console.log('DIV 2');
},true);

o/p: event capturing starts from widnow towards target
but stopped at DIV2
window
document
DIV2
```

- Event capturing is the opposite of event bubbling, where the event starts from the window and propagates downwards to the target element, and stopPropagation can also be used to stop event capturing

```jsx
// Event Propogation :
// EVent bubbling example : bottom to top

window.addEventListener('click', function(){
    console.log('window')
},false);

document.addEventListener('click', function(){
    console.log('document');
},false);

document.querySelector('.div2').addEventListener('click', function(e){
    console.log('DIV 2');
},false);

document.querySelector('.div1').addEventListener('click', function(){
    console.log('DIV 1');
},false);

document.querySelector('button').addEventListener('click', function(e){
    console.log(e)
},false);

o/p:
PointerEvent {isTrusted: true, pointerId: 3, width: 1, height: 1, pressure: 0, …}DIV 1
DIV1
DIV 2
document
window
```

- The once property can be used to ensure that an event listener is only triggered once, even if the event is triggered multiple times
- Setting the once property to true will prevent the event listener from being triggered again after the first time
- in place of true/ false we can also give

```jsx
// {once:true}
// Event Propogation

window.addEventListener('click', function(){
    console.log('window')
},false);

document.addEventListener('click', function(){
    console.log('document');
},false);

document.querySelector('.div2').addEventListener('click', function(e){
    console.log('DIV 2');
},{once:true});

document.querySelector('.div1').addEventListener('click', function(){
    console.log('DIV 1');
},false);

document.querySelector('button').addEventListener('click', function(e){
    console.log(e)
},false);

o/p: DIV2 is executed only once 
PointerEvent {isTrusted: true, pointerId: 3, width: 1, height: 1, pressure: 0, …}
DIV 1
DIV 2
document
window
PointerEvent {isTrusted: true, pointerId: 5, width: 1, height: 1, pressure: 0, …}
DIV 1
document
window
```

- The preventDefault method can be used to prevent the default behavior of an element or event from occurring, and this method is dependent on the type of element and the context of the event
- The preventDefault method can be used to prevent the default behavior of an anchor tag, such as navigating to a new page, when clicked
- To use the preventDefault method, the event listener must be attached to the element that has the default behavior that needs to be prevented
- The default behavior of an anchor tag is to try and redirect to somewhere else, causing a quick refresh after firing off all events
- This default behavior can be stopped using the preventDefault method, which can be applied to the event object of the anchor tag
- By applying the preventDefault method, the anchor tag will no longer try to redirect, allowing the events to fire off without a quick refresh, and the content changes will remain visible
- When the preventDefault method is applied, clicking on the button will show the bubbling phase and the content will change and stay visible, without redirecting to somewhere else

```jsx
// e.preventDefault() example
// as anchor element by default tries to redireect to somewhere else 
// causing quick refresh

window.addEventListener('click', function(){
    console.log('window')
},false);

document.addEventListener('click', function(){
    console.log('document');
},false);

document.querySelector('.div2').addEventListener('click', function(e){
    console.log('DIV 2');
},{once:true});

document.querySelector('.div1').addEventListener('click', function(){
    console.log('DIV 1');
},false);

document.querySelector('.button').addEventListener('click', function(e){
    e.preventDefault();
    console.log(e)
},false);
```



* Event Delegation

```js
// Example : here if we click on a list item 
// background of that list should be changed


document.querySelector('#football').addEventListener('click', function(e){
    console.log('football is clicked');

    const target = event.target;

    if(target.matches('li')){
        target.style.backgroundColor = 'lightgray'
    }
})

document.querySelector('#basketball').addEventListener('click', function(e){
    console.log('basketball is clicked');

    const target = event.target;

    if(target.matches('li')){
        target.style.backgroundColor = 'lightgray'
    }
})

document.querySelector('#boxing').addEventListener('click', function(e){
    console.log('boxing is clicked');

    const target = event.target;

    if(target.matches('li')){
        target.style.backgroundColor = 'lightgray'
    }
})

document.querySelector('#tennis').addEventListener('click', function(e){
    console.log('tennis is clicked');

    const target = event.target;

    if(target.matches('li')){
        target.style.backgroundColor = 'lightgray'
    }
})

document.querySelector('#golf').addEventListener('click', function(e){
    console.log('golf is clicked');

    const target = event.target;

    if(target.matches('li')){
        target.style.backgroundColor = 'lightgray'
    }
})
```

* instead of writing event listeners to each list item
* we can delegate this to parent element
* Event Delegation
* for good code quality and code maintenance
* using eveny delegation we save a ton on memory => which vastly improves performance

## It allows users to append a SINGLE event listener to a parent element that adds it to all of its parent 
```js
document.querySelector('#sports').addEventListener('click', function(e){

console.log( e.target.getAttribute('id') + ' is clicked')

const target = e.target;

if(target.matches('li')){
   target.style.backgroundColor = 'lightgray'
  }
})
```

## AND future descendants that matchg a selector

```js
const sports = document.querySelector('ul');

const newSport = document.createElement('li');

newSport.innerText = 'rubby';
newSport.setAttribute('id', 'rubby');

sports.append(newSport)
```
