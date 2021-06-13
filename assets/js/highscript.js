var backButtonEl = document.getElementById("goBack");
var clearButtonEl = document.getElementById("clearHigh");
var highScoreEl = document.querySelector(".highscoreList")

function Init() {
    highScoreEl.innerhtml = "";
    if (localStorage.getItem("highscores") === null) {
        var noScoresEl = document.createElement("h1");
        noScoresEl.setAttribute("class", "main");
        highScoreEl.appendChild(noScoresEl);
    } else {
        console.log("In the else section");
        highScores = JSON.parse(localStorage.getItem("highscores"));
        console.log(highScores);
        var scoreEl;
        var first;
        var number;
        for (i=0; i < highScores.length; i++) {
            scoreEl = document.createElement("li");
            highScore = highScores[i].values;
            //number = highScores.highScore;
            console.log(highScore);
            //scoreEl.textContent = first + " " + number;
            //highScoreEl.appendChild(scoreEl);
        }
    }
}

Init();

backButtonEl.addEventListener("click", function() {
    console.log("Back Button Clicked!");
    window.open('index.html');
});

clearButtonEl.addEventListener("click", function() {
    console.log("Clear Highscores Button Clicked!");

    //Remove highScores from local storage
    localStorage.removeItem("highScores");
});