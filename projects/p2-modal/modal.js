const openBtn = document.getElementById('open-btn');
const modalEl = document.getElementById('modal-container');
const closeBtn = document.getElementById('close-btn')

openBtn.addEventListener('click', function(){
    modalEl.style.display='block'
})

closeBtn.addEventListener('click', function(){
    modalEl.style.display='none'
});

window.addEventListener('click', function(event){
    if(event.target === modalEl)
         modalEl.style.display='none'
})


// if we clock on remaining