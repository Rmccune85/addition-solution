document.addEventListener("DOMContentLoaded", function () {
    let num1, num2, correctAnswer;

    function newQuestion() {
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        correctAnswer = num1 + num2;

        // Ensure elements exist before modifying them
        let questionElement = document.getElementById("question");
        let feedbackElement = document.getElementById("feedback");
        let answerElement = document.getElementById("answer");

        if (questionElement) questionElement.innerText = `What is ${num1} + ${num2}?`;
        if (feedbackElement) feedbackElement.innerText = "";
        if (answerElement) answerElement.value = "";
    }

    function checkAnswer() {
        let answerElement = document.getElementById("answer");
        let feedbackElement = document.getElementById("feedback");

        if (!answerElement || !feedbackElement) return; // Prevent errors if elements are missing

        let userAnswer = answerElement.value.trim();
        if (userAnswer === "") {
            feedbackElement.innerText = "Please enter a number!";
            return;
        }

        if (parseInt(userAnswer) === correctAnswer) {
            feedbackElement.innerText = "Correct!";
        } else {
            feedbackElement.innerText = "Try again!";
        }
    }

    // Attach functions to global scope
    window.newQuestion = newQuestion;
    window.checkAnswer = checkAnswer;

    // Load the first question
    newQuestion();
});

// ───── ByteShifter ─────
// Crafted with 💻 & ☕
// github.com/YourGitHubUsername
