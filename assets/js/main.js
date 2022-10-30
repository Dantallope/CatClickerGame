var saveData;
var totalClicks = 0;
var happiness = 0;
var hunger = 0;
var thirst = 0;

const el_totalClicks = document.getElementById("totalClicks");
const el_happiness = document.getElementById("happiness");
const el_hunger = document.getElementById("hunger");
const el_thirst = document.getElementById("thirst");
const el_cat = document.getElementById("imgCat");
const el_hitbox = document.getElementById("hitbox");

loadGame();

console.log(saveData);

el_totalClicks.innerHTML = totalClicks;
el_happiness.innerHTML = happiness + "%";
el_hunger.innerHTML = hunger + "%";
el_thirst.innerHTML = thirst + "%";

function newClick()
{
    console.log("cat is clicked");
    totalClicks++;
    el_totalClicks.innerHTML = totalClicks;
    saveGame();
}

el_hitbox.addEventListener('click', function(){newClick()});