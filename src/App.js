import React from 'react';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import PunkBeerState from './context/PunkBeerState';

import './App.css';

const App = () => {
  return (
    <PunkBeerState>
      <div className="App">
        <Navbar />
        <div className="container">
          <Home />
        </div>
      </div>
    </PunkBeerState>
  );
};

export default App;
