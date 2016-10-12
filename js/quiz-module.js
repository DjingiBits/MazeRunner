window.quizModule = (function () {
    let questionsDataBase = [
        new Question('Who invented Ferrari??', 'Enzo Ferrari', 0),
        new Question('What is the largest number of five digits?', '99999', 1),
        new Question('In computing what is Ram short for?', 'Random Access Memory', 2),
        new Question('Which South American country is named after Venice?', 'Venezuela', 3),
        new Question('What is both a French wine region and a luxury American automobile?', 'Cadillac', 4),
        new Question('Which is the financial centre and main city of Switzerland?', 'Zurich',5),
        new Question('What is the third major Balearic Island with Majorca and Minorca?', 'Ibiza',6),
        new Question('The llama belongs to the family of animals commonly called what? ', 'Camels',7),
        new Question('Which US state is named on the label of a Jack Daniels bottle? ', 'Tennessee',8),
        new Question("Which magical character emerged from Aladdin's lamp?", 'Genie', 9 ),
        new Question('What is the capital city of Croatia?', 'Zagreb',10),
        new Question('If there are three apples and you took two away, how many do you have? (the answer is a digit)', '2',11),
        new Question('Arabic numerals originated in which country?', 'India',12),
        new Question('What kind of fish do grizzly bears like the most?', 'salmon',13),
        new Question('What is the name of the pig character on the Looney Tunes logo?', 'Porky',14)
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
        currentQuestionIndex = questionId;
        return questionsDataBase[questionId];
    }

    //Populate current question
    function populateQuestion() {
        let currentQuestion = getRandomQuestion();
        questionContent.innerText = currentQuestion.content;
        document.getElementById("question-picture")
            .style.backgroundImage = `url("assets/img/${currentQuestion.number}.jpg`;
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

        submitButton.style.visibility = "hidden";
        hintButton.style.visibility = "hidden";

        let d0 = document.getElementById('d0'),
            d1 = document.getElementById('d1'),
            d2 = document.getElementById('d2'),
            d3 = document.getElementById('d3'),
            d4 = document.getElementById('d4');

        if (answer === correctAnswer.toLowerCase().trim()) {
            populateResult.innerText = "Your answer is correct!";
            populateResult.style.color="#A5DC86";
            score += 100;
            correctAnswersCount += 1;

            switch(correctAnswersCount){
                case 1:
                    d0.style.color = '#6495ED';
                    break;
                case 2:
                    d1.style.color = '#6495ED';
                    break;
                case 3:
                    d2.style.color = '#6495ED';
                    break;
                case 4:
                    d3.style.color = '#6495ED';
                    break;
                case 5:
                    d4.style.color = '#6495ED';
                    break;
            }

            questionsDataBase.splice(currentQuestionIndex, 1); // deleting answered question

            playerModule.setShouldFreeze(false);
        } else {
            populateResult.innerText = "Your answer is incorrect!";
            populateResult.style.color="#f06e57";
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

    $(document).keypress(function(e) {
        if(e.which == 13) {
            checkAnswer();
        }
    });

    hintButton.onclick = function () {
        answerPenalty();
    };

    return {
        populateQuestion: populateQuestion,
        getCorrectAnswersCount: getCorrectAnswersCount,
        resetCorrectAnswers: function() { correctAnswersCount = 0; }
    }
})();