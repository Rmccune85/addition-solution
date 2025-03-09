// ───── ByteShifter ─────
// Crafted with 💻 & ☕
// github.com/YourGitHubUsername

document.addEventListener("DOMContentLoaded", function () {
    let num1, num2, correctAnswer, operator, level = 1, score = 0, streak = 0;
    const scoreDisplay = document.getElementById("score");
    const streakDisplay = document.getElementById("streak");
    const levelDisplay = document.getElementById("level");

    function newQuestion() {
        let min = 1, max = 5;

        if (level === 2) max = 10; // Medium difficulty
        if (level === 3) max = 25; // Hard difficulty

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
            startConfetti(); // 🎉 Massive Confetti Explosion!

            setTimeout(() => {
                stopConfetti();
                levelUp();
                newQuestion();
            }, 2000);
        } else {
            feedback.innerText = "Try again!";
            streak = 0;
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
        if (score >= 25 && level === 1) level = 2;
        if (score >= 50 && level === 2) level = 3;
    }

    function startConfetti() {
        const confettiContainer = document.createElement("div");
        confettiContainer.classList.add("confetti-container");
        document.body.appendChild(confettiContainer);

        for (let i = 0; i < 200; i++) {  // LOTS of confetti! 🎉
            let piece = document.createElement("div");
            piece.classList.add("confetti");
            confettiContainer.appendChild(piece);
            piece.style.left = `${Math.random() * 100}vw`;
            piece.style.animationDelay = `${Math.random()}s`;
            piece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
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
