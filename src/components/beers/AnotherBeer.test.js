// __tests__/fetch.test.js
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import PunkBeerContext from '../../context/punkBeerContext';
import AnotherBeer from './AnotherBeer';

afterEach(cleanup);

test('renders another beer button', async () => {
  let getRandomBeer = jest.fn();

  const { getByText, getByTestId } = render(
    <PunkBeerContext.Provider
      value={{
        getRandomBeer
      }}
    >
      <AnotherBeer />
    </PunkBeerContext.Provider>
  );
  expect(getByTestId('anotherBeerBtn')).toHaveTextContent('Another Beer');

  fireEvent.click(getByText('Another Beer'));
  expect(getRandomBeer).toHaveBeenCalled();
  expect(getByTestId('anotherBeerBtn')).toMatchSnapshot();
});
