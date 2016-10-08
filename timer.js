var countdownTracker = document.getElementById("countdown-counter");
var newElement = document.createElement("h2");
newElement.innerHTML = "Score: 1000";

var id;

countdownTracker.parentNode.replaceChild(newElement, countdownTracker);

id = setInterval(function() {
    score--;
    if(score < 0) {
        newElement.parentNode.replaceChild(countdownTracker, newElement);
        clearInterval(id);
    } else {
        newElement.innerHTML = "Score: " + score.toString();
    }
}, 450);

