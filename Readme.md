Learning resource : freecodecamp

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
