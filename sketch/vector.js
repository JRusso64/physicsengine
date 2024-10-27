"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector = (function () {
    function Vector(x, y) {
        x = (x == undefined) ? 0 : x;
        y = (y == undefined) ? 0 : y;
        this.x = x;
        this.y = y;
    }
    Vector.prototype.add = function (force) {
        return new Vector(this.x + force.x, this.y + force.y);
    };
    return Vector;
}());
exports.Vector = Vector;
//# sourceMappingURL=vector.js.map