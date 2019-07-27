// __tests__/fetch.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import axiosMock from 'axios';
import PunkBeerContext from '../../context/punkBeerContext';
import Beers from './Beers';

afterEach(cleanup);

const beers = [
  {
    id: 1,
    name: 'Chaos Theory',
    tagline: 'Predictably Random IPA.',
    first_brewed: '10/2008',
    description:
      'Chaos Theory is the most under- rated achievement of 20th Century science. This beer can only aspire to parallel to the mathematical use of the word chaos, which is at odds to the common parlance. The purest showcase of the magnificent hop that is Nelson Sauvin; grapefruit, pineapple and caramel sing above the chaos of life.',
    image_url: 'https://images.punkapi.com/v2/124.png',
    abv: 7.1
  },
  {
    id: 2,
    name: 'Test beer',
    tagline: 'Test beer tagline',
    first_brewed: '10/2008',
    description: 'Test beer desc',
    image_url: 'https://images.punkapi.com/v2/124.png',
    abv: 4.1
  }
];

test('renders beers component with no beers found', async () => {
  const { getByTestId } = render(
    <PunkBeerContext.Provider
      value={{
        searchBeerLoading: false,
        searchBeerFlag: true,
        searchText: 'test',
        beers: []
      }}
    >
      <Beers />
    </PunkBeerContext.Provider>
  );
  expect(getByTestId('noResults')).toHaveTextContent(
    'No beers found for "test"'
  );
  expect(getByTestId('noResults')).toMatchSnapshot();
});

test('renders beers component with beers found', async () => {
  const { getByTestId } = render(
    <PunkBeerContext.Provider
      value={{
        searchBeerLoading: false,
        searchBeerFlag: true,
        searchText: 'test',
        beers: beers
      }}
    >
      <Beers />
    </PunkBeerContext.Provider>
  );
  expect(getByTestId('searchResults')).toHaveTextContent('Chaos Theory');
  expect(getByTestId('searchResults')).toMatchSnapshot();
});
