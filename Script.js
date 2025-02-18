let num1, num2, correctAnswer;

function newQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 + num2;
    document.getElementById("question").innerText = `What is ${num1} + ${num2}?`;
    document.getElementById("feedback").innerText = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    let userAnswer = document.getElementById("answer").value;
    if (parseInt(userAnswer) === correctAnswer) {
        document.getElementById("feedback").innerText = "Correct!";
    } else {
        document.getElementById("feedback").innerText = "Try again!";
    }
}

// Load first question
newQuestion();
