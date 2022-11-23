import { useEffect, useState } from "react";
import { useElementSize } from "usehooks-ts";
import { DrawFunction, GenArtCanvas } from "./GenArtCanvas";

interface GenSketchProps {
  draw: DrawFunction;
  className?: string;
  enableRedraw?: boolean;
  size?: { width: number; height: number };
}
export const GenSketch = ({ className, size, enableRedraw, draw }: GenSketchProps) => {
  const [containerRef, { width, height }] = useElementSize();
  const [shouldRenderSketch, setShouldRenderSketch] = useState(false);

  useEffect(() => {
    setShouldRenderSketch(true);
  }, []);

  const onRedraw = () => {
    // not a very elegant solution here,
    // but we need to dismount and remount the <Sketch component
    // in order to re-generate and re-render with a new sketch.
    // toggle shouldRenderSketch, then back to 'true' quickly to dismount and remount.
    setShouldRenderSketch(false);
    setTimeout(() => {
      setShouldRenderSketch(true);
    });
  };

  return (
    <div className={className}>
      <div ref={containerRef} className={"h-full"} style={size ? { width: size.width, height: size.height } : null}>
        {shouldRenderSketch && ((width && height) || size) ? (
          <GenArtCanvas draw={draw} width={size ? size.width : width} height={size ? size.height : height} />
        ) : null}
      </div>
      {enableRedraw && (
        <div className="flex flex-row mt-2 justify-end">
          <button
            className="rounded-full font-sans text-xs text-white font-semibold bg-slate-400 hover:bg-slate-500 px-4 py-2"
            onClick={onRedraw}
          >
            Redraw
          </button>
        </div>
      )}
    </div>
  );
};
