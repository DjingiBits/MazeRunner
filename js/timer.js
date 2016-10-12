function renderTimer() {
    var countdownTracker = document.getElementById("countdown-counter");
    countdownTracker.style.color = "white";
    var id;

    id = setInterval(function () {
        if (score < 0) {
            clearInterval(id);
            gameOverNotification();
        } else {
            countdownTracker.innerHTML = "Score: " + score;
            if (score <= 10) {
                countdownTracker.style.color = "#d43030";
            }
        }
        if(quizModule.getCorrectAnswersCount() >= 5){
            clearInterval(id);
            youWinNotification();
        }
        score--;
    }, 550);
}

function renderGameOverText() {
    var countdownTracker = document.getElementById("countdown-counter");
    countdownTracker.innerHTML = "Game Over";
}
function renderYouWinText() {
    var countdownTracker = document.getElementById("countdown-counter");
    countdownTracker.innerHTML = "You won";
}