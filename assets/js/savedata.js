//TODO: these will be populated at runtime
var totalClicks;
var happiness;
var hunger;
var water;

//load existing data if any
function loadGame()
{
    var saveData = JSON.parse(localStorage.getItem("catclicker"));
    if (saveData == null) saveData = [];
    totalClicks = saveData.totalClicks;
    happiness = saveData.happiness;
    hunger = saveData.hunger;
    water = saveData.water;
}

//save current data
function saveGame()
{
    saveData.totalClicks = totalClicks;
    saveData.happiness = happiness;
    saveData.hunger = hunger;
    saveData.water = water;
}