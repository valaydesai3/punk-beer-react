// __tests__/fetch.test.js
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import PunkBeerContext from '../../context/punkBeerContext';
import RandomBeerNonAlcoholic from './RandomBeerNonAlcoholic';

afterEach(cleanup);

test('renders non-alocholic beer button', async () => {
  let getRandomBeer = jest.fn();

  const { getByText, getByTestId } = render(
    <PunkBeerContext.Provider
      value={{
        getRandomBeer
      }}
    >
      <RandomBeerNonAlcoholic />
    </PunkBeerContext.Provider>
  );
  expect(getByTestId('nonAlcoBeerBtn')).toHaveTextContent(
    'Rnadom non-alcoholic beer'
  );

  fireEvent.click(getByText('Rnadom non-alcoholic beer'));
  expect(getRandomBeer).toHaveBeenCalled();
  expect(getByTestId('nonAlcoBeerBtn')).toMatchSnapshot();
});
