function Obstacle(x, y) {
    this.switchInterval = 2;
    this.width = 20;
    this.height = 50;
    this.color = "red";
    this.lineCap = "square";
    this.x = x;
    this.y = y;
    this.isVisible = false;
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
        if (!this.isVisible) {
            return;
        }

        context.fillStyle = this.color;
        context.lineCap = this.lineCap;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}