function generateQuestions(number, fromWidth, toWidth, fromHeight, toHeight) {
  let questions = [];

  for (let index = 0; index < number; index += 1) {
    let x = getRandomCoordinateValue(fromWidth, toWidth) + 10,
      y = getRandomCoordinateValue(fromWidth, toWidth) + 10;

    let currentQuestion = { x: x, y: y };
    questions.push(currentQuestion);
  }

  return questions;
}