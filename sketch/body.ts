import { Vector } from './vector'

export class Body{
  position: Vector
  velocity: Vector
  force: Vector

  shape: Shape

  mass: number = 0
}
