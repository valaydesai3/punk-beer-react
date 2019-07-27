import React, { useState, useContext } from 'react';
import PunkBeerContext from '../../context/punkBeerContext';

const Search = () => {
  const punkBeerContext = useContext(PunkBeerContext);

  const [values, setValues] = useState({
    searchText: '',
    searchBy: 'beer_name',
    searchTextError: ''
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (values.searchTextError !== '') values.searchTextError = '';
    setValues({ ...values, [name]: value });
  };

  const validateInput = () => {
    let searchTextError = values.searchTextError;
    const searchTextValue = values.searchText;
    const searchByValue = values.searchBy;

    if (searchByValue === 'brewed_before') {
      searchTextError = !/^[0-9-]+$/.test(searchTextValue)
        ? 'Invalid Brewed Before Date. Format is mm-yyyy.'
        : '';
    } else {
      searchTextError = !/^[0-9A-Za-z\s-]+$/.test(searchTextValue)
        ? 'Invalid Beer Name'
        : '';
    }

    if (searchTextError) {
      setValues({
        ...values,
        searchTextError: searchTextError
      });
      return false;
    }
    return true;
  };

  const onSubmit = e => {
    e.preventDefault();
    punkBeerContext.clearSearchResults();
    const isValid = validateInput();
    if (isValid) {
      const searchText = values.searchText;
      const searchBy = values.searchBy;
      punkBeerContext.searchBeers(searchText, searchBy);
      setValues({ ...values, searchText: '', searchTextError: '' });
    }
  };

  return (
    <div data-testid="searchBeer" className="searchBeerForm">
      <h1>Search</h1>
      <form onSubmit={onSubmit} className="form">
        <div className="form-grid">
          <div className="search-box">
            <input
              type="text"
              name="searchText"
              placeholder="Search Beers..."
              autoComplete="off"
              value={values.searchText}
              onChange={handleInputChange}
            />
          </div>
          <div className="search-by">
            <label>
              <input
                type="radio"
                name="searchBy"
                value="beer_name"
                checked={values.searchBy === 'beer_name'}
                onChange={handleInputChange}
              />
              By Name
            </label>
            <label>
              <input
                type="radio"
                name="searchBy"
                value="brewed_before"
                checked={values.searchBy === 'brewed_before'}
                onChange={handleInputChange}
              />
              By Date
            </label>
          </div>
          <div className="search-button">
            <input
              type="submit"
              value="Search"
              data-testid="searchBtn"
              className="btn btn-dark btn-block"
            />
          </div>
        </div>
        <div data-testid="errorMessage" style={{ color: 'red' }}>
          {values.searchTextError ? values.searchTextError : null}
        </div>
      </form>
    </div>
  );
};

export default Search;
