let questionsDataBase=[{
    question: 'Who invented Ferrari??',
    correctAnswer: 'Enzo Ferrari',
    number: 0
},

    {
        question:'What is the largest number of five digits?',
        correctAnswer: '99999',
        number: 1
    },

    {
        question: 'In computing what is Ram short for?',
        correctAnswer: 'Random Access Memory',
        number: 2
    },

    {
        question: 'Which South American country is named after Venice?',
        correctAnswer: 'Venezuela',
        number: 3
    },

    {
        question: 'What is both a French wine region and a luxury American automobile?',
        correctAnswer: 'Cadillac',
        number: 4
    }];


//Referencing
let questionTitle = document.getElementById('question-text'),
    answer = document.getElementById('answer-input').value.toString().toLowerCase().trim(),
    submitButton = document.getElementById('submitBtn'),
    hintButton = document.getElementById('hintBtn'),
    dbLength= questionsDataBase.length;


//Rand number generator
function getRandomIndex(){
    rndIndex = Math.floor((Math.random() * dbLength - 1)+1);
    i = rndIndex;
    return rndIndex;
}

var currIndex = 0;

//Rand question generator
function getRandomQuestion() {
    let questionId = getRandomIndex();
    currIndex = questionId;
    return questionsDataBase [questionId];
}


//Populate current question
function populateQuestion(){
    let currentQuestion = getRandomQuestion();
    questionTitle.innerText = currentQuestion.question;
}


//Check answer
function checkAnswer(){

    let correctAnswer = questionsDataBase[currIndex].correctAnswer,
        populateResult = document.getElementById("result");

    if (answer !== correctAnswer.toLowerCase().trim()) {
        populateResult.innerText = "Your answer is correct!";
        score += 100;

    } else {
        populateResult.innerText = "Your answer is incorrect!";
        score -= 30;
    }
}

function answerPenalty(){
    let correctAnswer = questionsDataBase[currIndex].correctAnswer,
        populatePenaltyResult = document.getElementById("result");
    score -= 300;
    populatePenaltyResult.innerText = correctAnswer;
}


window.onload = function () {
    populateQuestion();
};

submitButton.onclick = function () {
    checkAnswer();
};

hintButton.onclick = function () {
    answerPenalty();
};


