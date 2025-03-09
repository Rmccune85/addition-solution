// ───── ByteShifter ─────
// Crafted with 💻 & ☕
// github.com/YourGitHubUsername

let num1, num2, correctAnswer;

// Function to generate a new question
function newQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 + num2;

    // Display the new question
    document.getElementById("question").innerText = `What is ${num1} + ${num2}?`;

    // Clear previous feedback and input
    document.getElementById("feedback").innerText = "";
    document.getElementById("answer").value = "";
}

// Function to check the user's answer
function checkAnswer() {
    let userAnswer = document.getElementById("answer").value;

    // Ensure the input is not empty
    if (userAnswer.trim() === "") {
        document.getElementById("feedback").innerText = "Please enter a number!";
        return;
    }

    // Convert user input to a number and compare
    if (parseInt(userAnswer) === correctAnswer) {
        document.getElementById("feedback").innerText = "Correct!";
    } else {
        document.getElementById("feedback").innerText = "Try again!";
    }
}

// Load the first question on page load
window.onload = newQuestion;
// ───── ByteShifter ─────
// Crafted with 💻 & ☕
// github.com/YourGitHubUsername
