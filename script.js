var questions = [
    {
        question: "What is the baby of a Moth known as?",
        choices: ["baby", "infant", "kit", "larva"],
        correctAnswer: 3,
    },
    {
        question: "What is the adult of a kid called?",
        choices: ["calf", "doe", "goat", "chick"],
        correctAnswer: 2,
    },
    {
        question: "What is the young of Bufallo called?",
        choices: ["calf", "baby", "pup", "cow"],
        correctAnswer: 0,
    },
    {
        question: "What a baby Aligator called?",
        choices: ["baby", "gator", "hatchling", "calf"],
        correctAnswer: 2,
    },
    {
        question: "What is a baby Goose called?",
        choices: ["gooser", "gosling", "gup", "pup"],
        correctAnswer: 1,
    },
    {
        question: "What is a baby Hamster called?",
        choices: ["pup", "chick", "infant", "billy"],
        correctAnswer: 0,
    },
    {
        question: "What is a baby Hawk called?",
        choices: ["hawklett", "pup", "larva", "eyas"],
        correctAnswer: 3,
    },
    {
        question: "What is a baby grasshopper called?",
        choices: ["hopper", "nymph", "stick", "pup"],
        correctAnswer: 1,
    },
    {
        question: "What is a baby Kangaroo called?",
        choices: ["kinga", "joey", "calf", "baby"],
        correctAnswer: 1,
    },
    {
        question: "What is a baby Whale called?",
        choices: ["whala", "cub", "grub", "infant"],
        correctAnswer: 1,
    },
    {
        question: "What is a baby Monkey called?",
        choices: ["infant", "baby", "calf", "pup"],
        correctAnswer: 0,
    },
    {
        question: "What is a baby Bear Called?",
        choices: ["cub", "baby balu", "young bear", "bearlet"],
        correctAnswer: 0,
    }
];

$(document).ready(function () {
    $(".choiceList").on("click", "li", function() {
        var ul = $(this).parent(".choiceList");
        ul.children("li").removeClass("selected");
        $(this).addClass("selected");
    });
});

var numberQuestions = 1;
var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {
    displayNumberQuestions();
    displayCurrentQuestion();

    $(this).find(".quizMessage").hide();
    $(this).find(".nextButton").on("click", function () {
        
        if (!quizOver) {
            value = $(".selected").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++;
                numberQuestions++;

                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                    displayNumberQuestions();
                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                };
            };

        } else {
            quizOver = false;

            $(document).find(".nextButton").text("Next Question");

            resetQuiz();
            displayCurrentQuestion();
            displayNumberQuestions();
            hideScore();
        };
    });
});

function displayNumberQuestions() {
    var numQuestions = numberQuestions;
    var numQuestion = $(document).find(".number_questions");

    $(numQuestion).text(numQuestions + " - " + questions.length);
    $(numQuestion).show();
}

function displayCurrentQuestion() {

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    $(questionClass).text(question);

    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li value=' + i + '>' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    numberQuestions = 1;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " of " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}