"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vector_1 = require("./vector");
var Body = (function () {
    function Body(shape, density) {
        this.mass = 0;
        this.position = new vector_1.Vector();
        this.velocity = new vector_1.Vector();
        this.force = new vector_1.Vector();
        this.shape = shape;
    }
    Body.prototype.applyForce = function (force) {
        this.force = this.force.add(force);
    };
    return Body;
}());
exports.Body = Body;
//# sourceMappingURL=body.js.map