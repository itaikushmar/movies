import React from 'react';

import Header from './Header';
import MoviesList from './MoviesList';
import './MovieLibrary.css';

const MovieLibrary = () => (
  <div className="MovieLibrary">
    <Header />
    <MoviesList />
  </div>
);

export default MovieLibrary;
