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


document.querySelector('.button').addEventListener('click', function(e){
    e.preventDefault();
    console.log(e.target.innerText = 'Clicked')
},false);


