import React, { useState } from 'react';
import TradingCard from './TradingCard';
import type { CardData } from '../types/card';

const CardCreator: React.FC = () => {
  // Hardcoded Bob Ross data for testing
  const [cardData] = useState<CardData>({
    name: 'Bob Ross',
    hp: 420,
    image: '/bob_and_morty_ross.png',
    tagline: 'Happy little accidents in every dimension',
    moves: [
      {
        title: 'Happy Trees',
        description: 'Summon a forest of joy that heals all allies',
        iconCount: 3,
        damage: 60,
        type: 'nature'
      },
      {
        title: 'Cosmic Brush',
        description: 'Paint reality itself with interdimensional colors',
        iconCount: 2,
        damage: 80,
        type: 'cosmic'
      }
    ],
    backgroundColor: ['purple', 'indigo']
  });

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Card Creator</h1>

        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
          {/* Card Preview */}
          <div className="flex justify-center">
            <div className="scale-75 lg:scale-100 origin-top">
              <TradingCard cardData={cardData} />
            </div>
          </div>

          {/* Form Controls (placeholder for now) */}
          <div className="w-full lg:w-96 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Card Properties</h2>
            <p className="text-gray-600">Form controls coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCreator;