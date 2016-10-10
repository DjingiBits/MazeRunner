window.quizModule = (function () {
    let questionsDataBase = [
        new Question('Who invented Ferrari??', 'Enzo Ferrari', 0),
        new Question('What is the largest number of five digits?', '99999', 1),
        new Question('In computing what is Ram short for?', 'Random Access Memory', 2),
        new Question('Which South American country is named after Venice?', 'Venezuela', 3),
        new Question('What is both a French wine region and a luxury American automobile?', 'Cadillac', 4)
    ];    

    //Referencing
    let questionContent = document.getElementById('question-text'),
        submitButton = document.getElementById('submitBtn'),
        hintButton = document.getElementById('hintBtn'),
        populateResult = document.getElementById("result"),
        inputTextBox = document.getElementById('answer-input');

    var correctAnswersCount = 0;
    var currentQuestionIndex = 0;

    //Rand question generator
    function getRandomQuestion() {
        let questionId = getRandomNumber(0, questionsDataBase.length - 1);
        document.getElementById("question-picture").style.backgroundImage = `url("assets/img/${questionId}.jpg`;
        currentQuestionIndex = questionId;
        return questionsDataBase[questionId];
    }

    //Populate current question
    function populateQuestion() {
        let currentQuestion = getRandomQuestion();
        questionContent.innerText = currentQuestion.content;
        submitButton.style.visibility = "visible";
        hintButton.style.visibility = "visible";
        populateResult.innerText = "";
        inputTextBox.value = "";
        inputTextBox.style.visibility = "visible";
    }

    //Check answer
    function checkAnswer() {
        let gameIsOver = score <= 0;
        if (gameIsOver) {
            submitButton.style.visibility = "hidden";
            playerModule.setShouldFreeze(true);
            return;
        }

        let correctAnswer = questionsDataBase[currentQuestionIndex].answer,
            answer = inputTextBox.value.toString().toLowerCase().trim();

        if (answer === correctAnswer.toLowerCase().trim()) {
            populateResult.innerText = "Your answer is correct!";
            score += 100;

            correctAnswersCount += 1;
            questionsDataBase.splice(currentQuestionIndex, 1); // deleting asnwered question
            submitButton.style.visibility = "hidden";
            hintButton.style.visibility = "hidden";

            playerModule.setShouldFreeze(false);
        } else {
            populateResult.innerText = "Your answer is incorrect!";
            score -= 30;
            setTimeout(populateQuestion, 2000);
        }
    }

    function answerPenalty() {
        let correctAnswer = questionsDataBase[currentQuestionIndex].answer,
            populatePenaltyResult = document.getElementById("result");
        score -= 300;
        populatePenaltyResult.innerText = correctAnswer;
        hintButton.style.visibility = "hidden";
    }

    function getCorrectAnswersCount() {
        return correctAnswersCount;
    }


    window.onload = function () {
        submitButton.style.visibility = "hidden";
        hintButton.style.visibility = "hidden";
        inputTextBox.style.visibility = "hidden";
    };

    submitButton.onclick = function () {
        checkAnswer();
    };

    hintButton.onclick = function () {
        answerPenalty();
    };

    return {
        populateQuestion: populateQuestion,
        getCorrectAnswersCount: getCorrectAnswersCount
    }
})();