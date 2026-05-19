// Sample database holding the actual paper questions
const database = {
    fon: [
        {
            question: "Which of the following is considered the primary focus of nursing care?",
            options: ["The disease process", "The patient's holistic response to health", "Hospital administrative rules", "Diagnostic laboratory testing"],
            correct: 1 // Remember: 0 is the first option, 1 is the second option
        },
        {
            question: "What is the primary purpose of changing a patient's position every two hours?",
            options: ["To keep the patient awake", "To prevent pressure ulcers", "To measure fluid output", "To streamline nursing shifts"],
            correct: 1
        }
    ],
    anatomy: [
        {
            question: "Which organ is primarily responsible for filtering metabolic waste from the blood?",
            options: ["Liver", "Heart", "Kidney", "Lungs"],
            correct: 2
        },
        {
            question: "What is the largest bone in the human body?",
            options: ["Humerus", "Femur", "Tibia", "Fibula"],
            correct: 1
        }
    ]
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let canAnswer = true;

function startQuiz(subject) {
    currentQuestions = database[subject];
    currentQuestionIndex = 0;
    score = 0;
    
    document.getElementById("subject-title").innerText = subject.toUpperCase() + " Past Paper";
    document.getElementById("home-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    
    loadQuestion();
}

function loadQuestion() {
    canAnswer = true;
    const currentQuestion = currentQuestions[currentQuestionIndex];
    
    // Update question progress tracker
    document.getElementById("progress").innerText = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
    document.getElementById("question-text").innerText = currentQuestion.question;
    
    // Clear old options and inject new interactive ones
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";
    
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "option-btn";
        button.innerText = option;
        button.onclick = () => selectOption(index, button);
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedIndex, selectedButton) {
    if (!canAnswer) return; // Freeze clicks until next question loads
    canAnswer = false;
    
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const options = document.getElementsByClassName("option-btn");
    
    if (selectedIndex === currentQuestion.correct) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("wrong");
        // Highlight the correct option so the student learns
        options[currentQuestion.correct].classList.add("correct");
    }
    
    // Wait 1.5 seconds so the student can review their answer before moving on
    setTimeout(() => {
        nextQuestion();
    }, 1500);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");
    document.getElementById("final-score").innerText = `${score} / ${currentQuestions.length}`;
}

function showHomeScreen() {
    document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("home-screen").classList.remove("hidden");
}