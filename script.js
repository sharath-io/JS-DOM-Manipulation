// Traverse the DOM

// Sibling Node Traversal
let ul = document.querySelector('ul');
const div = document.querySelector('div')


console.log(div.childNodes);

// console.log(ul.previousSibling);
// console.log(ul.nextSibling)

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling) // null => no element nodes after the ul