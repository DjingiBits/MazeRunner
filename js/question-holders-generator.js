function generateQuestions(count, fromCoords, toCoords) {
    let questions = [],
        positionOffset = 40;

    for (let index = 0; index < count; index += 1) {
        let x, y;
        let questionCoordsOverlapExistingOne = false;

        do {
            x = getRandomCoordinateValue(fromCoords, toCoords) - positionOffset;
            y = getRandomCoordinateValue(fromCoords, toCoords) - positionOffset;

            questionCoordsOverlapExistingOne = questions.some(q => q.x === x && q.y === y);
        } while (questionCoordsOverlapExistingOne);

        let currentQuestionHolder = {x: x, y: y};
        questions.push(currentQuestionHolder);
    }

    return questions;
}