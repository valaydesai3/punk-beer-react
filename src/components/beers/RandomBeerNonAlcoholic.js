import React, { useContext } from 'react';
import PunkBeerContext from '../../context/punkBeerContext';

const RandomBeerNonAlcoholic = () => {
  const punkBeerContext = useContext(PunkBeerContext);
  return (
    <div data-testid="nonAlcoBeerBtn">
      <button
        className="btn"
        onClick={() => punkBeerContext.getRandomBeer(true)}
      >
        Rnadom non-alcoholic beer
      </button>
    </div>
  );
};

export default RandomBeerNonAlcoholic;
