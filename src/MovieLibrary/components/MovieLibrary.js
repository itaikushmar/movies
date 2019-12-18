import React from 'react';

import logo from './logo.svg';
import './MovieLibrary.css';
import MoviesList from './MoviesList';

const MovieLibrary = () => (
  <div className="MovieLibrary">
    <header className="ML-header">
      <img src={logo} className="ML-logo" alt="logo" />
      <h1 className="ML-title">Movies</h1>
    </header>
    <div className="ML-intro">
      <MoviesList />
    </div>
  </div>
);

export default MovieLibrary;
