window.visualizationModule = (function () {
  let playerReady = false;
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
  let playerImage = new Image();

  function renderMaze() {
    mazeModule.drawMaze();
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