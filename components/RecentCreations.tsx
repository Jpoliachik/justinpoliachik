import Image from "next/image";
import { CreationItem } from "../lib/creations";

export type RecentCreationProps = {
  creationsList: CreationItem[];
};

export const RecentCreations = ({ creationsList }: RecentCreationProps) => {
  console.log({ creationsList });

  const firstFour = creationsList.slice(0, 4);

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {firstFour.map((creation) => {
          return (
            <a href={"/"} className="rounded-xl overflow-hidden bg-slate-200 relative">
              <Image
                alt={creation.title || "creation"}
                fill={true}
                // width={200}
                // height={200}
                src={creation.images[0]}
                style={{ objectFit: "contain", overflow: "hidden", aspectRatio: "1" }}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};
