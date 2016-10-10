var countdownTracker = document.getElementById("countdown-counter");
var newElement = document.createElement("h2");
newElement.innerHTML = "Score: 1000";
newElement.style.background="black";
newElement.style.color="white";
newElement.style.padding="20px";
newElement.style.textAlign = "center";
var id;
  let  questionContainer = document.getElementById('questions-container');
  let formGroup =  document.getElementsByClassName('form-group');
  let submitButton =  document.getElementById('submitBtn');

countdownTracker.parentNode.replaceChild(newElement, countdownTracker);

id = setInterval(function() {
    score--;
    if(score < 0) {
        newElement.parentNode.replaceChild(countdownTracker, newElement);
        clearInterval(id);
        gameOverNotification();

    } else {
        newElement.innerHTML = "Score: " + score.toString();
    }
}, 550);
