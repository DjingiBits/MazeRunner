window.playerModule = (function () {
  var positionX = 65;
  var positionY = 65;
  var speed = 25;

  var playerWidth = 25;
  var playerHeight = 25;

  function assignKeyHandlers() {
    $(document).keydown(function (e) {
      let collisionDetected = false;

      switch (e.which) {
        case 37: // left
          collisionDetected = checkWallHit(positionX, positionY, playerWidth,playerHeight,'left');
          if (!collisionDetected) {
            moveLeft();
          }
          break;

        case 38: // up
          collisionDetected = checkWallHit(positionX, positionY, playerWidth,playerHeight, 'up');
          if (!collisionDetected) {
            moveUp();
          }
          break;

        case 39: // right
          collisionDetected = checkWallHit(positionX, positionY, playerWidth,playerHeight, 'right');
          if (!collisionDetected) {
            moveRight();
          }
          break;

        case 40: // down
          collisionDetected = checkWallHit(positionX, positionY, playerWidth,playerHeight, 'down');
          if (!collisionDetected) {
            moveDown();
          }
          break;

        default:
          return; // exit this handler for other keys
      }

      e.preventDefault(); // prevent the default action (scroll / move caret)
    });
  }

  function moveLeft() {
    positionX -= speed;
  }

  function moveRight() {
    positionX += speed;
  }

  function moveUp() {
    positionY -= speed;
  }

  function moveDown() {
    positionY += speed;
  }

  function drawPlayer() {
    visualizationModule.renderPlayer(positionX, positionY, playerWidth, playerHeight);
  }

  return {
    assignKeyHandlers: assignKeyHandlers,
    drawPlayer: drawPlayer
  };
})();