function generateObstacles(number, fromWidth, toWidth, fromHeight, toHeight) {
    let obstacles = [];

    obstacles.push(new Obstacle())

    for (let index = 0; index < number; index += 1) {
        let x = getRandomCoordinateValue(fromWidth, toWidth) - 10,
            y = getRandomCoordinateValue(fromWidth, toWidth) - 10;

        let currentObstacle = new Obstacle(x, y);
        obstacles.push(currentObstacle);
    }

    return obstacles;
}