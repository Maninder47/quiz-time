const quizData = [
    {
        question: "What is the sum of 130+125+191?",
        a: "335",
        b: "456",
        c: "446",
        d: "426",
        correct: "c",
    },
    {
        question: "If we minus 712 from 1500, how much do we get?",
        a: "788",
        b: "777",
        c: "768",
        d: "758",
        correct: "a",
    },
    {
        question: "50 times of 8 is equal to:",
        a: "80",
        b: "400",
        c: "800",
        d: "4000",
        correct: "b",
    },
    {
        question: "110 divided by 10 is:",
        a: "11",
        b: "10",
        c: "5",
        d: "none of these",
        correct: "a",
    },
    {
        question: "20+(90÷2) is equal to:",
        a: "50",
        b: "55",
        c: "65",
        d: "60",
        correct: "c",
    }
];

const quiz = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultDisplay = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    quiz.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
        <label><input type="radio" name="answer" value="a"> ${currentQuestion.a}</label><br>
        <label><input type="radio" name="answer" value="b"> ${currentQuestion.b}</label><br>
        <label><input type="radio" name="answer" value="c"> ${currentQuestion.c}</label><br>
        <label><input type="radio" name="answer" value="d"> ${currentQuestion.d}</label><br>
    `;
}

function getSelectedAnswer() {
    const answers = document.querySelectorAll('input[name="answer"]');
    for (const answer of answers) {
        if (answer.checked) {
            return answer.value;
        }
    }
    return null;
}

function submitQuiz() {
    const answer = getSelectedAnswer();
    if (answer) {
        if (answer === quizData[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        alert("Please select an answer!");
    }
}

function showResult() {
    quiz.innerHTML = "";
    resultDisplay.innerHTML = `You scored ${score} out of ${quizData.length}`;
}

submitButton.addEventListener("click", submitQuiz);
loadQuestion();