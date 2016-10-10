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
        swal(
            {   title: "Game Over!",
                text: "Next time be faster",
                imageUrl: "../assets/img/game-over.png" ,
                showCancelButton: true,
                cancelButtonText: "Cancel",
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Play again"
            }, function(isConfirm)
            {
                if(isConfirm) {
                   location.reload();
                }
            });

    } else {
        newElement.innerHTML = "Score: " + score.toString();
    }
}, 550);
