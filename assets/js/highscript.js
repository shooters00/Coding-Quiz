var backButtonEl = document.getElementById("goBack");
var clearButtonEl = document.getElementById("clearHigh");
var highScoreEl = document.querySelector(".highscoreList")

//If no high scores yet, put that on page.  IF high scores, get them from local storage and output them.
function Init() {
    highScoreEl.innerhtml = "";
    if (localStorage.getItem("scores") === null) {
        var noScoresEl = document.createElement("h1");
        noScoresEl.setAttribute("class", "main");
        noScoresEl.textContent = "No Scores Available Yet";
        highScoreEl.appendChild(noScoresEl);
    } else {
        highScores = JSON.parse(localStorage.getItem("scores"));
        var scoreEl;
        var first;
        var number;
        var highScore = {};
        //var splitHighScore;
        for (i=0; i < highScores.length; i++) {
            scoreEl = document.createElement("li");
            first = highScores[i].highName;
            number = highScores[i].highScore;
            scoreEl.textContent = "  " + first + " - " + number;
            highScoreEl.appendChild(scoreEl);
        }
    }
}

//Initialize high score list
Init();

//Listen for back button and go back
backButtonEl.addEventListener("click", function() {
    window.open('index.html', "_self");
});

//Listen for clear of high scores and clear
clearButtonEl.addEventListener("click", function() {

    //Remove highScores from local storage
    
    if (localStorage.getItem("scores") !== null) {
        localStorage.removeItem("scores");
        highScoreEl.innerhtml = "";
        for (i=0; i < highScores.length; i++) {
            highScoreEl.textContent = "";
        }
    }
    var noScoresEl = document.createElement("h1");
    noScoresEl.setAttribute("class", "main");
    noScoresEl.textContent = "No Scores Available Yet";
    if (highScoreEl.textContent !== "No Scores Available Yet") {
        highScoreEl.appendChild(noScoresEl);
    }
    
});