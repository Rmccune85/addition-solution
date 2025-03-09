// ───── ByteShifter ─────
// Crafted with 💻 & ☕
// github.com/YourGitHubUsername

document.addEventListener("DOMContentLoaded", function () {
    let num1, num2, correctAnswer, operator;

    function newQuestion() {
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        
        // Randomly choose an operator
        const operators = ["+", "-", "×", "÷"];
        operator = operators[Math.floor(Math.random() * operators.length)];

        // Calculate the correct answer
        switch (operator) {
            case "+":
                correctAnswer = num1 + num2;
                break;
            case "-":
                correctAnswer = num1 - num2;
                break;
            case "×":
                correctAnswer = num1 * num2;
                break;
            case "÷":
                num1 = num1 * num2; // Ensure num1 is a multiple of num2 for clean division
                correctAnswer = num1 / num2;
                break;
        }

        document.getElementById("num1").innerText = num1;
        document.getElementById("operator").innerText = operator;
        document.getElementById("num2").innerText = num2;
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

        if (parseFloat(userAnswer) === correctAnswer) {
            feedback.innerText = "Correct!";
        } else {
            feedback.innerText = "Try again!";
        }
    }

    // Attach event listeners
    document.getElementById("submit").addEventListener("click", checkAnswer);
    document.getElementById("newQuestion").addEventListener("click", newQuestion);

    // Enable Enter key to trigger submit
    document.getElementById("answer").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            checkAnswer();
        }
    });

    newQuestion();
});
