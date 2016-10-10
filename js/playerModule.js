window.playerModule = (function () {
  let positionX = 65;
  let positionY = 65;
  let speed = 25;
  let shouldFreeze = false;

  let playerWidth = 25;
  let playerHeight = 25;

  function assignKeyHandlers() {
    $(document).keydown(function (e) {
      if (shouldFreeze || score <= 0) {
        return;
      }

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
    drawPlayer: drawPlayer,
    x: function() { return positionX; },
    y: function() { return positionY; },
    setShouldFreeze: function(value) { shouldFreeze = value; }  };
})();