import { Vector } from './vector.ts';

type AABB {
  max: Vector;
  min: Vector;
};


function AABBvsAABB(a: AABB, b: AABB){
  if(a.max.y < b.min.x or a.min.x > b.max.x) return false;
  if(a.max.y < b.min.y or a.min.y > b.max.y) return false;
};
