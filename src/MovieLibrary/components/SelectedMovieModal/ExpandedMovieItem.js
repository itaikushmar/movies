import React from 'react';
import PropTypes from 'prop-types';

import TMDBImage from '../MoviesList/components/TMDBImage';
import './ExpandedMovieItem.css';

const ExpandedMovieItem = ({
  movie: {
    title,
    original_title,
    poster_path,
    overview,
    vote_average,
    vote_count,
    release_date
  }
}) => {
  const releaseDate = new Date(release_date).toLocaleDateString();
  const movieTitle =
    original_title === title ? title : `${title} (${original_title})`;
  return (
    <div className='expanded-movie-item'>
      <TMDBImage src={poster_path} className='poster' />
      <div className='description'>
        <div className='movie_title_section'>
          <h2 className='movie_title'>{movieTitle}</h2>
          <h5 className='movie_subTitle'>
            {releaseDate} | {vote_average} ({vote_count} votes)
          </h5>
        </div>
        <div className='overview'>
          <span>{overview}</span>
        </div>
      </div>
    </div>
  );
};

ExpandedMovieItem.propTypes = {
  movie: PropTypes.object.isRequired
};

export default ExpandedMovieItem;
