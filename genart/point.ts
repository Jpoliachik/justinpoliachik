export type Point = {
  x: number;
  y: number;
};

export const addPoints = (a: Point, b: Point) => {
  return { x: a.x + b.x, y: a.y + b.y };
};

export const subtractPoints = (a: Point, b: Point) => {
  return { x: a.x - b.x, y: a.y - b.y };
};
