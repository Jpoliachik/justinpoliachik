import React, { useState, useCallback } from "react";
import TradingCard from "./TradingCard";
import CardCreatorForm from "./CardCreatorForm";
import type { CardData } from "../types/card";

const CardCreator: React.FC = () => {
  // Initial Bob Ross data for testing
  const initialData: CardData = {
    name: "Bob and Morty Ross",
    hp: "420",
    image: "/bob_and_morty_ross.png",
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

  const handleFormUpdate = useCallback((newData: CardData) => {
    setCardData(newData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <a href="/" className="text-gray-600 hover:text-gray-900">
            ← Back to justinpoliachik.com
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Card Creator</h1>

        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
          {/* Card Preview */}
          <div className="flex justify-center">
            <div className="scale-75 lg:scale-100 origin-top">
              <TradingCard cardData={cardData} />
            </div>
          </div>

          {/* Form Controls - Made wider from w-96 to w-[480px] */}
          <div className="w-full lg:w-[480px] bg-white rounded-lg shadow-lg p-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Card Properties</h2>
            <CardCreatorForm initialData={initialData} onUpdate={handleFormUpdate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCreator;
