// __tests__/fetch.test.js
import React from 'react';
import { render, cleanup, fireEvent, getByText } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Search from './Search';
import PunkBeerContext from '../../context/punkBeerContext';

afterEach(cleanup);

let onSubmit = jest.fn();
let clearSearchResults = jest.fn();

test('renders search beer form', async () => {
  const { getByTestId, getByLabelText, getByPlaceholderText } = render(
    <PunkBeerContext.Provider
      value={{
        clearSearchResults
      }}
    >
      <Search />
    </PunkBeerContext.Provider>
  );

  expect(getByPlaceholderText('Search Beers...')).toHaveAttribute(
    'autocomplete',
    'off'
  );
  expect(getByPlaceholderText('Search Beers...').value).toBe('');
  expect(getByLabelText('By Name').value).toBe('beer_name');
  expect(getByLabelText('By Date').value).toBe('brewed_before');
  expect(getByTestId('searchBtn').value).toBe('Search');
});

test('validate search form', async () => {
  const { getByTestId, getByPlaceholderText, getByLabelText } = render(
    <PunkBeerContext.Provider
      value={{
        clearSearchResults
      }}
    >
      <Search />
    </PunkBeerContext.Provider>
  );

  fireEvent.click(getByTestId('searchBtn'));
  expect(getByTestId('errorMessage')).toHaveTextContent('Invalid Beer Name');
  expect(getByTestId('errorMessage')).toHaveStyle('color: red');

  const searchText = 'punk';
  const inputText = getByPlaceholderText('Search Beers...');
  fireEvent.change(inputText, { target: { value: searchText } });
  expect(inputText.value).toBe(searchText);
  expect(getByTestId('errorMessage')).not.toHaveTextContent(
    'Invalid Beer Name'
  );

  const searchBy = getByLabelText('By Date');
  fireEvent.click(searchBy);
  expect(searchBy.checked).toBe(true);

  fireEvent.click(getByTestId('searchBtn'));
  expect(getByTestId('errorMessage')).toHaveTextContent(
    'Invalid Brewed Before Date. Format is mm-yyyy.'
  );
  expect(getByTestId('errorMessage')).toHaveStyle('color: red');
});
