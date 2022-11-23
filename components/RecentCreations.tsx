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
            <div className="relative rounded-xl overflow-hidden bg-slate-200 aspect-square">
              <a className="hover:opacity-70" href="/">
                <Image
                  alt={creation.title || "creation"}
                  fill={true}
                  src={creation.images[0]}
                  style={{ objectFit: "cover" }}
                />
              </a>
            </div>
          );
        })}
      </div>
      <div className="text-right mt-2">
        <a href="/creations" className="text-l font-sans font-semibold text-green-700 no-underline hover:underline">
          All Creations
        </a>
      </div>
    </div>
  );
};
