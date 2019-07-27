import React, { useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import AnotherBeer from './AnotherBeer';
import RandomBeerNonAlcoholic from './RandomBeerNonAlcoholic';
import PunkBeerContext from '../../context/punkBeerContext';
import NoImage from '../layout/image-not-available.png';

const RandomBeer = () => {
  const punkBeerContext = useContext(PunkBeerContext);

  const { loading, getRandomBeer, randomBeer } = punkBeerContext;

  useEffect(() => {
    getRandomBeer();
    // eslint-disable-next-line
  }, []);
  const {
    name,
    tagline,
    first_brewed,
    description,
    image_url,
    abv
  } = randomBeer;

  if (loading) return <Spinner />;

  return (
    <div className="card" data-testid="randomBeerCard">
      <h4 className="card-title">{name}</h4>
      <div className="card-grid">
        <div className="card-grid-img">
          <img
            src={image_url === null ? NoImage : image_url}
            alt="Beer"
          />
        </div>
        <div className="card-grid-body">
          <p className="card-grid-description">{description}</p>
          <p className="card-grid-tagline">
            {tagline}
            <span>{first_brewed}</span>
            <span>{abv}&#37;</span>
          </p>
        </div>
        <div className="card-grid-buttons">
          <React.Fragment>
            <AnotherBeer data-testid="anotherBeer" />
            <RandomBeerNonAlcoholic />
          </React.Fragment>
        </div>
      </div>
    </div>
  );
};

export default RandomBeer;
