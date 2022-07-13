import { SketchPageContainer } from "../../components/SketchPageContainer";
import p5Types from "p5";
import { getBoundedBoundsWithRatio } from "../../genart/bounds";
import { randomColor } from "../../genart/randomColor";
import { getPointAtRandomAngle } from "../../genart/getPointAtAngle";

const draw = (p5: p5Types, size: { width: number; height: number }) => {
  const margin = 100;
  const crustWidth = 25;
  const toppingSizeBounds = [30, 80];

  const centerPoint = { x: size.width / 2, y: size.height / 2 };

  p5.noStroke();

  // crust
  p5.fill(randomColor(p5));
  p5.circle(centerPoint.x, centerPoint.y, size.width - margin);

  // inner stuff
  p5.fill(randomColor(p5));
  p5.circle(centerPoint.x, centerPoint.y, size.width - margin - crustWidth * 2);

  const drawToppings = (count: number, color: p5Types.Color) => {
    p5.fill(color);

    for (let i = 0; i < count; i++) {
      const toppingSize = p5.random(toppingSizeBounds[0], toppingSizeBounds[1]);
      const maxRadiusFromCenter = size.width / 2 - margin / 2 - crustWidth - 20;
      const distanceFromCenter = p5.random(0, maxRadiusFromCenter);
      const toppingCenter = getPointAtRandomAngle(p5, centerPoint, distanceFromCenter);
      p5.circle(toppingCenter.x, toppingCenter.y, toppingSize);
    }
  };

  const topping1Count = Math.floor(p5.random(4, 12));
  const topping1Color = randomColor(p5);
  drawToppings(topping1Count, topping1Color);

  const topping2Count = Math.floor(p5.random(3, 8));
  const topping2Color = randomColor(p5);
  drawToppings(topping2Count, topping2Color);

  p5.noLoop();
};

export default () => {
  return <SketchPageContainer draw={draw} title={"15 minute sketch - pizza generator"} dateText={"2022-07-13"} />;
};
