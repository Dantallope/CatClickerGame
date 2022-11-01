var scoreEl = document.getElementById('score')

var catEl = document.getElementById('thecat')

scoreEl.value=0

catEl.addEventListener("click", function() {
    console.log(happybar);
    console.log(scoreEl.value)
    if (scoreEl.value==scoreEl.value) {
        scoreEl.value++;
    }
    scoreEl.innerHTML = scoreEl.value
    return scoreEl.value;
})