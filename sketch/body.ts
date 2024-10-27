import { Vector } from './vector.ts'

export class Body{
  position: Vector
  velocity: Vector
  force: Vector

  shape: Shape

  mass: number = 0
}
