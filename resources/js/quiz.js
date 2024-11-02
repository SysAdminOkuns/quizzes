// Data structure for questions
const quizData = [
    {
        question: "What is the capital of France?",
        type: "multiple-choice",
        options: ["A. Berlin", "B. Madrid", "C. Paris", "D. Rome"],
        correctAnswer: "C"
    },
    {
        question: "Select the colors in the French flag:",
        type: "multiple-select",
        options: ["A. Blue", "B. Green", "C. Red", "D. White"],
        correctAnswer: ["A", "C", "D"]
    }
];

// JavaScript for Pagination and Timer
const questionsContainer = document.getElementById('questions-container');
let currentQuestionIndex = 0;
const totalQuestions = quizData.length;
const timePerQuestion = 90; // 1.5 minutes in seconds

// Function to render the question
function renderQuestion(index) {
    const questionData = quizData[index];
    questionsContainer.innerHTML = ''; // Clear previous content

    // Create question text
    const questionElement = document.createElement('p');
    questionElement.textContent = `${index + 1}. ${questionData.question}`;
    questionsContainer.appendChild(questionElement);

    // Create options
    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('options');

    if (questionData.type === 'multiple-choice') {
        questionData.options.forEach((option, i) => {
            const optionElement = document.createElement('div');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `q${index + 1}`;
            input.value = String.fromCharCode(65 + i); // A, B, C, D

            optionElement.appendChild(input);
            optionElement.appendChild(document.createTextNode(` ${option}`));
            optionsContainer.appendChild(optionElement);
        });
    } else if (questionData.type === 'multiple-select') {
        questionData.options.forEach((option, i) => {
            const optionElement = document.createElement('div');
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.name = `q${index + 1}`;
            input.value = String.fromCharCode(65 + i); // A, B, C, D

            optionElement.appendChild(input);
            optionElement.appendChild(document.createTextNode(` ${option}`));
            optionsContainer.appendChild(optionElement);
        });
    }

    questionsContainer.appendChild(optionsContainer);

    // Timer element
    const timerElement = document.createElement('div');
    timerElement.classList.add('timer');
    timerElement.id = `timer-${index + 1}`;
    questionsContainer.appendChild(timerElement);

    // Correct answer element
    const answerElement = document.createElement('div');
    answerElement.classList.add('correct-answer');
    answerElement.id = `answer-${index + 1}`;
    answerElement.style.display = 'none';

    // Format the correct answer display based on the type
    if (questionData.type === 'multiple-choice') {
        answerElement.textContent = `Correct Answer: ${questionData.correctAnswer}`;
    } else if (questionData.type === 'multiple-select') {
        answerElement.textContent = `Correct Answer: ${questionData.correctAnswer.join(', ')}`;
    }

    questionsContainer.appendChild(answerElement);

    // Start the timer
    startTimer(index);
}

// Timer function
function startTimer(index) {
    const timerElement = document.getElementById(`timer-${index + 1}`);
    const answerElement = document.getElementById(`answer-${index + 1}`);
    let timeLeft = timePerQuestion;

    // Clear any existing timers
    clearInterval(timerElement.timer);

    // Update the timer every second
    timerElement.timer = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `Time left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerElement.timer);
            timerElement.textContent = "Time's up!";
            // Reveal the correct answer
            answerElement.style.display = 'block';
        }
    }, 1000);
}

// Event listeners for pagination buttons
document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion(currentQuestionIndex);
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        renderQuestion(currentQuestionIndex);
    }
});

// Initialize the first question
renderQuestion(currentQuestionIndex);
