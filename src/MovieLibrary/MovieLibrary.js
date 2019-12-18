import React from 'react';

import Header from './components/Header';
import MoviesList from './components/MoviesList';
import './MovieLibrary.css';

const MovieLibrary = () => (
  <div className='MovieLibrary'>
    <Header />
    <MoviesList />
  </div>
);

export default MovieLibrary;
