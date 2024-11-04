document.addEventListener("DOMContentLoaded", () => {
  const toggleCheckbox = document.getElementById("question-type-toggle");
  const radioAnswers = document.querySelectorAll(".radio-answer");
  const checkboxAnswers = document.querySelectorAll(".checkbox-answer");
  const timerElement = document.getElementById("timer");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const responseForm = document.getElementById("response-form");
  const submitButton = responseForm.querySelector("button[type='submit']");
  const questionNumberDisplay = document.getElementById("question-number");

  const questions = [
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
    { type: "multiple" },
    { type: "single" },
  ];

  let currentQuestionIndex = 0;
  let timerInterval;
  let timeLeft = 90; // 1.5 minutes in seconds

  // Function to toggle between multiple choice and multiple select
  function toggleQuestionType() {
    const isMultipleSelect = toggleCheckbox.checked;

    // Reset and hide/show radio and checkbox inputs
    radioAnswers.forEach((radio) => {
      radio.style.display = isMultipleSelect ? "none" : "inline-block";
      radio.checked = false;
    });

    checkboxAnswers.forEach((checkbox) => {
      checkbox.style.display = isMultipleSelect ? "inline-block" : "none";
      checkbox.checked = false;
    });
  }

  // Timer function
  function startTimer() {
    timeLeft = 90;
    timerElement.textContent = "Time left: 1:30";

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timeLeft--;
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timerElement.textContent = `Time left: ${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds}`;

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerElement.textContent = "Time's up!";
      }
    }, 1000);
  }

  // Load question function
  function loadQuestion(index) {
    const questionObj = questions[index];
    toggleCheckbox.checked = questionObj.type === "multiple";
    toggleQuestionType();
    startTimer();

    // Update button states
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === questions.length - 1;

    // Update question number display
    questionNumberDisplay.textContent = `Question ${index + 1} of ${
      questions.length
    }`;
  }

  // Navigation functions
  function prevQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      loadQuestion(currentQuestionIndex);
    }
  }

  function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      loadQuestion(currentQuestionIndex);
    }
  }

  // Event listeners for buttons
  prevBtn.addEventListener("click", prevQuestion);
  nextBtn.addEventListener("click", nextQuestion);

  // Event listener for the toggle switch
  toggleCheckbox.addEventListener("change", toggleQuestionType);

  // Initial setup
  loadQuestion(currentQuestionIndex);

  // Handle form submission
  responseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Disable the submit button to prevent multiple submissions
    submitButton.disabled = true;

    const name = document.getElementById("student-name").value;
    const answer = toggleCheckbox.checked
      ? Array.from(checkboxAnswers)
          .filter((cb) => cb.checked)
          .map((cb) => cb.value)
      : document.querySelector('input[name="answer"]:checked')?.value || "";

    // Prepare data to send
    const formData = new FormData();
    formData.append("name", name);
    formData.append("answers", JSON.stringify(answer));
    formData.append("currentQuestionIndex", `${currentQuestionIndex + 1}`);

    // Send data to Google Apps Script
    fetch(
      "https://script.google.com/macros/s/AKfycbxQQzw2QJIXRPLlSuHBU_SbcpJmFlIvKvB-lxWO46ppLQYVx4eV3m4B4LZFTPTYPNux/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          alert("Response submitted successfully!");
          responseForm.reset();
          currentQuestionIndex = 0; // Reset to the first question
          loadQuestion(currentQuestionIndex); // Load the first question again
        } else {
          alert("There was a problem submitting your response.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error submitting response.");
      })
      .finally(() => {
        submitButton.disabled = false;
      });
  });
});
