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


