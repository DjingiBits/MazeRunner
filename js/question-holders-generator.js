function generateQuestions(count, fromCoords, toCoords) {
    let questions = [],
        positionOffset = 40;

    for (let index = 0; index < count; index += 1) {
        let x, y;
        let questionCoordsOverlapExistingOne = false,
            questionOverHeroInitCoords = false;
        do {
            x = getRandomCoordinateValue(fromCoords, toCoords) - positionOffset;
            y = getRandomCoordinateValue(fromCoords, toCoords) - positionOffset;

            questionCoordsOverlapExistingOne = questions.some(q => q.x === x && q.y === y);

            questionOverHeroInitCoords = x === HERO_DEFAULT_X && y === HERO_DEFAULT_Y;
        } while (questionCoordsOverlapExistingOne || questionOverHeroInitCoords);

        let currentQuestionHolder = {x: x, y: y};
        questions.push(currentQuestionHolder);
    }

    return questions;
}