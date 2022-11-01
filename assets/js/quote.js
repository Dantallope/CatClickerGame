var quoteShown = document.getElementById('quote')
var cat = document.getElementById('cat')


//fetch random quote from API
const quotesUrl ="https://api.quotable.io/random";
console.log(quotesUrl)

async function getQuote(url)
{
    const response = await fetch(url);
    var data = await response.json();

    return `${data.content} -${data.author}`;

}

getQuote(quotesUrl);


//listens for click to show quote
cat.addEventListener('click', function(event) {
    event.preventDefault()
    totalClicks++;
    saveGame();
    console.log(totalClicks)

    var quote = getQuote(quotesUrl).then(function(quote) {
        quoteShown.innerHTML = quote
    
    var audio = new Audio('assets\music\meow.mp3')
    audio.play() 

    })
    
}, 20000)


