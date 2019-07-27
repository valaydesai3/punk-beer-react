import React, { useReducer } from 'react';
import axios from 'axios';
import PunkBeerContext from './punkBeerContext';
import PunkBeerReducer from './punkBeerReducer';
import {
  SEARCH_BEERS,
  SET_LOADING,
  GET_RANDOM_BEER,
  SEARCH_BEER_LOADING,
  CLEAR_SEARCH_RESULTS
} from './types';

const PunkBerState = props => {
  const initialState = {
    randomBeer: {},
    beers: [],
    loading: false,
    searchBeerLoading: false,
    searchBeerFlag: false,
    searchText: ''
  };

  const [state, dispatch] = useReducer(PunkBeerReducer, initialState);

  // Search Beers
  const searchBeers = async (searchText, searchBy) => {
    setLoading('searchbeer');
    const res = await axios.get(
      `https://api.punkapi.com/v2/beers?${searchBy}=${searchText}`
    );
    dispatch({
      type: SEARCH_BEERS,
      payload: res.data,
      searchText: searchText
    });
  };

  // Get Random Beer
  const getRandomBeer = async nonAlcoholic => {
    setLoading('randombeer');
    let data = null;

    await axios.get(`https://api.punkapi.com/v2/beers/random`).then(result => {
      data = result.data[0];
      if (nonAlcoholic) {
        if (Number(data.abv) > 5) {
          getRandomBeer(true);
        } else {
          dispatch({
            type: GET_RANDOM_BEER,
            payload: data
          });
        }
      } else {
        dispatch({
          type: GET_RANDOM_BEER,
          payload: data
        });
      }
    });
  };

  // Clear Search Results
  const clearSearchResults = () => dispatch({ type: CLEAR_SEARCH_RESULTS });

  // Set Loading
  const setLoading = type => {
    type === 'randombeer'
      ? dispatch({ type: SET_LOADING })
      : dispatch({ type: SEARCH_BEER_LOADING });
  };

  return (
    <PunkBeerContext.Provider
      value={{
        randomBeer: state.randomBeer,
        beers: state.beers,
        loading: state.loading,
        searchBeerLoading: state.searchBeerLoading,
        searchBeerFlag: state.searchBeerFlag,
        searchText: state.searchText,
        getRandomBeer,
        setLoading,
        searchBeers,
        clearSearchResults
      }}
    >
      {props.children}
    </PunkBeerContext.Provider>
  );
};

export default PunkBerState;
