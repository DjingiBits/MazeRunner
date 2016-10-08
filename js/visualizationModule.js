window.visualizationModule = (function () {
  let bgReady = false
  let canvas
  let context
  let mazeImage

  function setMaze() {
    canvas = document.getElementById('canvas')
    context = canvas.getContext('2d')
    mazeImage = new Image()
    mazeImage.onload = function () {
      bgReady = true
    }
    mazeImage.src = '../MazeRunner/assets/img/maze.gif'
  }

  function renderMaze() { 
    if (bgReady) {
      context.drawImage(mazeImage, 0, 0, 800, 800)
    }
  }

  function renderObstacles(obstacles) {
    obstacles.forEach(o => o.render(context));
  }

  return {
    renderMaze: renderMaze,
    setMaze: setMaze,
    renderObstacels: renderObstacles
  }
})();