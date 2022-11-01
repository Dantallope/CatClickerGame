var quoteShown = document.getElementById('quote')
var cat = document.getElementById('cat')


//fetch random quote from API
const quoteUrl ="https://api.quotable.io/random";
console.log(quoteUrl)

async function getQuote(url)
{
    const response = await fetch(url);
    var data = await response.json();

    return `${data.content} -${data.author}`;

}

getQuote(quoteUrl);


//listens for click to show quote
cat.addEventListener('click', function(event) {
    event.preventDefault()
    totalClicks++;
    saveGame();
    console.log(totalClicks)
    var quote = getQuote(quoteUrl).then(function(quote) {
        quoteShown.innerHTML = quote
    })
}, 20000)
