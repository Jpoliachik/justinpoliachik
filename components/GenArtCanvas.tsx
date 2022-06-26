import dynamic from "next/dynamic";
import { useState } from "react";

const Sketch = dynamic(() => import("react-p5"), { ssr: false });
import p5Types from "p5";

interface GenArtCanvasProps {
  draw: (p5: p5Types, size: { width: number; height: number }) => void;
  width: number;
  height: number;
  className?: string;
}
export const GenArtCanvas = (props: GenArtCanvasProps) => {
  const [shouldRenderSketch, setShouldRenderSketch] = useState(true);

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(props.width, props.height).parent(canvasParentRef);
  };

  const onRedraw = () => {
    // not a very elegant solution here,
    // but we need to dismount and remount the <P5AbstractWaves component
    // in order to re-render with a new sketch.
    // toggle shouldRenderSketch, then back to 'true' quickly to dismount and remount.
    setShouldRenderSketch(false);
    setTimeout(() => {
      setShouldRenderSketch(true);
    });
  };

  return (
    <div className={props.className} style={{ width: props.width }}>
      <div
        style={{ width: props.width, height: props.height }}
        className="border-8 border-slate-200 rounded-md overflow-hidden"
      >
        {shouldRenderSketch && (
          <Sketch setup={setup} draw={(p5) => props.draw(p5, { width: props.width, height: props.height })} />
        )}
      </div>

      <div className="flex flex-row mt-2 justify-end">
        <button
          className="rounded-full font-sans text-xs text-white font-semibold bg-slate-400 hover:bg-slate-500 px-4 py-2"
          onClick={onRedraw}
        >
          Redraw
        </button>
      </div>
    </div>
  );
};
