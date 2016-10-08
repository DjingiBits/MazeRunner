function generateObstacles(number, fromWidth, toWidth, fromHeight, toHeight) {
    let obstacles = [];

    obstacles.push(new Obstacle())

    for (let index = 0; index < number; index += 1) {
        let x = getRandomCoordinateValue(fromWidth, toWidth),
            y = getRandomCoordinateValue(fromWidth, toWidth);

        x = x > 800 / 2 ? x + 6 : x;
        y = y > 800 / 2 ? y + 6 : y;

        let currentObstacle = new Obstacle(x, y);
        obstacles.push(currentObstacle);
    }

    return obstacles;
}