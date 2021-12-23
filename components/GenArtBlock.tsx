import dynamic from "next/dynamic";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const P5JsComponent = dynamic(() => import("./P5Component"), { ssr: false });

export const GenArtBlock = () => {
  const targetRef = useRef<HTMLDivElement>();
  const [shouldRenderSketch, setShouldRenderSketch] = useState(false);
  const [size, setSize] = useState({ height: 0, width: 0 });

  useLayoutEffect(() => {
    if (targetRef.current) {
      setSize({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      });
      setShouldRenderSketch(true);
    }
  }, []);

  const onRedraw = () => {
    setShouldRenderSketch(false);
    setTimeout(() => {
      setShouldRenderSketch(true);
    });
  };
  return (
    <div>
      <div ref={targetRef} className="w-full h-72 border-2 border-white rounded-lg overflow-hidden bg-gray-200">
        {shouldRenderSketch && <P5JsComponent width={size.width} height={size.height} />}
      </div>
      <div className="flex flex-row justify-between">
        <a href="#" className="font-sans text-xs text-gray-400 no-underline hover:underline">
          Generative Art - "Abstract Waves"
        </a>
        <button className="font-sans text-xs font-semibold no-underline hover:underline" onClick={onRedraw}>
          Redraw
        </button>
      </div>
    </div>
  );
};

class Random {
  private seed;
  constructor(seed) {
    this.seed = seed;
  }
  random_dec() {
    /* Algorithm "xor" from p. 4 of Marsaglia, "Xorshift RNGs" */
    this.seed ^= this.seed << 13;
    this.seed ^= this.seed >> 17;
    this.seed ^= this.seed << 5;
    return ((this.seed < 0 ? ~this.seed + 1 : this.seed) % 1000) / 1000;
  }
  random_num(a, b) {
    return a + (b - a) * this.random_dec();
  }
  random_int(a, b) {
    return Math.floor(this.random_num(a, b + 1));
  }
  random_bool(p) {
    return this.random_dec() < p;
  }
  random_choice(list) {
    return list[Math.floor(this.random_num(0, list.length * 0.99))];
  }
}

function additionalSeed(existingSeed, modifierNum) {
  const largeNum = parseInt(existingSeed.slice(0, 16), 16);
  const newNum = largeNum * modifierNum;
  const newSeed = new Random(newNum);
  return newSeed;
}

function random_hash() {
  let x = "0123456789abcdef",
    hash = "0x";
  for (let i = 64; i > 0; --i) {
    hash += x[Math.floor(Math.random() * x.length)];
  }
  return hash;
}

const sketch = (w, h) => (p5) => {
  const tokenData = {
    // "hash": "0x11ac128f8b54949c12d04102cfc01960fc496813cbc3495bf77aeed738579738",
    hash: random_hash(),
    tokenId: "123000456",
  };
  const seed = tokenData.hash;

  const canvasSize = { width: 1000, height: 400 };

  p5.setup = () => {
    p5.createCanvas(canvasSize.width, canvasSize.height);
  };

  p5.draw = () => {
    function drawRidge(y) {
      p5.beginShape();
      p5.vertex(-1, canvasSize.height + 1);

      const stepWidthBounds = [canvasSize.width * 0.1, canvasSize.width * 0.6];

      let prevX = 0;
      p5.vertex(prevX, y);
      const startingPeakSeed = additionalSeed(tokenData.hash, y + 3892);
      const startingPeak = startingPeakSeed.random_bool(0.5);
      let isPeak = startingPeak;
      while (prevX < canvasSize.width) {
        const newSeed = additionalSeed(seed, y + prevX);
        const stepWidth = newSeed.random_num(stepWidthBounds[0], stepWidthBounds[1]);
        const x = prevX + stepWidth;
        p5.quadraticVertex(prevX + stepWidth / 2, isPeak ? y - stepWidth / 2 : y + stepWidth / 2, x, y);
        prevX = x;
        isPeak = !isPeak;
      }

      p5.vertex(canvasSize.width + 1, canvasSize.height + 1);
      p5.endShape(p5.CLOSE);
    }

    function interpolateTopDown(lower, upper, ratio) {
      return upper - (upper - lower) * ratio;
    }

    function randomPairSeparate(lower, upper, modifiers) {
      let a = additionalSeed(seed, modifiers[0]).random_num(lower, upper);
      let b = additionalSeed(seed, modifiers[1]).random_num(lower, upper);
      const diff = Math.abs(upper - lower);

      // if <30% different,try again.
      if (Math.abs(a - b) < diff * 0.4) {
        a = additionalSeed(seed, modifiers[2]).random_num(lower, upper);
        b = additionalSeed(seed, modifiers[3]).random_num(lower, upper);
      }
      if (Math.abs(a - b) < diff * 0.4) {
        a = additionalSeed(seed, modifiers[4]).random_num(lower, upper - diff / 2);
        b = additionalSeed(seed, modifiers[5]).random_num(lower + diff / 2, upper);
      }
      return [a, b];
    }

    const hueRange = [
      additionalSeed(seed, 371883).random_int(0, 100),
      additionalSeed(seed, 8984354).random_int(0, 100),
    ];
    const satRange = randomPairSeparate(
      0,
      55,
      [198273, 6879123, 40109283, 1209102983, 5498792371, 475648729, 10229834, 192384789]
    );
    const lightRange = randomPairSeparate(35, 98, [983742, 5478, 102983, 4980324, 865794, 273628, 1628937, 98653]);

    p5.colorMode(p5.HSL, 100);

    const bgColor = p5.color(hueRange[1] + 1, satRange[1] + 1, lightRange[1] + 1);
    p5.background(bgColor);

    p5.strokeWeight(additionalSeed(seed, 5843510).random_int(1, 5));

    // nostroke vs light vs dark
    const strokeSeed = additionalSeed(seed, 63548).random_dec();
    if (strokeSeed < 0.15) {
      p5.noStroke();
    } else if (strokeSeed <= 0.6) {
      p5.stroke(additionalSeed(seed, 2457).random_int(77, 100));
    } else {
      p5.stroke(additionalSeed(seed, 4234526).random_int(0, 38));
    }

    const count = additionalSeed(seed, 342110).random_int(4, 11);

    // draws back to front
    for (let i = 1; i < count + 1; i++) {
      const currentRatio = i / count;
      const hue = interpolateTopDown(hueRange[0], hueRange[1], currentRatio);
      const sat = interpolateTopDown(satRange[0], satRange[1], currentRatio);
      const light = interpolateTopDown(lightRange[0], lightRange[1], currentRatio);
      p5.colorMode(p5.HSL, 100);
      const currentcolor = p5.color(hue, sat, light);
      p5.fill(currentcolor);
      const offset = (i - 1) * (canvasSize.height / count);
      drawRidge(offset);
    }

    p5.noLoop();
  };
};
