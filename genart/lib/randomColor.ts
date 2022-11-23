import p5Types from "p5";
import { Bounds } from "./bounds";

export const randomColor = (
  p5: p5Types,
  bounds: { hue: Bounds; sat: Bounds; light: Bounds } = {
    hue: { min: 0, max: 100 },
    sat: { min: 0, max: 100 },
    light: { min: 0, max: 100 },
  }
) => {
  const hue = p5.random(bounds.hue.min, bounds.hue.max);
  const sat = p5.random(bounds.sat.min, bounds.sat.max);
  const light = p5.random(bounds.light.min, bounds.light.max);

  p5.colorMode(p5.HSL, 100);
  return p5.color(hue, sat, light);
};
