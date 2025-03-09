// ───── ByteShifter ─────
// Crafted with 💻 & ☕
// github.com/YourGitHubUsername

document.addEventListener("DOMContentLoaded", function () {
    let num1, num2, correctAnswer, operator, level = 1, score = 0, streak = 0;
    const scoreDisplay = document.getElementById("score");
    const streakDisplay = document.getElementById("streak");
    const levelDisplay = document.getElementById("level");

    function newQuestion() {
        let min = 1, max = 10;

        if (level === 2) max = 20; // Medium difficulty
        if (level === 3) max = 50; // Hard difficulty

        num1 = Math.floor(Math.random() * max) + min;
        num2 = Math.floor(Math.random() * max) + min;

        let operators = level === 1 ? ["+", "-"] : level === 2 ? ["+", "-", "×"] : ["÷"];
        operator = operators[Math.floor(Math.random() * operators.length)];

        // Ensure division results in whole numbers
        if (operator === "÷") {
            num1 = num1 * num2;
            correctAnswer = num1 / num2;
        } else if (operator === "+") {
            correctAnswer = num1 + num2;
        } else if (operator === "-") {
            correctAnswer = num1 - num2;
        } else if (operator === "×") {
            correctAnswer = num1 * num2;
        }

        document.getElementById("num1").innerText = num1;
        document.getElementById("operator").innerText = operator;
        document.getElementById("num2").innerText = num2;
        document.getElementById("feedback").innerText = "";
        document.getElementById("answer").value = "";
        document.getElementById("answer").focus();
    }

    function checkAnswer() {
        let userAnswer = document.getElementById("answer").value.trim();
        let feedback = document.getElementById("feedback");

        if (userAnswer === "") {
            feedback.innerText = "Please enter a number!";
            return;
        }

        if (parseFloat(userAnswer) === correctAnswer) {
            score += 10;
            streak++;
            feedback.innerText = getEncouragement();
            backgroundFlash("green");
            startConfetti();

            if (streak % 5 === 0) startFireworks();

            setTimeout(() => {
                stopConfetti();
                stopFireworks();
                levelUp();
                newQuestion();
            }, 2000);
        } else {
            feedback.innerText = "Try again!";
            streak = 0;
            backgroundFlash("red");
        }

        scoreDisplay.innerText = `Score: ${score}`;
        streakDisplay.innerText = `Streak: ${streak}`;
        levelDisplay.innerText = `Level: ${level}`;
    }

    function getEncouragement() {
        const messages = ["Great job! 🎯", "Awesome! 🔥", "Keep going! 🚀", "You're a math genius! 🏆", "Perfect! 💯"];
        return messages[Math.floor(Math.random() * messages.length)];
    }

    function levelUp() {
        if (score >= 50 && level === 1) level = 2;
        if (score >= 100 && level === 2) level = 3;
    }

    function backgroundFlash(color) {
        document.body.style.backgroundColor = color;
        setTimeout(() => document.body.style.backgroundColor = "#f4f4f4", 500);
    }

    function startFireworks() {
        const fireworks = document.createElement("div");
        fireworks.classList.add("fireworks-container");
        document.body.appendChild(fireworks);

        for (let i = 0; i < 10; i++) {
            let firework = document.createElement("div");
            firework.classList.add("firework");
            fireworks.appendChild(firework);
            firework.style.left = `${Math.random() * 100}vw`;
            firework.style.top = `${Math.random() * 100}vh`;
        }

        setTimeout(() => stopFireworks(), 2000);
    }

    function stopFireworks() {
        let fireworks = document.querySelector(".fireworks-container");
        if (fireworks) fireworks.remove();
    }

    function startConfetti() {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti-container");
        document.body.appendChild(confetti);

        for (let i = 0; i < 50; i++) {
            let piece = document.createElement("div");
            piece.classList.add("confetti");
            confetti.appendChild(piece);
            piece.style.left = `${Math.random() * 100}vw`;
            piece.style.animationDelay = `${Math.random()}s`;
        }
    }

    function stopConfetti() {
        let confetti = document.querySelector(".confetti-container");
        if (confetti) confetti.remove();
    }

    document.getElementById("submit").addEventListener("click", checkAnswer);
    document.getElementById("newQuestion").addEventListener("click", newQuestion);

    document.getElementById("answer").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            checkAnswer();
        }
    });

    newQuestion();
});
