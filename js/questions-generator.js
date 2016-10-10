function generateQuestions(number, fromWidth, toWidth) {
  let questions = [];

  for (let index = 0; index < number; index += 1) {
    let x, y;
    
    while (true) {
      x = getRandomCoordinateValue(fromWidth, toWidth) - 40,
      y = getRandomCoordinateValue(fromWidth, toWidth) - 40;

      if (!questions.some(q => q.x === x && q.y === y)) {
        break;
      }
    }

    let currentQuestion = { x: x, y: y };
    questions.push(currentQuestion);
  }

  return questions;
}