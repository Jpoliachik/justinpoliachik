import { SketchPageContainer } from "../../components/SketchPageContainer";
import p5Types from "p5";
import { getBoundedBoundsWithRatio } from "../../genart/bounds";
import { drawCirclesAlongLine } from "../../genart/drawCirclesAlongLine";
import { randomColor } from "../../genart/randomColor";

const draw = (p5: p5Types, size: { width: number; height: number }) => {
  const margin = -100;

  const drawCloud = (args: { y: number; lightFactor: number; hue: number }) => {
    const lightBounds = getBoundedBoundsWithRatio({ min: 20, max: 90 }, { min: 70, max: 98 }, args.lightFactor);
    const cloudColor = randomColor(p5, {
      hue: { min: args.hue - 5, max: args.hue + 5 },
      sat: { min: 20, max: 60 },
      light: lightBounds,
    });

    const line = { start: { x: margin, y: args.y }, angle: 0, length: size.width - margin * 2 };

    drawCirclesAlongLine(p5, {
      line,
      count: p5.random(8, 15),
      sizeBounds: { min: 120, max: 300 },
      locationBounds: { min: 0, max: 80 },
      stayOnLine: false,
      fillColor: cloudColor,
    });

    p5.rect(0, args.y, size.width, size.height - args.y);
  };

  const hue = p5.random(5, 95);
  const layers = Math.floor(p5.random(6, 10));

  const ySpace = size.height - margin * 2;
  let yCursor = margin;
  while (yCursor < size.height - margin) {
    const lightFactor = (ySpace - yCursor) / ySpace;
    drawCloud({ y: yCursor, lightFactor: lightFactor, hue });
    yCursor = yCursor + ySpace / layers;
  }

  p5.noLoop();
};

export default () => {
  return <SketchPageContainer draw={draw} title={"clouds"} dateText={"2022-06-26"} />;
};
