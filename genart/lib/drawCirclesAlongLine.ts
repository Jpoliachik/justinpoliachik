import p5Types from "p5";
import { Bounds, randomBounded } from "./bounds";
import { getPointAtRandomAngle, getPointAtAngle } from "./getPointAtAngle";
import { Point } from "./point";

export const drawCirclesAlongLine = (
  p5,
  args: {
    line: { start: Point; angle: number; length: number };
    count: number;
    sizeBounds: Bounds;
    locationBounds: Bounds;
    fillColor: p5Types.Color;
    stayOnLine?: boolean;
  }
) => {
  const { line, count, sizeBounds, locationBounds, stayOnLine, fillColor } = args;
  p5.noStroke();
  p5.fill(fillColor);

  const spacePerItem = line.length / count;

  for (let i = 0; i < count - 1; i++) {
    const center = getPointAtAngle(p5, line.start, line.angle, spacePerItem * i);
    let circleLocation: Point = center;

    if (stayOnLine) {
      // if stayOnLine, calculate location offset along same line
      const locationOffset = (locationBounds.max - locationBounds.min) / 2 - randomBounded(p5, locationBounds);
      circleLocation = getPointAtAngle(p5, center, line.angle, locationOffset);
    } else {
      // if not stayOnLine, calculate location offset as random point at any angle from center point
      const locationOffset = randomBounded(p5, locationBounds);
      circleLocation = getPointAtRandomAngle(p5, center, locationOffset);
    }

    const circleSize = randomBounded(p5, sizeBounds);

    p5.circle(circleLocation.x, circleLocation.y, circleSize);
  }
};
