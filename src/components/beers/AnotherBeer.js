import React, { useContext } from 'react';
import PunkBeerContext from '../../context/punkBeerContext';

const AnotherBeer = () => {
  const punkBeerContext = useContext(PunkBeerContext);
  return (
    <div data-testid="anotherBeerBtn">
      <button
        className="btn"
        onClick={() => punkBeerContext.getRandomBeer(false)}
      >
        Another Beer
      </button>
    </div>
  );
};

export default AnotherBeer;
