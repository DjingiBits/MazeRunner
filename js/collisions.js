function checkWallHit(x, y, width, height, direction) {

    let offset = 7,
        heroLeft = x - offset,
        heroRight = x + width + offset,
        heroTop = y - offset,
        heroBottom = y + height + offset,
        middleX = Math.floor(x + width / 2),
        middleY = Math.floor(y + height / 2);

    let context = visualizationModule.context;

    let middleTop = context.getImageData(middleX, heroTop, 1, 1).data,
        middleRight = context.getImageData(heroRight, middleY, 1, 1).data,
        middleBottom = context.getImageData(middleX, heroBottom, 1, 1).data,
        middleLeft = context.getImageData(heroLeft, middleY, 1, 1).data;

    let noObstacle = 0;
    let pixelIsBlack = false;

    switch (direction) {
        case 'left':
            pixelIsBlack = middleLeft[3] !== noObstacle;
            break;
        case 'right':
            pixelIsBlack = middleRight[3] !== noObstacle;
            break;
        case 'up':
            pixelIsBlack = middleTop[3] !== noObstacle;
            break;
        case 'down':
            pixelIsBlack = middleBottom[3] !== noObstacle;
            break;
        default:
            throw new Error('Invalid direction');
    }

    return pixelIsBlack;
}