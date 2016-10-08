function generateObstacles(number, fromWidth, toWidth, fromHeight, toHeight) {
    let obstacles = [];

    obstacles.push(new Obstacle())

    for (let index = 0; index < number; index += 1) {
        let x = getRandomNumber(fromWidth, toWidth),
            y = getRandomNumber(fromWidth, toWidth);

        let currentObstacle = new Obstacle(x, y);
        obstacles.push(currentObstacle);
    }

    return obstacles;

    function getRandomNumber(min, max) {
        let cellSize = Math.round(800 / 22);
        let number = Math.floor(Math.random() * (max - min + 1)) + min;
        let fullCellReminder = number % cellSize;
        number += (cellSize - fullCellReminder);

        return number;
    }
}