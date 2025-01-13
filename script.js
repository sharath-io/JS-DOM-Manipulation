// Creating an elment
const ul = document.querySelector('ul');
const li = document.createElement('li');


// Modifying the text
// const firstElementItem = document.querySelector('.list-item');

// console.log(firstElementItem.innerText);
// console.log(firstElementItem.textContent);
// console.log(firstElementItem.innerHTML);


//Adding ane element
ul.append(li);
li.innerText = 'X- men';

// Modifying Attributes & classes
li.setAttribute('id', 'main-heading');
li.removeAttribute('id')



li.classList.add('list-item')
console.log(li.classList.contains('list-item'))
li.classList.remove('list-item')
console.log(li.classList.contains('list-item'))

// Removing an element
li.remove();
