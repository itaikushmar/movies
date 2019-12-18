import React from 'react';

import './MovieLibrary.css';
import Header from './Header';
import MoviesList from './MoviesList';

const MovieLibrary = () => (
  <div className="MovieLibrary">
    <Header />
    <MoviesList />
  </div>
);

export default MovieLibrary;
