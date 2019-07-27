// __tests__/fetch.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import BeerItem from './BeerItem';

afterEach(cleanup);

test('renders beer item', async () => {
  const randomBeer = {
    name: 'Chaos Theory',
    tagline: 'Predictably Random IPA.',
    first_brewed: '10/2008',
    description:
      'Chaos Theory is the most under- rated achievement of 20th Century science. This beer can only aspire to parallel to the mathematical use of the word chaos, which is at odds to the common parlance. The purest showcase of the magnificent hop that is Nelson Sauvin; grapefruit, pineapple and caramel sing above the chaos of life.',
    image_url: 'https://images.punkapi.com/v2/124.png',
    abv: 7.1
  };
  const { getByTestId } = render(<BeerItem beer={randomBeer} />);
  expect(getByTestId('beerItem')).toHaveTextContent('Chaos Theory');
  expect(getByTestId('beerItem')).toHaveTextContent(
    'grapefruit, pineapple and caramel sing above the chaos of life.'
  );
  expect(getByTestId('beerItem')).toHaveTextContent('Predictably Random IPA.');
  expect(getByTestId('beerItem')).toHaveTextContent('10/2008');
  expect(getByTestId('beerItem')).toHaveTextContent('7.1%');
  expect(getByTestId('beerItem')).toMatchSnapshot();
});
