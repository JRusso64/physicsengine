var sketch = function (p) {
    var fps = 60;
    var dt = 1 / fps;
    var frameStart = 0;
    var accumulator = 0;
    var bodies = [];
    var gravity = new Vector(0, 100);
    function testScene() {
        var width = p.width;
        var heigh = p.height;
        var random = p.random;
    }
    p.setup = function () {
        p.createCanvas(600, 600);
    };
    p.draw = function () {
        var currentTime = p.millis() / 1000;
        accumulator += currentTime - frameStart;
        frameStart = currentTime;
        while (accumulator > dt) {
            UpdatePhysics();
            accumulator -= dt;
        }
        RenderGame();
    };
    function UpdatePhysics() {
    }
    function RenderGame() {
        p.background(0);
        p.fill(255);
        p.rect(100, 100, 50, 50);
    }
};
new p5(sketch);
//# sourceMappingURL=sketch.js.map