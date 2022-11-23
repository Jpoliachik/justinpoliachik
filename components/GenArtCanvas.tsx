import dynamic from "next/dynamic";

const Sketch = dynamic(() => import("react-p5"), { ssr: false });
import p5Types from "p5";

export type DrawFunction = (p5: p5Types, size: { width: number; height: number }) => void;

interface GenArtCanvasProps {
  draw: DrawFunction;
  width: number;
  height: number;
  className?: string;
}
export const GenArtCanvas = (props: GenArtCanvasProps) => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(props.width, props.height).parent(canvasParentRef);
  };

  return (
    <div style={{ width: props.width, height: props.height }} className="rounded-xl overflow-hidden bg-slate-200">
      <Sketch setup={setup} draw={(p5) => props.draw(p5, { width: props.width, height: props.height })} />
    </div>
  );
};
