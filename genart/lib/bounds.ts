import p5Types from "p5";

export type Bounds = {
  min: number;
  max: number;
};

export const randomBounded = (p5: p5Types, bounds: Bounds) => {
  return p5.random(bounds.min, bounds.max);
};

export const getBoundedBoundsWithRatio = (minBounds: Bounds, maxBounds: Bounds, ratio: number) => {
  const min = minBounds.min + (minBounds.max - minBounds.min) * ratio;
  const max = maxBounds.min + (maxBounds.max - maxBounds.min) * ratio;
  return { min, max } as Bounds;
};
