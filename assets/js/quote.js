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

//listens for click to start setInterval function
cat.addEventListener('click', function(event) {
    event.preventDefault()
    
    console.log("clicked")

})
    //show quote every 20 seconds upon click
setInterval(function() {
    var quote = getQuote(quoteUrl).then(function(quote) {
        quoteShown.innerHTML = quote
    })
}, 20000)
