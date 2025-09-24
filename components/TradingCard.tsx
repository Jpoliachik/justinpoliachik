import React from "react";
import type { CardData, CardMove, MoveType, TypeConfig } from "../types/card";

const typeConfig: Record<MoveType, TypeConfig> = {
  nature: { icon: "tree.svg", color: "#16a34a", name: "Nature" },
  fire: { icon: "flame.svg", color: "#dc2626", name: "Fire" },
  psychic: { icon: "eye.svg", color: "#9333ea", name: "Psychic" },
  water: { icon: "droplet.svg", color: "#2563eb", name: "Water" },
  electric: { icon: "bolt.svg", color: "#eab308", name: "Electric" },
  cosmic: { icon: "spiral.svg", color: "#ec4899", name: "Cosmic" },
  toxic: { icon: "biohazard.svg", color: "#84cc16", name: "Toxic" },
  dream: { icon: "moon.svg", color: "#4f46e5", name: "Dream" },
  crystal: { icon: "gem.svg", color: "#06b6d4", name: "Crystal" },
  sound: { icon: "music.svg", color: "#ea580c", name: "Sound" },
  strength: { icon: "dumbbell.svg", color: "#dc2626", name: "Strength" },
};

const backgroundColorMap = {
  indigo: "#4c1d95",
  purple: "#6b21a8",
  green: "#166534",
  blue: "#1e3a8a",
  red: "#991b1b",
  yellow: "#a16207",
  pink: "#be185d",
  orange: "#c2410c",
  teal: "#115e59",
  cyan: "#155e75",
};

interface TypeIconsProps {
  count: number;
  moveType: MoveType;
}

const TypeIcons: React.FC<TypeIconsProps> = ({ count, moveType }) => {
  const currentType = typeConfig[moveType] || typeConfig.nature;
  const safeCount = Math.min(Math.max(count, 1), 4);

  const icons = Array.from({ length: safeCount }, (_, i) => (
    <div
      key={i}
      className="w-8 h-8 rounded-full flex items-center justify-center"
      style={{ backgroundColor: currentType.color }}
    >
      <img
        src={`/images/card-icons/${currentType.icon}`}
        className="w-6 h-6 filter brightness-0 invert"
        alt={currentType.name}
      />
    </div>
  ));

  if (safeCount <= 2) {
    return <div className="flex gap-2">{icons}</div>;
  } else {
    return (
      <div className="flex flex-col gap-1">
        <div className="flex gap-2">{icons.slice(0, 2)}</div>
        <div className="flex gap-2">{icons.slice(2)}</div>
      </div>
    );
  }
};

interface MoveDisplayProps {
  move: CardMove;
}

const MoveDisplay: React.FC<MoveDisplayProps> = ({ move }) => {
  return (
    <div className="flex items-center justify-between gap-4 w-full p-1">
      <div className="flex gap-6">
        <TypeIcons count={move.iconCount} moveType={move.type} />
        <div className="flex-1">
          <span className="font-bold text-2xl">{move.title}</span>
          <div className="mt-1 text-2xl leading-snug">{move.description}</div>
        </div>
      </div>
      <div className="text-3xl font-bold text-yellow-400">{move.damage}</div>
    </div>
  );
};

interface TradingCardProps {
  cardData: CardData;
}

const TradingCard: React.FC<TradingCardProps> = ({ cardData }) => {
  const { name, hp, image, tagline, moves, backgroundColor } = cardData;

  const getBackgroundStyle = () => {
    if (Array.isArray(backgroundColor) && backgroundColor.length >= 2) {
      const color1 = backgroundColorMap[backgroundColor[0]] || "#4c1d95";
      const color2 = backgroundColorMap[backgroundColor[1]] || "#6b21a8";
      return `linear-gradient(to right, ${color1}, ${color2})`;
    } else {
      const solidColor = backgroundColorMap[backgroundColor as keyof typeof backgroundColorMap] || "#4c1d95";
      return solidColor;
    }
  };

  return (
    <div
      className="w-[816px] h-[1110px] text-white rounded-3xl overflow-hidden relative border-[12px] border-yellow-500"
      style={{ background: getBackgroundStyle() }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 via-60% to-black pointer-events-none"></div>
      <div className="relative z-10 flex flex-col px-12 py-14 h-full">
        <div className="flex flex-row justify-between">
          <div className="px-6 py-2 bg-black border-4 border-yellow-500 rounded-xl font-extrabold text-3xl">{name}</div>

          <div className="flex items-center gap-2">
            <span className="font-extrabold text-2xl">{hp} HP</span>
            {moves.length > 0 && (
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: typeConfig[moves[0].type || "nature"].color }}
              >
                <img
                  src={`/images/card-icons/${typeConfig[moves[0].type || "nature"].icon}`}
                  className="w-6 h-6 filter brightness-0 invert"
                  alt={typeConfig[moves[0].type || "nature"].name}
                />
              </div>
            )}
          </div>
        </div>

        <img
          src={image}
          className="mt-2 w-full h-[570px] object-cover rounded-xl border-4 border-yellow-500"
          alt={name}
        />

        <div className="mt-0 py-4 text-center border-y border-slate-500 text-2xl italic">"{tagline}"</div>

        <div className="mt-2 flex flex-1 flex-col gap-3 justify-center">
          {moves.map((move, index) => (
            <MoveDisplay key={index} move={move} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradingCard;
