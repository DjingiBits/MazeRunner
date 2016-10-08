let gameEngine = (function () {
  let numberOfObstacles = 30,
      fromWidth = 50,
      toWidth = 700,
      fromHeight = 50,
      toHeight = 700;
  let obstacles = generateObstacles(numberOfObstacles, fromWidth, toWidth, fromHeight, toHeight);

  function run() {
    obstacles.forEach(o => o.update());
    visualizationModule.renderMaze()
    visualizationModule.renderObstacels(obstacles)
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
