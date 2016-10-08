window.playerModule = (function () {
  var positionX = 65;
  var positionY = 65;

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
    positionX -= 50;
  }

  function moveRight() {
    positionX += 50;
  }

  function moveUp() {
    positionY -= 50;
  }

  function moveDown() {
    positionY += 50;
  }

  function drawPlayer() {
    visualizationModule.renderPlayer(positionX, positionY);
  }

  return {
    assignKeyHandlers: assignKeyHandlers,
    drawPlayer: drawPlayer
  };
})();