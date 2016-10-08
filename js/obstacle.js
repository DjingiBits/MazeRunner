function Obstacle(x, y) {
    this.switchInterval = 2;
    this.width = 5;
    this.height = Math.round(800 / 22);
    this.color = "red";
    this.x = x;
    this.y = y;
    this.lastSwitchSec = new Date().getSeconds();
    this.update = function () {
        let secondsNow = new Date().getSeconds();
        let shouldSwitch = secondsNow % this.switchInterval === 0;
        if (shouldSwitch && secondsNow !== this.lastSwitchSec) {
            let oldWidth = this.width;

            this.width = this.height;
            this.height = oldWidth;

            this.lastSwitchSec = secondsNow;
        }

    };

    this.render = function (context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}