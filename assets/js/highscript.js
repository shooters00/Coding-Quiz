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
        console.log("In the else section");
        highScores = JSON.parse(localStorage.getItem("scores"));
        console.log(highScores[0].highName);
        console.log(highScores[0].highScore);
        var scoreEl;
        var first;
        var number;
        var highScore = {};
        //var splitHighScore;
        for (i=0; i < highScores.length; i++) {
            scoreEl = document.createElement("li");
            highScore = highScores[i];
            scoreEl.textContent = JSON.stringify(highScore);
            highScoreEl.appendChild(scoreEl);

            console.log(highScore);
            //console.log(highScore.highName);

            //splitHighScore = highScore.split(",");
            //console.log(splitHighScore);

            //first = highScore.filter(obj => {
                //return obj.highName
        }
        /*
        highScores.forEach(element => {
            console.log(this.highName);
            console.log(this.highScore);
        });
        */
    }
}

//Initialize high score list
Init();

//Listen for back button and go back
backButtonEl.addEventListener("click", function() {
    console.log("Back Button Clicked!");
    window.open('index.html');
});

//Listen for clear of high scores and clear
clearButtonEl.addEventListener("click", function() {
    console.log("Clear Highscores Button Clicked!");

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