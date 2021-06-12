var buttonEl = document.getElementById("start");
var countdownEl = document.getElementById("countdown");
var mainEl = document.querySelector(".main")
var quizEl = document.querySelector(".quiz")
var quizQuestions = [];
var thisQuestion = [];
var myAnswer="";


//Things to load on page open
function Init() {
    quizQuestionsObject = JSON.parse(localStorage.getItem("quiz"));
    console.log(quizQuestionsObject);
}

//Function to fun when the start button is pushed to commence the game
function startGame() {
    var count = 0;
    //Need to hide the main element & show the quiz element
    mainEl.setAttribute("style", "display: none");
    quizEl.setAttribute("style", "display: block");

    //Need to request first question/answer from quiz objects function & increment each time 
    pullQuestion(count);
    displayQuestion(count);
    answerQuestion();
    checkAnswer();
}

function pullQuestion(num) {
    //Put this in another function
    thisQuestion = quizQuestionsObject[num];
    console.log("This Question: ");
    console.log(thisQuestion);
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

function checkAnswer () {
    console.log("Output thisQuestion");
    console.log(thisQuestion);
    console.log("Output myAnswer");
    console.log(myAnswer);

    if (thisQuestion === myAnswer) {
        alert("You got it right");
    } else if (thisQuestion !== myAnswer) {
        alert("You got it wrong");
        //reduce timer
    } else {
        return
    }
}

    //function setOpacity(event) {
//
  //  }
    
    //Don't need anymore.  Added 'for' loop above
    //var li2 = document.createElement("li");
    //var li3 = document.createElement("li");
    //var li4 = document.createElement("li");
    //console.log(thisQuestion.options[0]);
    //li2.textContent = thisQuestion.options[1];
    //li3.textContent = thisQuestion.options[2];
    //li4.textContent = thisQuestion.options[3];
    //quizEl.appendChild(li2);
    //quizEl.appendChild(li3);
    //quizEl.appendChild(li4);


    //start time

    //If answer if correct (compare choice against quiQuestionsObject.answer), incrment i & continue
    
    //If answer is incorrect then decrement time (use a function)

    //If no more questions exist, escape this function

    //If time is up, escape game



/*
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }
  */

    
Init();
buttonEl.addEventListener("click", startGame);

