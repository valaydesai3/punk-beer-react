import {
  SEARCH_BEERS,
  SET_LOADING,
  GET_RANDOM_BEER,
  SEARCH_BEER_LOADING,
  CLEAR_SEARCH_RESULTS
} from './types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_BEERS:
      return {
        ...state,
        beers: action.payload,
        searchBeerLoading: false,
        searchBeerFlag: true,
        searchText: action.searchText
      };
    case GET_RANDOM_BEER:
      return {
        ...state,
        randomBeer: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SEARCH_BEER_LOADING:
      return {
        ...state,
        searchBeerLoading: true
      };
    case CLEAR_SEARCH_RESULTS:
      return {
        ...state,
        beers: [],
        searchBeerLoading: false,
        searchBeerFlag: false,
        searchText: ''
      };
    default:
      return state;
  }
};
