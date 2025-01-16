const quotes = [
    {
      quote: "The best way to predict the future is to create it. If you're not proactive, you're reactive.",
      author: "Abraham Lincoln"
    },
    {
      quote: "Success is not final, failure is not fatal. It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "Do not dwell in the past, do not dream of the future. Concentrate the mind on the present moment.",
      author: "Buddha"
    },
    {
      quote: "In the middle of difficulty lies opportunity. Every challenge opens a new door.",
      author: "Albert Einstein"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "Do what you can, with what you have, where you are. Every small step adds up.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "Life is what happens when you’re busy making other plans. Embrace the unexpected.",
      author: "John Lennon"
    },
    {
      quote: "Happiness is not something ready-made. It comes from your own actions.",
      author: "Dalai Lama"
    },
    {
      quote: "It always seems impossible until it’s done. Each victory starts with belief.",
      author: "Nelson Mandela"
    },
    {
      quote: "Your time is limited, don’t waste it living someone else’s life. Follow your heart.",
      author: "Steve Jobs"
    }
  ];
  
  
const btnEl = document.querySelector('button');
const quoteText = document.querySelector('.text-area');
const author = document.querySelector('.person')

// generate a radom number from 0 to max of array length (excluded)
function generateRandom(){
   return Math.floor(Math.random()*quotes.length)
}

btnEl.addEventListener('click', function(){
    const random = generateRandom();
    quoteText.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
})