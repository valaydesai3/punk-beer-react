import React, { Fragment } from 'react';
import RandomBeer from '../beers/RandomBeer';
import Search from '../beers/Search';
import Beers from '../beers/Beers';

const Home = () => (
  <Fragment>
    <RandomBeer />
    <Search />
    <Beers />
  </Fragment>
);

export default Home;
