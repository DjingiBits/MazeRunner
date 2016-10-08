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
    mazeImage.src = '../assets/img/maze.gif'
  }

  function renderMaze() { 
    if (bgReady) {
      context.drawImage(mazeImage, 0, 0, 800, 800)
    }
  }

  return {
    renderMaze: renderMaze,
    setMaze: setMaze
  }
})();