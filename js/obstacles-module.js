window.obstaclesModule = (function () {

    function generateObstacles(number, fromWidth, toWidth) {
        let obstacles = [],
            positionOffset = 10;

        obstacles.push(new Obstacle());

        for (let index = 0; index < number; index += 1) {
            let x = getRandomCoordinateValue(fromWidth, toWidth) - positionOffset,
                y = getRandomCoordinateValue(fromWidth, toWidth) - positionOffset;

            let currentObstacle = new Obstacle(x, y);
            obstacles.push(currentObstacle);
        }

        return obstacles;
    }

    function getVisibleObstaclesIndexes(count, totalObstacles) {
        let indexes = [];
        for (let i = 0; i < count; i += 1) {
            let randomIndex = getRandomNumber(0, totalObstacles - 1);
            indexes.push(randomIndex);
        }

        return indexes;
    }

    return {
        generateObstacles: generateObstacles,
        getVisibleObstaclesIndexes: getVisibleObstaclesIndexes
    }
})();

