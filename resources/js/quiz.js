// Questions Data Structure
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: ["Paris"],
        type: "single" // "single" for single choice, "multiple" for multiple select
    },
    {
        question: "Which of these are programming languages?",
        options: ["HTML", "Python", "CSS", "JavaScript"],
        answer: ["Python", "JavaScript"],
        type: "multiple"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: ["Mars"],
        type: "single"
    },
    {
        question: "Select the primary colors.",
        options: ["Red", "Green", "Blue", "Yellow"],
        answer: ["Red", "Blue", "Yellow"],
        type: "multiple"
    }
];

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle the questions and options
shuffleArray(questions);
questions.forEach(question => shuffleArray(question.options));

// Variables for quiz functionality
let currentQuestionIndex = 0;
let timerInterval;
const questionsContainer = document.getElementById("questions-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const revealBtn = document.getElementById("reveal-btn"); // Button for manual reveal

// Function to load a question
function loadQuestion(index) {
    const questionObj = questions[index];
    questionsContainer.innerHTML = "";

    // Display question number
    const questionNumber = document.createElement("p");
    questionNumber.textContent = `Question ${index + 1} of ${questions.length}`;
    questionNumber.classList.add("question-number");
    questionsContainer.appendChild(questionNumber);

    // Display question text
    const questionText = document.createElement("p");
    questionText.textContent = questionObj.question;
    questionsContainer.appendChild(questionText);

    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("options");

    questionObj.options.forEach((option, i) => {
        const optionDiv = document.createElement("div");
        const optionInput = document.createElement("input");
        optionInput.type = questionObj.type === "multiple" ? "checkbox" : "radio";
        optionInput.name = "option";
        optionInput.value = option;
        optionInput.id = `option-${index}-${i}`;

        const optionLabel = document.createElement("label");
        optionLabel.htmlFor = optionInput.id;
        optionLabel.textContent = option;

        optionDiv.appendChild(optionInput);
        optionDiv.appendChild(optionLabel);
        optionsContainer.appendChild(optionDiv);
    });

    questionsContainer.appendChild(optionsContainer);
    displayTimer();
    revealBtn.style.display = "block"; // Show the reveal button
}

// Function to display the timer
function displayTimer() {
    const timerElement = document.createElement("div");
    timerElement.classList.add("timer");
    timerElement.textContent = "Time left: 1:30";

    let timeLeft = 90; // 1.5 minutes in seconds
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `Time left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            revealAnswer(); // Reveal answer when time elapses
        }
    }, 1000);

    questionsContainer.appendChild(timerElement);
}

// Function to reveal the correct answer
function revealAnswer() {
    const questionObj = questions[currentQuestionIndex];
    const correctAnswerElement = document.createElement("div");
    correctAnswerElement.classList.add("correct-answer");

    if (questionObj.type === "multiple") {
        correctAnswerElement.textContent = `Correct answers: ${questionObj.answer.join(", ")}`;
    } else {
        correctAnswerElement.textContent = `Correct answer: ${questionObj.answer[0]}`;
    }

    questionsContainer.appendChild(correctAnswerElement);
    revealBtn.style.display = "none"; // Hide reveal button after showing answer
}

// Add functionality to the manual reveal button
revealBtn.addEventListener("click", () => {
    clearInterval(timerInterval); // Stop the timer
    revealAnswer(); // Reveal the answer
});

// Navigation button functionality
prevBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
        nextBtn.disabled = false;
    }
    if (currentQuestionIndex === 0) {
        prevBtn.disabled = true;
    }
});

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
        prevBtn.disabled = false;
    }
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.disabled = true;
    }
});

// Initial load
loadQuestion(currentQuestionIndex);
