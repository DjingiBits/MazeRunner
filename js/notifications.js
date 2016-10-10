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
                inputValue = "anonymous";
              }
            swal({
                title: "Hello, " + inputValue + "!",
                confirmButtonText: "Let's play",
                confirmButtonColor: "#DD6B55"
            });
        });

}

function gameOverNotification() {
    swal(
        {   title: "Game Over!",
            text: "Next time be faster",
            imageUrl: "../MazeRunner/assets/img/game-over.png" ,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Play again"
        }, function(isConfirm)
        {
            if(isConfirm) {
                location.reload();
            }
        });
    var audioLoss = new Audio('../MazeRunner/assets/win.mp3');
    audioLoss.play();
}
function youWinNotification() {
    swal(
        {
            title: "You win!",
            text: "Your score: " + (score - 100),
            imageUrl: "../MazeRunner/assets/img/congratulations.jpg",
            showCancelButton: true,
            cancelButtonText: "Cancel",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Play again"
        }, function (isConfirm) {
            if (isConfirm) {
                location.reload();
            }
        });
    var audioWin = new Audio('../MazeRunner/assets/win.mp3');
    audioWin.play();

    clearInterval(id);
}