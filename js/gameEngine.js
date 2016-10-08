let gameEngine = (function () {
    let numberOfObstacles = 30,
        numberOfVisibleObstacles = 5,
        intervalObstaclesChange = 6,
        lastTimeObstaclesChanged = new Date().getSeconds(),
        fromWidth = 50,
        toWidth = 700,
        fromHeight = 50,
        toHeight = 700,
        visibleIndexes = getVisibleObstaclesIndexes(numberOfVisibleObstacles, numberOfObstacles);
    let obstacles = generateObstacles(numberOfObstacles, fromWidth, toWidth, fromHeight, toHeight);

    function run() {
        let secondsNow = new Date().getSeconds();
        if (secondsNow % intervalObstaclesChange === 0 &&
            secondsNow !== lastTimeObstaclesChanged) {
            // turn off current active obstacles
            switchObstaclesAtIndexes(visibleIndexes);

            visibleIndexes = getVisibleObstaclesIndexes(numberOfVisibleObstacles, numberOfObstacles);

            // turn on current active obstacles
            switchObstaclesAtIndexes(visibleIndexes);

            lastTimeObstaclesChanged = secondsNow;
        }

        obstacles.forEach(o => o.update());
        visualizationModule.renderMaze();
        playerModule.drawPlayer();
        visualizationModule.renderObstacels(obstacles);
        requestAnimationFrame(run);
    }

    function getVisibleObstaclesIndexes(count, totalObstacles) {
        let indexes = [];
        for (let i = 0; i < count; i += 1) {
            let randomIndex = getRandomNumber(0, totalObstacles - 1);
            indexes.push(randomIndex);
        }

        return indexes;
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
})
