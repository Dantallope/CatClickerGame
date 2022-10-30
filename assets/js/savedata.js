//load existing data if any
function loadGame()
{
    saveData = JSON.parse(localStorage.getItem("kittyclicker"));
    if (saveData == null) return saveData = {totalClicks : 0, happiness : 0, hunger : 0, thirst : 0};
    totalClicks = saveData.totalClicks;
    happiness = saveData.happiness;
    hunger = saveData.hunger;
    thirst = saveData.thirst;
}

//save current data
function saveGame()
{
    saveData.totalClicks = totalClicks;
    saveData.happiness = happiness;
    saveData.hunger = hunger;
    saveData.thirst = thirst;
    localStorage.setItem("kittyclicker", JSON.stringify(saveData));
}

function clearData()
{
    console.log("Clearing all data!");
    localStorage.clear();
}