import React from 'react';

import TMDBImage from './TMDBImage';;

const ExpandedMovieItem = ({movie: {title, original_title, poster_path, overview, vote_average, vote_count}}) => (
    <div className="expanded-movie-item">
      <TMDBImage src={poster_path} className="poster" />
      <div className="description">
        <h2>{title}({original_title})</h2>
        <div><h4>Rank(votes count)</h4>: <span>{vote_average}({vote_count})</span></div>
        <span>{overview}</span>
      </div>
    </div>
  )

  export default ExpandedMovieItem;