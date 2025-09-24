import React, { useState, useCallback, useRef } from "react";
import TradingCard from "./TradingCard";
import CardCreatorForm from "./CardCreatorForm";
import { toPng } from "html-to-image";
import { Download } from "lucide-react";
import type { CardData } from "../types/card";

const CardCreator: React.FC = () => {
  // Initial Bob Ross data for testing
  const initialData: CardData = {
    name: "Bob and Morty Ross",
    hp: "420",
    image: "https://justinpoliachik.com/images/bob_and_morty_ross.png",
    tagline: "Happy little accidents in every dimension",
    moves: [
      {
        title: "Happy Trees",
        description: "Summon a forest of joy that heals all allies",
        iconCount: 3,
        damage: "60",
        type: "nature",
      },
      {
        title: "Cosmic Brush",
        description: "Paint reality itself with interdimensional colors",
        iconCount: 2,
        damage: "80",
        type: "cosmic",
      },
    ],
    backgroundColor: ["purple", "indigo"],
  };

  const [cardData, setCardData] = useState<CardData>(initialData);
  const [isExporting, setIsExporting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleFormUpdate = useCallback((newData: CardData) => {
    setCardData(newData);
  }, []);

  const handleExportPNG = useCallback(async () => {
    if (!cardRef.current) return;

    setIsExporting(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        width: 816,
        height: 1110,
        pixelRatio: 2, // For higher quality
      });

      // Create download link
      const link = document.createElement("a");
      link.download = `${cardData.name.replace(/\s+/g, "_")}_card.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Failed to export card:", error);
    } finally {
      setIsExporting(false);
    }
  }, [cardData.name]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-4 md:py-8">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8">Card Creator</h1>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-center lg:items-start">
          {/* Card Preview - On top for mobile, left side for desktop */}
          <div className="flex flex-col items-center gap-4 w-full lg:w-auto">
            {/* Card wrapper with responsive height */}
            <div
              ref={cardRef}
              className="relative mx-auto w-full max-w-[367px] h-[500px] sm:max-w-[490px] sm:h-[666px] md:max-w-[612px] md:h-[833px] lg:max-w-none lg:h-auto"
            >
              <div className="absolute top-0 left-0 origin-top-left scale-[0.45] sm:scale-[0.6] md:scale-[0.75] lg:scale-[0.85] xl:scale-100 lg:relative lg:origin-top">
                <TradingCard cardData={cardData} />
              </div>
            </div>

            {/* Export button */}
            <button
              onClick={handleExportPNG}
              disabled={isExporting}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              <Download size={20} />
              {isExporting ? "Exporting..." : "Export as PNG"}
            </button>
          </div>

          {/* Form Controls - Full width on mobile, fixed width on desktop */}
          <div className="w-full lg:w-[560px] bg-white rounded-lg shadow-lg p-4 md:p-6 lg:max-h-[90vh] lg:overflow-y-auto">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Card Properties</h2>
            <CardCreatorForm initialData={initialData} onUpdate={handleFormUpdate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCreator;
