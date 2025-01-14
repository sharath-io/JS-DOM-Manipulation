const btnEl = document.querySelector('.reveal-btn')
const hiddenEl = document.querySelector('.hidden-content');
const containerEl = document.querySelector('.container-2')


// function toggleFn(){
//     if( hiddenEl.style.display==='inline'){
//         hiddenEl.style.display ='none';
//         containerEl.style.border='1px solid white';
//         btnEl.style.border='none'
//     }
    
//     else{
//         hiddenEl.style.display ='inline';
//         btnEl.style.border='1px solid white';
//         containerEl.style.border='none'
//     }
// }

function toggleFn(){
    if(hiddenEl.classList.contains('reveal-btn')){
        hiddenEl.classList.remove('reveal-btn')
    } else{
        hiddenEl.classList.add('reveal-btn')
    }
}


btnEl.addEventListener('click', toggleFn)