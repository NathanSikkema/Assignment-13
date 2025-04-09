// Author............ : Nathan Sikkema, Divine Imodunbi, Souvanno Souvannasane
// Student Number.... : 000911571, 
// Program........... : Software Development
// Course............ : Software Development Tools
// Type.............. : HMTL
// Start Date........ : April 09, 2025
// End Date.......... : April 09, 2025

let difficulty = "easy"
let currentQuestion;
let questions = [];
let answers = [];
let answer;
let questionIndex = 0;
let correct = 0;
let incorrect = 0;
let score = 0;

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

function generateQuestion(difficulty){
    questions = []
    answers = []
    let upper;
    let lower;
    while (questions.length < 10) {

        switch (difficulty){
            case "easy":
                upper = 50;
                lower = -50;
                break;
            case "medium":
                upper = 1000;
                lower = -1000;
                
                break;
                case "hard":
                    upper = 10000;
                    lower = -10000;
                break;
        }
        
        operator = randomChoice(['+','-','*','/']);
        operand1 = Math.floor(Math.random() * (upper-lower)) + lower;
        operand2 = Math.floor(Math.random() * (upper-lower)) + lower;
        questions.push(`${operand1} ${operator} ${operand2}`);
    }
    answers = calculateAnswers(questions);
}

function calculateAnswers(questions) {
    const answers = [];
    for (let i = 0; i < questions.length; i++){
        ans = Math.round(eval(questions[i]) * 100) / 100
        answers.push(ans)
    }
    return answers;
}

function setDifficulty(dif){
    difficulty = dif;
    startQuiz();
}

function startQuiz(){
    resetData()
    generateQuestion(difficulty);
    showQuestion(questionIndex);
    document.getElementById("setDifficulty").hidden = true;
    document.getElementById("quiz").hidden = false;
    document.getElementById('end').hidden = true;

     
}

function nextQuestion(){
    
    answer = document.getElementById("answer").value;
    if (answer == answers[questionIndex]){
        console.log("correct");
        correct++;
    } 
    else {
        console.log("incorrecT");
        incorrect++;
    }
    score = correct

    document.getElementById("correct").innerText = `Correct: ${correct}`; 
    document.getElementById("incorrect").innerText = `Incorrect: ${incorrect}`; 
    document.getElementById("score").innerText = `Score: ${score} / 10`; 


    questionIndex++;
    if (questionIndex <10){
        showQuestion(questionIndex)
        
    } else {
        document.getElementById("quiz").hidden = true;
        document.getElementById('end').hidden = false;
        document.getElementById('finalScore').innerText = correct
    }
    // Update the stats
    // generate new question
    // clear input
    // 
}

function reset(){
    document.getElementById("setDifficulty").hidden = false;   
    document.getElementById("quiz").hidden = true;
    document.getElementById('end').hidden = true;
    
}

function resetData(){
    questions = []
    answers = []
    correct = 0;
    incorrect = 0;
    score = 0;
    questionIndex = 0;

    document.getElementById("correct").innerText = `Correct: ${correct}`; 
    document.getElementById("incorrect").innerText = `Incorrect: ${incorrect}`; 
    document.getElementById("score").innerText = `Score: ${score} / 10`;
}

function showQuestion(index) {
    currentQuestion = questions[index];
    document.getElementById('question').textContent = `${questions[index]}`;
    document.getElementById("answer").value = ""; 
}