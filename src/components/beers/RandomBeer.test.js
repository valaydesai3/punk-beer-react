// __tests__/fetch.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import axiosMock from 'axios';
import PunkBeerContext from '../../context/punkBeerContext';
import RandomBeer from './RandomBeer';

afterEach(cleanup);

test('loads random beer card', async () => {
  const randomBeer = {
    name: 'Chaos Theory',
    tagline: 'Predictably Random IPA.',
    first_brewed: '10/2008',
    description:
      'Chaos Theory is the most under- rated achievement of 20th Century science. This beer can only aspire to parallel to the mathematical use of the word chaos, which is at odds to the common parlance. The purest showcase of the magnificent hop that is Nelson Sauvin; grapefruit, pineapple and caramel sing above the chaos of life.',
    image_url: 'https://images.punkapi.com/v2/124.png',
    abv: 7.1
  };

  axiosMock.get.mockResolvedValueOnce(() => Promise.resolve(randomBeer));

  let getRandomBeer = jest.fn();
  let setLoading = jest.fn();

  const { container, getByTestId } = render(
    <PunkBeerContext.Provider
      value={{
        randomBeer: randomBeer,
        loading: false,
        getRandomBeer,
        setLoading
      }}
    >
      <RandomBeer />
    </PunkBeerContext.Provider>
  );
  expect(getByTestId('randomBeerCard')).toHaveTextContent('Chaos Theory');
  expect(getByTestId('randomBeerCard')).toHaveTextContent(
    'grapefruit, pineapple and caramel'
  );
  expect(getByTestId('randomBeerCard')).toHaveTextContent(
    'Predictably Random IPA.'
  );
  expect(getByTestId('randomBeerCard')).toHaveTextContent('10/2008');
  expect(getByTestId('randomBeerCard')).toHaveTextContent('7.1');

  const buttons = container.getElementsByTagName('<button>');
  for (let btn of buttons) {
    expect(btn).toHaveClass('btn');
  }

  expect(getByTestId('randomBeerCard')).toMatchSnapshot();
});
