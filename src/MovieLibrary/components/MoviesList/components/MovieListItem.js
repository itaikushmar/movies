import React from 'react';
import PropTypes from 'prop-types';

import TMDBImage from './TMDBImage';
import './MovieListItem.css';

const MovieListItem = ({movie, onSelect}) => {
  const handleClick = () => {
    onSelect(movie);
  };

  return (
    <div className='movie-list-item' onClick={handleClick}>
      <TMDBImage src={movie.poster_path} className='thumbnail' />
    </div>
  );
};

MovieListItem.propTypes = {
  movie: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default MovieListItem;
