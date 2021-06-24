var buttonEl = document.getElementById("start");
var countdownEl = document.getElementById("countdown");
var scoreHeadEl = document.getElementById("score");
var messageEl = document.getElementById("message");
var messageWrongEl = document.getElementById("messageWrong");
var mainEl = document.querySelector(".main");
var quizEl = document.querySelector(".quiz");
var resultsEl = document.querySelector("#results");
var formEl = document.querySelector("#myForm");
var scoreEl = document.querySelector("#myScore");
var initialEl;
var quizQuestions = [];
var thisQuestion = [];
var countdown = 50;
var score = 0;
var count = 0;
var countdownInterval;

//Things to load on page open
function Init() {
    quizQuestionsObject = JSON.parse(localStorage.getItem("quiz"));
}

//Function to run when the start button is pushed to commence the game
function startGame() {
    //isWin = false;
    if (count === 10) {
        clearInterval(countdownInterval);
        gameOver();
        return;
    }

    //Only run the first time
    if (count === 0) {
        //Need to hide the main element & show the quiz element
        mainEl.setAttribute("style", "display: none");
        quizEl.setAttribute("style", "display: block");
        startCountdown();
        answerQuestion();
    }
    
    //Come back and run these each time the count increases
    //messageEl.setAttribute("style", "display: none");
    //messageWrongEl.setAttribute("style", "display: none");
    pullQuestion(count);
    displayQuestion();

}

//Pull one question
function pullQuestion(num) {
    thisQuestion = quizQuestionsObject[num];
    return thisQuestion;
}

//Display the question
function displayQuestion() {
    quizEl.innerhtml = "";
    quizEl.textContent = thisQuestion.question;
    for (x=0; x < 4; x++) {
        var lix = document.createElement("li");
        //var buttonx = document.createElement("button");
        lix.textContent = thisQuestion.options[x];
        //lix.appendChild(buttonx);
        lix.setAttribute("style", "background-color: #1bbc9b; padding: 5px; margin: 10px; text-align: center");
        quizEl.appendChild(lix);
    }
}

//Answer the Question
function answerQuestion() {
    quizEl.addEventListener("click", function(event) {
        event.preventDefault();
        var myAnswer = event.target.textContent;

        //Check the answer
        checkAnswer(myAnswer);
    })
}

//Check the Answer
function checkAnswer(myAnswer) {  
    messageEl.setAttribute("style", "display: none");  
    messageWrongEl.setAttribute("style", "display: none");
    if (thisQuestion.answer === myAnswer) {
        score = score + 10;
        scoreHeadEl.innerHTML = 'Score: ' + score;
        messageEl.setAttribute("style", "display: block");
        
        count++;
        startGame();
    } else if (thisQuestion.answer !== myAnswer) {
        //alert("Wrong answer!  Subtracting 5 seconds.  Deducted 5 points.");
        countdown = countdown - 5;
        score = score - 5;
        scoreHeadEl.innerHTML = 'Score: ' + score;
        messageWrongEl.setAttribute("style", "display: block");
    } 
}

function startCountdown() {
    // Sets Countdown
    countdownInterval = setInterval(function() {
        if (countdown >= 0) {
            //countdownEl.textContent = countdown;
            countdownEl.innerHTML = 'Timer: ' + countdown;
            countdown--;
        } else {
            clearInterval(countdownInterval);
            gameOver();
        }
    }, 1000);
}

//When the game ends, this function runs
function gameOver() {
    messageEl.setAttribute("style", "display: none");  
    messageWrongEl.setAttribute("style", "display: none");

    //Hide quiz, display results
    resultsEl.setAttribute("style", "display: block");
    quizEl.setAttribute("style", "display: none");

    //Show final score
    scoreEl.textContent = score;

    //Setup form to take input
    initialsEl = document.createElement("input");
    var submitBtnEl = document.createElement("input");

    initialsEl.setAttribute("type", "text");
    initialsEl.setAttribute("Initials", "text");
    initialsEl.setAttribute("placeholder", "Your Initials Here");

    submitBtnEl.setAttribute("type", "submit");
    submitBtnEl.setAttribute("value", "Submit");
    submitBtnEl.setAttribute("id", "submit");

    myForm.appendChild(initialsEl);
    myForm.appendChild(submitBtnEl);

    //Listen for submit of form
    submitBtnEl.addEventListener("click", submitScore);
}

//Submit the scores and save to local storage
function submitScore(event) {
    event.preventDefault();
    var thisHighScore = 
        {
            highName: initialsEl.value,
            highScore: score
        };
    var highScores = [];
    
    if (localStorage.getItem("scores") === null) {
        highScores.unshift(thisHighScore);
      } else {
        highScores = JSON.parse(localStorage.getItem("scores"));
            if (highScores.length > 4) {
                highScores.shift();
                highScores.unshift(thisHighScore);
            } else {
                    highScores.unshift(thisHighScore);
            }
        }
      localStorage.setItem("scores", JSON.stringify(highScores));
      window.open("./high_scores.html", "_self");
}

//Initialize the program and start the game
Init();
buttonEl.addEventListener("click", startGame);

    


