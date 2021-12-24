import dynamic from "next/dynamic";
import { useLayoutEffect, useRef, useState } from "react";

const P5AbstractWaves = dynamic(() => import("./P5AbstractWaves"), { ssr: false });

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
      <div ref={targetRef} className="w-full h-72 rounded-2xl overflow-hidden bg-gray-200">
        {shouldRenderSketch && <P5AbstractWaves width={size.width} height={size.height} />}
      </div>
      <div className="flex flex-row justify-between mt-2">
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
