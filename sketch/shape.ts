import { Vector } from './vector';

export interface Shape{
  type: number

  draw(): void
  isInside(point: Vector): boolean
}

export class AABB implements Shape {
  size: Vector
  mass: number

  constructor(size: Vector, mass: number){
    this.mass = mass;
    //default size 20 20 if no vector passed in
    this.size = size || new Vector(20, 20);
  }
  
  function isInside(point: Vector){
    return False;
  }

  function draw(){}
}

