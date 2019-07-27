import React, { useContext } from 'react';
import BeerItem from './BeerItem';
import Spinner from '../layout/Spinner';
import PunkBeerContext from '../../context/punkBeerContext';

const Beers = () => {
  const punkBeerContext = useContext(PunkBeerContext);
  const {
    searchBeerLoading,
    searchBeerFlag,
    searchText,
    beers
  } = punkBeerContext;

  if (searchBeerLoading) {
    return <Spinner />;
  }

  if (searchBeerFlag && beers.length === 0) {
    return <h3 data-testid="noResults">No beers found for "{searchText}"</h3>;
  } else if (searchBeerFlag && beers.length > 0) {
    return (
      <div data-testid="searchResults" style={beerStyle}>
        <h3>Search Results for "{searchText}"</h3>
        {beers.map(beer => (
          <BeerItem key={beer.id} beer={beer} />
        ))}
      </div>
    );
  } else {
    return null;
  }
};

const beerStyle = {};

export default Beers;
