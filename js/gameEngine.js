let gameEngine = (function () {

  function run() {
    visualizationModule.renderMaze()
    requestAnimationFrame(run)
  }

  return {
    run: run
  }
})();

$(function () { 
  visualizationModule.setMaze() 
  gameEngine.run();
})
