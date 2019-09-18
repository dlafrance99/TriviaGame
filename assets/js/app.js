//global values
var counter = 10;
var currentQuestion = 0;
var correct = 0;
var wrong = 0;
var timer;

function nextQuestion() {
    var isQuestionOver = (quizQuestions.length - 1) === currentQuestion;
    if (isQuestionOver) {
        gameOver();
    } else {
        currentQuestion++
        loadQuestion();
    }
};

function timeUp() {
    clearInterval(timer);
    wrong++;
    preLoadImg("wrong");
    setTimeout(nextQuestion, 3000);
};


function countdown() {
    counter--;
    $("#time").html("Timer: " + counter);

    if (counter === 0) {
        timeUp();
    }
};

function loadQuestion() {
    counter = 10;

    timer = setInterval(countdown, 1000);


    var question = quizQuestions[currentQuestion].questions;
    var choices = quizQuestions[currentQuestion].choices;

    $("#time").html("Timer: " + counter);

    $("#game").html(`
        <h3>${question}</h3>
        ${loadChoices(choices)}
    `);
}

function loadChoices(choices) {
    var result = "";
    for (var i = 0; i < choices.length; i++) {
        result += `<p class="choice" data-answer=${choices[i]}>${choices[i]}</p>`;
    };

    return result;
}

$(document).on("click", ".choice", function () {
    clearInterval(timer);
    var selectedAnswer = $(this).attr("data-answer");
    var correctAnswer = quizQuestions[currentQuestion].correctAnswer;
    if (selectedAnswer === correctAnswer) {
        correct++
        preLoadImg("win");
        setTimeout(nextQuestion, 3000);
    } else {
        wrong++;
        preLoadImg("wrong");
        setTimeout(nextQuestion, 3000);
    }
})

function gameOver() {
    var result = `
    <p>Correct: ${correct} </p>
    <p>Incorrect: ${wrong} </p>
    <p>Total Questions: ${quizQuestions.length} </p>
    <button id='reset'>Reset Game</button>
    `;

    $("#game").html(result);
};

$(document).on("click", "#reset", function () {
    currentQuestion = 0;
    correct = 0;
    wrong = 0;
    loadQuestion();
});

function preLoadImg(status) {    
    if (status === "win") {
        $("#game").html(`
        <img src="assets/images/Correct.gif"/>
        `);
    } else {
        $("#game").html(`
        <img src="assets/images/Wrong.gif"/>
        `);
    }
};


loadQuestion(); 