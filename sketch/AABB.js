"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AABBvsAABB(a, b) {
    if (a.max.y < b.min.x || a.min.x > b.max.x)
        return false;
    if (a.max.y < b.min.y || a.min.y > b.max.y)
        return false;
}
;
//# sourceMappingURL=AABB.js.map