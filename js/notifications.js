var playerName = "";
function getPlayerName() {
    swal(
        {   title: "Hello!",
            text: "Tell us yor name:",
            type: "input",
            showCancelButton: false,
            confirmButtonText: "Ok",
            confirmButtonColor: "#DD6B55",
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: "Name" },
        function(inputValue)
        {
            if (inputValue === false)
                return false;
            if (inputValue === "") {
                playerName = "anonymous";
              }
            else {
                playerName = inputValue;
            }
            swal({
                title: "Hello, " + playerName + "!",
                confirmButtonText: "Let's play",
                confirmButtonColor: "#DD6B55",
                closeOnConfirm: true
            }, function (isConfirm) {
                if (isConfirm) {
                    playerModule.setShouldFreeze(false);
                    renderTimer();
                }
            });

            document.getElementById('scroll-link').style.visibility = "hidden";
        });
}

function gameOverNotification() {
    renderGameOverText();
    swal(
        {   title: "Game Over!",
            text: "Next time be faster, " + playerName,
            imageUrl: "../MazeRunner/assets/img/game-over.png" ,
            showCancelButton: true,
            cancelButtonText: "Cancel",
            closeOnCancel: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Play again"
        }, function(isConfirm)
        {
            if(isConfirm) {
                gameEngine.initialize();
                playerModule.setShouldFreeze(false);
                renderTimer();
                gameEngine.run();
            }
            else {
                hideQuestionMode();
            }
        });
}

function youWinNotification() {
    renderYouWinText();
    swal(
        {
            title: "You win!",
            text: "" + playerName  + ", your score is: " + (score - 100),
            imageUrl: "../MazeRunner/assets/img/win.png",
            showCancelButton: true,
            cancelButtonText: "Cancel",
            closeOnCancel: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Play again",
            closeOnConfirm: true
        }, function (isConfirm) {
            if (isConfirm) {
                gameEngine.initialize();
                playerModule.setShouldFreeze(false);
                renderTimer();
                gameEngine.run();
            }
            else {
                hideQuestionMode();
            }
        });
}

function hideQuestionMode() {
    document.getElementById("question-heading").style.visibility = "hidden";
    document.getElementById("question-picture").style.visibility = "hidden";
    document.getElementById("question-text").style.visibility = "hidden";
    document.getElementById("answer-input").style.visibility = "hidden";
    document.getElementById("submitBtn").style.visibility = "hidden";
    document.getElementById("hintBtn").style.visibility = "hidden";
    document.getElementById("result").style.visibility = "hidden";
}