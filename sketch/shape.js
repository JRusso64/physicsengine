"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vector_1 = require("./vector");
var AABB = (function () {
    function AABB(size, mass) {
        this.mass = mass;
        this.size = size || new vector_1.Vector(20, 20);
    }
    ;
    AABB.prototype.isInside = function (point) {
        return false;
    };
    AABB.prototype.draw = function () { };
    return AABB;
}());
exports.AABB = AABB;
var Circle = (function () {
    function Circle(size, mass, radius) {
        this.mass = mass;
        this.radius = radius;
        this.size = size || new vector_1.Vector(20, 20);
    }
    ;
    Circle.prototype.isInside = function (point) {
        return false;
    };
    Circle.prototype.draw = function () { };
    return Circle;
}());
exports.Circle = Circle;
//# sourceMappingURL=shape.js.map