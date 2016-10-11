function renderTimer() {
    var countdownTracker = document.getElementById("countdown-counter");
var newElement = document.createElement("h2");
newElement.innerHTML = "Score: 1000";
newElement.style.background="black";
newElement.style.color="white";
newElement.style.padding="20px";
newElement.style.textAlign = "center";
var id;

    countdownTracker.parentNode.replaceChild(newElement, countdownTracker);

    id = setInterval(function () {
        score--;
        if (score < 0) {
            newElement.parentNode.replaceChild(countdownTracker, newElement);
            clearInterval(id);
            gameOverNotification();
        } else {
            newElement.innerHTML = "Score: " + score.toString();
            if(score <=10){
                newElement.style.color="#d43030";
                score.style.color="#d43030";
            }
        }
    }, 550);
}
function renderGameOverText() {
    var countdownTracker = document.getElementById("countdown-counter");
    var gameOverElement = document.createElement("h2");
    gameOverElement.innerHTML = "Game Over";
    gameOverElement.style.background="black";
    gameOverElement.style.color="white";
    gameOverElement.style.padding="20px";
    gameOverElement.style.textAlign = "center";
    countdownTracker.parentNode.replaceChild(gameOverElement, countdownTracker);
}