function getRandomCoordinateValue(min, max) {
    let cellSize = 50;
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    let fullCellReminder = number % cellSize;
    number += (cellSize - fullCellReminder);

    return number;
}

function getRandomNumber(min, max) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min;

    return number;
}