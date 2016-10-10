window.visualizationModule = (function () {
  let playerReady = false;
  let questionReady = false;
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
  let playerImage = new Image();
  let questionImage = new Image();

  function renderMaze() {
    mazeModule.drawMaze();
  }

  function setPlayerImage() {
    playerImage.onload = function () {
      playerReady = true;
    }
    playerImage.src = '../MazeRunner/assets/img/monster.png'
  }

  function setQuestionImage() {
    questionImage.onload = function () {
      questionReady = true;
    }
    questionImage.src = '../MazeRunner/assets/img/diamond.png'
  }

  function renderPlayer(x, y, width, height) {
    if (playerReady) {
      context.drawImage(playerImage, x, y, width, height);
    }
  }

  function renderQuestions (questions) {
    if (questionReady) {
      for (let question of questions) {
        context.drawImage(questionImage, question.x, question.y, 30, 30);
      }
    }
  }

  function initImages() {
    setPlayerImage();
    setQuestionImage();
  }

  function renderObstacles(obstacles) {
    obstacles.forEach(o => o.render(context));
  }

  function clearMaze () {
    context.clearRect(0, 0, 800, 800);
  }

  return {
    initImages: initImages,
    renderMaze: renderMaze,
    renderPlayer: renderPlayer,
    renderQuestions: renderQuestions,
    renderObstacels: renderObstacles,
    clearMaze: clearMaze,
    context: context
  }
})();