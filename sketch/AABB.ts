import { Vector } from './vector';

type AABB = {
  max: Vector;
  min: Vector;
};


function AABBvsAABB(a: AABB, b: AABB){
  if(a.max.y < b.min.x || a.min.x > b.max.x) return false;
  if(a.max.y < b.min.y || a.min.y > b.max.y) return false;
};
