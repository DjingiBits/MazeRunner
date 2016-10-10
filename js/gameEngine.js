let gameEngine = (function () {
    let lastTimeObstaclesSwitched = new Date().getSeconds(),
        visibleIndexes = obstaclesModule.getVisibleObstaclesIndexes(VISIBLE_OBSTACLES_COUNT, TOTAL_OBSTACLES_COUNT);
    let obstacles = obstaclesModule.generateObstacles(TOTAL_OBSTACLES_COUNT, MAZE_START_COORDS, MAZE_END_COORDS);
    let questions = generateQuestions(TOTAL_QUESTIONS_COUNT, MAZE_START_COORDS, MAZE_END_COORDS);

    function run() {
        updateObstacles();
        updateQuestions();

        visualizationModule.clearMaze();

        visualizationModule.renderMaze();
        playerModule.drawPlayer();
        visualizationModule.renderObstacels(obstacles);
        visualizationModule.renderQuestions(questions);
        checkForWinning();
        requestAnimationFrame(run);
    }

    function updateObstacles() {
        let secondsNow = new Date().getSeconds();
        let isSwitchTime =
            secondsNow % INTERVAL_SWITCH_ACTIVE_OBSTACLES === 0 &&
            secondsNow !== lastTimeObstaclesSwitched;
        if (isSwitchTime) {
            // turn off current active obstacles
            switchObstaclesAtIndexes(visibleIndexes);

            visibleIndexes = obstaclesModule
                .getVisibleObstaclesIndexes(VISIBLE_OBSTACLES_COUNT, TOTAL_OBSTACLES_COUNT);

            // turn on current active obstacles
            switchObstaclesAtIndexes(visibleIndexes);

            lastTimeObstaclesSwitched = secondsNow;
        }

        obstacles.forEach(o => o.update());
    }

    function checkForWinning() {
        if (quizModule.getCorrectAnswersCount() >= 5) {
           youWinNotification();
        }
    }

    function checkForWinning() {
        if (quizModule.getCorrectAnswersCount() >= 5) {
            swal(
                {
                    title: "You win!",
                    text: "Your score: " + (score - 100),
                    imageUrl: "../assets/img/congratulations.jpg",
                    showCancelButton: true,
                    cancelButtonText: "Cancel",
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Play again"
                }, function (isConfirm) {
                    if (isConfirm) {
                        location.reload();
                    }
                });

            clearInterval(id);
        }
    }

    function updateQuestions() {
        let indexToRemove = -1;
        for (let i = 0; i < questions.length; i += 1) {
            let currentQuestion = questions[i];
            if (currentQuestion.x + 5 === playerModule.x() && currentQuestion.y + 5 === playerModule.y()) {
                indexToRemove = i;
                break;
            }
        }

        let playerCollidedQuestion = indexToRemove !== -1;
        if (playerCollidedQuestion) {
            questions.splice(indexToRemove, 1);
            playerModule.setShouldFreeze(true);
            quizModule.populateQuestion();
        }
    }

    function switchObstaclesAtIndexes(indexes) {
        indexes.forEach(i => obstacles[i].isVisible = !obstacles[i].isVisible);
    }

    return {
        run: run
    }
})();

$(function () {
    visualizationModule.initImages();
    playerModule.assignKeyHandlers();
    gameEngine.run();
});
