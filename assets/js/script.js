var buttonEl = document.getElementById("start");
var countdownEl = document.getElementById("countdown");
var mainEl = document.querySelector(".main");
var quizEl = document.querySelector(".quiz");
var resultsEl = document.querySelector("#results");
var formEl = document.querySelector("#myForm");
var scoreEl = document.querySelector("#myScore");
var initialEl;
var quizQuestions = [];
var thisQuestion = [];
var myAnswer=[];
var countdown = 5;
var score=0;
var highscore;

//Things to load on page open
function Init() {
    quizQuestionsObject = JSON.parse(localStorage.getItem("quiz"));
    console.log(quizQuestionsObject);
}

//Function to fun when the start button is pushed to commence the game
function startGame(i) {
    //isWin = false;
    var count = 0;
    
    //Need to hide the main element & show the quiz element
    mainEl.setAttribute("style", "display: none");
    quizEl.setAttribute("style", "display: block");
    startCountdown();

    pullQuestion(count);
    displayQuestion(count);
    answerQuestion();
    checkAnswer();

    //Need to request first question/answer from quiz objects function & increment each time 
    //for (i=0; i < 10; i++) {

    //}
    //gameOver();
}

function pullQuestion(num) {
    //Put this in another function
    thisQuestion = quizQuestionsObject[num];
    return thisQuestion;
}

function displayQuestion(num) {
    //Need to append child objects (quiz questions)
    quizEl.textContent = thisQuestion.question;
    //set the ul and make it empty here
    quizEl.innerhtml = "";
    for (x=0; x < 4; x++) {
        var lix = document.createElement("li");
        //var buttonx = document.createElement("button");
        lix.textContent = thisQuestion.options[x];
        //lix.appendChild(buttonx);
        lix.setAttribute("style", "background-color: #1bbc9b; padding: 5px; margin: 10px; text-align: center");
        quizEl.appendChild(lix);
    }
}

function answerQuestion() {
    quizEl.addEventListener("click", function(event) {
        event.preventDefault();
        myAnswer = event.target.textContent;
        console.log("I chose this one:");
        console.log(myAnswer);
    })
    return myAnswer;
}

function checkAnswer() {
    console.log("Output this Question");
    console.log(thisQuestion);
    console.log("Output myAnswer");
    console.log(myAnswer);
    /*
    if (thisQuestion === myAnswer[num]) {
        alert("You got it right");
        score = score + 10;
    } else if (thisQuestion !== myAnswer[num]) {
        alert("You got it wrong");
        countdown = countdown - 10;
    } else {
    }
    */
}

function startCountdown() {
    // Sets Countdown
    var countdownInterval = setInterval(function() {
        if (countdown >= 0) {
            countdownEl.textContent = countdown;
            countdown--;
        } else {
            console.log("countdown < 0");
            clearInterval(countdownInterval);
            gameOver();
        }
    }, 1000);
}

function gameOver() {
    console.log("In Game Over function");
    resultsEl.setAttribute("style", "display: block");
    quizEl.setAttribute("style", "display: none");

    scoreEl.textContent = score;

    //var scoreEl = document.createElement("h1")
    //var formEl = document.createElement("form");
    initialsEl = document.createElement("input");
    var submitBtnEl = document.createElement("input");

    initialsEl.setAttribute("type", "text");
    initialsEl.setAttribute("Initials", "text");
    initialsEl.setAttribute("placeholder", "Your Initials Here");

    submitBtnEl.setAttribute("type", "submit");
    submitBtnEl.setAttribute("value", "Submit");

    myForm.appendChild(initialsEl);
    myForm.appendChild(submitBtnEl);
    //resultsEl.appendChild(scoreEl);

    submitBtnEl.addEventListener("click", submitScore);
}

function submitScore(event) {
    console.log("I'm submitting scores");
    event.preventDefault();
    var thisHighScore = [
        {
            highName: initialsEl.value,
            highScore: score
        }
        ];
    var highScores = [];
    console.log("This high score" + thisHighScore);

    //localStorage.setItem("quiz", JSON.stringify(quiz));

    
    if (localStorage.getItem("highscores") === null) {
        highScores.unshift(thisHighScore);
      } else {
        highScores = JSON.parse(localStorage.getItem("highscores"));
            if (highScores.length > 5) {
                highScores.shift();
                highScores.unshift(thisHighScore);
                //var numbers = [];
                //for (i=0: i < 5; i++) {
                    //numbers.push(highScores[i].highScore);

                    //if (thisHighScore.highScore >= highScores[i].highScore) {
                        //highScores.splice(i, 1);
                        
                    //} else {
                    //}
            } else {
                    highScores.unshift(thisHighScore);
            }
        }
    
      console.log("High scores" + highScores);
      localStorage.setItem("highscores", JSON.stringify(highScores));
      window.open("./high_scores.html");
}

Init();
buttonEl.addEventListener("click", startGame);




/*

    //If answer if correct (compare choice against quiQuestionsObject.answer), incrment i & continue
    
    //If answer is incorrect then decrement time (use a function)

    //If no more questions exist, escape this function

    //If time is up, escape game

*/

    


