import Sketch from "react-p5";
import p5Types from "p5";

const P5AbstractWaves = (props: { width: number; height: number }) => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(props.width, props.height).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    function drawRidge(y) {
      p5.beginShape();
      p5.vertex(-5, props.height + 5);

      const stepWidthBounds = [props.width * 0.1, props.width * 0.6];

      let prevX = -5;
      p5.vertex(prevX, y);
      let isPeak = p5.random() > 0.5;
      while (prevX < props.width) {
        const stepWidth = p5.random(stepWidthBounds[0], stepWidthBounds[1]);
        const x = prevX + stepWidth;
        p5.quadraticVertex(prevX + stepWidth / 2, isPeak ? y - stepWidth / 2.3 : y + stepWidth / 2.3, x, y);
        prevX = x;
        isPeak = !isPeak;
      }

      p5.vertex(props.width + 1, props.height + 1);
      p5.endShape(p5.CLOSE);
    }

    function interpolateTopDown(lower, upper, ratio) {
      return upper - (upper - lower) * ratio;
    }

    function randomPairSeparate(lower, upper) {
      let a = p5.random(lower, upper);
      let b = p5.random(lower, upper);
      const diff = Math.abs(upper - lower);

      // must be >40% different
      while (Math.abs(a - b) < diff * 0.4) {
        a = p5.random(lower, upper);
        b = p5.random(lower, upper);
      }
      return [a, b];
    }

    const hueRange = [p5.random(0, 100), p5.random(0, 100)];
    const satRange = randomPairSeparate(0, 55);
    const lightRange = randomPairSeparate(35, 98);

    p5.colorMode(p5.HSL, 100);

    const bgColor = p5.color(hueRange[1] + 1, satRange[1] + 1, lightRange[1] + 1);
    p5.background(bgColor);

    p5.strokeWeight(p5.round(p5.random(1, 3)));

    // nostroke vs light vs dark
    const strokeSeed = p5.random();
    if (strokeSeed < 0.15) {
      p5.noStroke();
    } else if (strokeSeed <= 0.6) {
      p5.stroke(p5.random(77, 100));
    } else {
      p5.stroke(p5.random(0, 38));
    }

    const count = p5.round(p5.random(4, 9));

    // draws back to front
    for (let i = 1; i < count + 1; i++) {
      const currentRatio = i / count;
      const hue = interpolateTopDown(hueRange[0], hueRange[1], currentRatio);
      const sat = interpolateTopDown(satRange[0], satRange[1], currentRatio);
      const light = interpolateTopDown(lightRange[0], lightRange[1], currentRatio);
      p5.colorMode(p5.HSL, 100);
      const currentcolor = p5.color(hue, sat, light);
      p5.fill(currentcolor);
      const offset = (i - 1) * (props.height / count);
      drawRidge(offset);
    }

    p5.noLoop();
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default P5AbstractWaves;
