var startButtonEl = document.getElementById("goBack");
var clearButtonEl = document.getElementById("clearHigh");
var highScoreEl = document.querySelector(".highScoreList")

startButtonEl.addEventListener("click", function() {
    console.log("Back Button Clicked!")
    window.open('index.html');
});

clearButtonEl.addEventListener("click", function() {
    console.log("Clear Highscores Button Clicked!")

    //Remove highScores from local storage
    localStorage.removeItem("highScores");
});