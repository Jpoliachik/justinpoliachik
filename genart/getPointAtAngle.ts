import p5Types from "p5";
import { Point } from "./point";

// all 'angle' values in radians.
export const getPointAtRandomAngle = (p5: p5Types, start: Point, distance: number) => {
  const randomAngle = p5.random(0, p5.TWO_PI);
  return getPointAtAngle(p5, start, randomAngle, distance);
};

export const getPointAtAngle = (p5: p5Types, start: Point, angle: number, distance: number) => {
  const x = distance * p5.cos(angle);
  const y = distance * p5.sin(angle);
  return { x: start.x + x, y: start.y + y } as Point;
};
