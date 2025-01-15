// Eventy Delegation

// It allows users to append a SINGLE event listener to a parent element that adds it to all of its parent AND future descendants that matchg a selector


// Example : here if we click on a list item 
// background of that list should be changed


document.querySelector('#sports').addEventListener('click', function(e){

console.log( e.target.getAttribute('id') + ' is clicked')

const target = e.target;

if(target.matches('li')){
   target.style.backgroundColor = 'lightgray'
  }
})


const sports = document.querySelector('ul');

const newSport = document.createElement('li');

newSport.innerText = 'rubby';
newSport.setAttribute('id', 'rubby');

sports.append(newSport)