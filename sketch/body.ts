import { Vector } from './vector'
import { Shape } from './shape'

export class Body{
  position: Vector
  velocity: Vector
  force: Vector

  shape: Shape

  mass: number = 0

  constructor(shape: Shape, density?: number){
    this.position = new Vector();
    this.velocity = new Vector();
    this.force = new Vector();

    this.shape = shape;
  }

  applyForce(force: Vector){
    this.force = this.force.add(force);
  }


}
