import p5Types from "p5";

import { MainFooter } from "../components/MainFooter";
import { SharedHead } from "../components/SharedHead";
import { SharedNav } from "../components/SharedNav";
import { GenArtCanvas } from "../components/GenArtCanvas";
import { useWindowSize } from "usehooks-ts";

export interface SketchPageContainerProps {
  title?: string;
  description?: string;
  dateText?: string;
  canvasSize?: { width: number; height: number };
  draw: (p5: p5Types, size: { width: number; height: number }) => void;
}

export const SketchPageContainer = ({
  canvasSize = { width: 600, height: 600 },
  draw,
  title,
  description,
  dateText,
}: SketchPageContainerProps) => {
  const { width } = useWindowSize();
  const size = Math.min(width - 20, canvasSize.width);
  return (
    <div>
      <SharedHead title="Justin Poliachik" />
      <body className="text-gray-800">
        <SharedNav />
        <div className="container w-full md:max-w-3xl mx-auto pt-20 pb-28">
          <div className="flex items-center flex-col">
            <GenArtCanvas width={size} height={canvasSize.height} draw={draw} />
            <div style={{ width: size }}>
              <h2 className="text-xl font-bold text-slate-800">{title}</h2>
              <p className="text-base text-slate-500">{description}</p>
              <p className="italic text-sm text-slate-400">{dateText}</p>
            </div>
          </div>
        </div>
        <div className="w-full h-24 bg-gray-100 justify-center">
          <div className="h-full w-full md:max-w-3xl mx-auto px-4">
            <MainFooter />
          </div>
        </div>
      </body>
    </div>
  );
};
