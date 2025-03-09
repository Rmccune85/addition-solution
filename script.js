document.addEventListener("DOMContentLoaded", function () {
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
        let userAnswer = document.getElementById("answer").value.trim();
        let feedback = document.getElementById("feedback");

        if (userAnswer === "") {
            feedback.innerText = "Please enter a number!";
            return;
        }

        if (parseInt(userAnswer) === correctAnswer) {
            feedback.innerText = "Correct!";
        } else {
            feedback.innerText = "Try again!";
        }
    }

    // Attach event listeners
    document.getElementById("submit").addEventListener("click", checkAnswer);
    document.getElementById("newQuestion").addEventListener("click", newQuestion);

    // Load first question
    newQuestion();
});
// ───── ByteShifter ─────
// Crafted with 💻 & ☕
// github.com/YourGitHubUsername
