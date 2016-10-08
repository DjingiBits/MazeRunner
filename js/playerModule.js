window.playerModule = (function () {
  var positionX = 42;
  var positionY = 42;

  function assignKeyHandlers() {
    $(document).keydown(function (e) {
      switch (e.which) {
        case 37: // left
          moveLeft();
          break;

        case 38: // up
          moveUp();
          break;

        case 39: // right
          moveRight();
          break;

        case 40: // down
          moveDown();
          break;

        default: return; // exit this handler for other keys
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
    });
  }


  function checkWallHit() {

  }

  function moveLeft() {
    console.log('left')
  }

  function moveRight() {
    console.log('right')
  }

  function moveUp() {
    console.log('up')
  }

  function moveDown() {
    console.log('down')
  }

  function drawPlayer() {
    visualizationModule.renderPlayer(positionX, positionY);
  }

  return {
    assignKeyHandlers: assignKeyHandlers,
    drawPlayer: drawPlayer
  };
})();