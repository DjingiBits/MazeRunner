window.visualizationModule = (function () {
  let mazeReady = false;
  let playerReady = false;
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
  let mazeImage = new Image();
  let playerImage = new Image();

  function setMazeImage() {    
    mazeImage.onload = function () {
      mazeReady = true
    }
    mazeImage.src = '../assets/img/maze.gif'
  }

  function renderMaze() {
    mazeModule.drawMaze();
    // if (mazeReady) {
    //   context.drawImage(mazeImage, 0, 0, 800, 800)
    // }
  }

  function setPlayerImage() {
    playerImage.onload = function () {
      playerReady = true;
    }
    playerImage.src = '../assets/img/monster.png'
  }

  function renderPlayer(x, y) {
    if (playerReady) {
      context.drawImage(playerImage, x, y, 25, 25);
    }
  }

  function initImages() {    
    // setMazeImage();
    setPlayerImage();    
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
    renderObstacels: renderObstacles,
    clearMaze: clearMaze
  }
})();