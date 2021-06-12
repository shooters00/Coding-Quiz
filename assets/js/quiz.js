var quiz = [
    {
        question: "1. Inside which HTML element do we put the JavaScript?",
        options: ["A. <js>", "B. <script>", "C. <javascript>", "D. <scripting>"],
        answer: "B. <script>"
    },
    {
        question: "2. Which of the following is an object?",
        options: ["A. favorites = []", "B. favorites()", "C. favorites = {}", "D. favorities.object"],
        answer: "C. favorites = {}"
    },
    {
        question: "3. Choose a possible output from the following command? Math.random() * 100",
        options: ["A. 12.35176206518014", "B. 56", "C. 3.2", "D. 100"],
        answer:  "12.35176206518014"
    },
    {
        question: "4. How do you define variables in JavaScript?",
        options: ["A. const myVar", "B. var myVar", "C. let myVar", "D. All of the above"],
        answer:  "All of the above"
    },
    {
        question:"5. What does console.log(\"Hello World\") do”?",
        options: ["A. Prints Hello World to the webpage","B. Prints Hello World to the console","C. stores Hello World on local storage","D. Uses a logarithm to rearrange the letters in Hello World"],
        answer: "Prints Hello World to the console"
    },
    {
        question:"6. Which command results in removing the first value from an array?",
        options: ["A. push","B. slice","C. unshift","D. pop"],
        answer: "pop"
    },
    {
        question:"7. Which is item not a primitive?",
        options: ["A. boolean","B. NaN","C. string","D. array"],
        answer: "NaN"
    },
    {
        question:"8. How do you reference a method?",
        options: ["A. #method","B. method()","C. .method","D. method[]"],
        answer: ".method"
    },
    {
        question:"9. Which command is used to send a notification to the screen without user input?",
        options: ["A. window.alert","B. window.confirm","C. prompt","D. confirm"],
        answer: "window.alert"
    },
    {
        question:"10. What is my favorite javascript command”?",
        options: ["A. document.querySelector","B. Math.random","C. parseINT","D. JSON.stringify"],
        answer: "JSON.stringify"
    }
  ];

  localStorage.setItem("quiz", JSON.stringify(quiz));
