//load existing data if any
function loadGame()
{
    var saveData = JSON.parse(localStorage.getItem("catclicker"));
    if (saveData == null) saveData = [];
}

//save current data
function saveGame()
{
    //TODO: populate these values from the game at realtime
    var totalClicks;
    var happiness;
    var hunger;
    var water;
}