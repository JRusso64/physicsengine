import { Vector } from './vector';

export interface Shape{
  draw(): void
  isInside(point: Vector): boolean
}

export class AABB implements Shape {
  size: Vector;
  mass: number;

  constructor(size: Vector, mass: number){
    this.mass = mass;
    //default size 20 20 if no vector passed in
    this.size = size || new Vector(20, 20);
  };

  isInside(point: Vector){
    return false;
  }

  draw(){}
}

export class Circle implements Shape {
  size: Vector;
  mass: number;
  radius: number;

  constructor(size: Vector, mass: number, radius: number){
    this.mass = mass;
    this.radius = radius;
    //default size 20 20 if no vector passed in
    this.size = size || new Vector(20, 20);
  };

  isInside(point: Vector){
    return false;
  }

  draw(){}
}
