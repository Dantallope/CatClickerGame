//environment constants
const quoteInterval = 100;
const needsInterval = 5000;
const needsGain = 10;
const colorGreen = "#a4ff94";
const colorYellow = "#faff94";
const colorRed = "#ff9494";
const colorScale = chroma.scale([colorRed, colorYellow, colorGreen]);

//initializing core data
var saveData;
var totalClicks = 0;
var happiness = 100;
var hunger = 0;
var thirst = 0;

//api information
const quoteUrl ="https://api.quotable.io/random";

//document elements
const el_totalClicks = document.getElementById("totalClicks");
const el_happiness = document.getElementById("happiness");
const el_happinessBar = document.getElementById("happinessBar");
const el_happinessIcon = document.getElementById("happinessIcon");
const el_hunger = document.getElementById("hunger");
const el_hungerBar = document.getElementById("hungerBar");
const el_hungerIcon = document.getElementById("hungerIcon");
const el_thirst = document.getElementById("thirst");
const el_thirstBar = document.getElementById("thirstBar");
const el_thirstIcon = document.getElementById("thirstIcon");
const el_cat = document.getElementById("imgCat");
const el_hitboxCat = document.getElementById("hitboxCat");
const el_food = document.getElementById("imgFood");
const el_hitboxFood = document.getElementById("hitboxFood");
const el_water = document.getElementById("imgWater");
const el_hitboxWater = document.getElementById("hitboxWater");
const el_quote = document.getElementById("quote");
const el_clearDataLink = document.getElementById("clearDataLink");
const el_aboutLink = document.getElementById("aboutLink");
const el_aboutModal = document.getElementById("aboutModal");
const el_closeModal = document.getElementById("closeModalButton");

function updateStats()
{
    el_totalClicks.innerHTML = totalClicks;
    el_happinessBar.style.backgroundColor = colorScale(happiness/100).toString();
    el_happinessIcon.style.color = colorScale(happiness/100).darken(3).toString();
    el_happiness.innerHTML = happiness + "%";
    el_hungerBar.style.backgroundColor = colorScale(1 - (hunger / 100)).toString();
    el_hungerIcon.style.color = colorScale(1 - (hunger / 100)).darken(3).toString();
    el_hunger.innerHTML = hunger + "%";
    el_thirstBar.style.backgroundColor = colorScale(1 - (thirst / 100)).toString();
    el_thirstIcon.style.color = colorScale(1 - (thirst / 100)).darken(3).toString();
    el_thirst.innerHTML = thirst + "%";
}

//once every {needsInterval}, up hunger and thirst by {needsGain} and then subtract happiness by 10% of the sum of hunger and thirst
function needsTick()
{
    hunger += needsGain;
    if (hunger > 100) hunger = 100;
    thirst += needsGain;
    if (thirst > 100) thirst = 100;
    happiness -= ((hunger / 10) + (thirst / 10));
    if (happiness < 0) happiness = 0;
    saveGame();
    updateStats();
}

//fetching quote from API
async function getQuote()
{
    const response = await fetch(quoteUrl);
    var data = await response.json();

    el_quote.innerHTML = `${data.content} -${data.author}`;
}

//clicking cat raises total clicks and happiness by 1 each
function catClick()
{
    totalClicks++;
    happiness++;
    if (happiness > 100) happiness = 100;
    updateStats();
    //if totalClicks is modulus of {quoteInterval}, fetch a new quote
    if (totalClicks % quoteInterval == 0) getQuote();
    saveGame();
}

//decrease hunger by {needsGain} per click
function foodClick()
{
    hunger -= needsGain;
    if (hunger < 0) hunger = 0;
    updateStats();
    saveGame();
}

//decrease thirst by {needsGain} per click
function waterClick()
{
    thirst -= needsGain;
    if (thirst < 0) thirst = 0;
    updateStats();
    saveGame();
}

//event listeners
el_hitboxCat.addEventListener('click', function(){catClick()});
el_hitboxFood.addEventListener('click', function(){foodClick()});
el_hitboxWater.addEventListener('click', function(){waterClick()});
el_clearDataLink.addEventListener('click', function()
{
    clearData();
    totalClicks = 0
    happiness = 100;
    hunger = 0;
    thirst = 0;
    updateStats();
});

//showing and hiding the about modal
el_aboutLink.addEventListener('click', function()
{
    el_aboutModal.classList.remove("hidden");
});
el_closeModal.addEventListener('click', function()
{
    el_aboutModal.classList.add("hidden");
});

//initialize game
loadGame();
updateStats();
setInterval(needsTick, needsInterval);