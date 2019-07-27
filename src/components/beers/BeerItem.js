import React from 'react';
import PropTypes from 'prop-types';
import NoImage from '../layout/image-not-available.png';

const BeerItem = ({ beer }) => {
  return (
    <div className="card beer-item" data-testid="beerItem">
      <div className="card-grid-img">
        <img src={beer.image_url === null ? NoImage : beer.image_url} alt="Beer" />
      </div>
      <div className="card-grid-body">
        <p className="card-grid-name">{beer.name}</p>
        <p className="card-grid-description">{beer.description}</p>
        <p className="card-grid-tagline">
          {beer.tagline}
          <span>{beer.first_brewed}</span>
          <span>{beer.abv}&#37;</span>
        </p>
      </div>
    </div>
  );
};

BeerItem.propTypes = {
  beer: PropTypes.object.isRequired
};

export default BeerItem;
