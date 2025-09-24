import React from 'react';
import CardCreator from '../components/CardCreator';
import { SharedNav } from '../components/SharedNav';

const CardCreatorPage: React.FC = () => {
  return (
    <>
      <SharedNav />
      <CardCreator />
    </>
  );
};

export default CardCreatorPage;