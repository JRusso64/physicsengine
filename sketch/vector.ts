export class Vector{
  x: number
  y: number

  constructor(x?: number, y?: number){
    x = (x == undefined) ? 0 : x;
    y = (y == undefined) ? 0 : y;


    this.x = x;
    this.y = y;

  }
}
