// Event Listeners

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